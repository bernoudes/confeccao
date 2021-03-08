const dataFormat = () =>{
    const today = new Date();
    const returDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate() + ' ' +
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    return returDate
}

module.exports= app =>{
    const save = async (req, res) =>{
        const cod = req.params.id
        const production = { ...req.body}

        const errorInfo = ''
        if(production.orders_id == undefined || isNaN(production.orders_id ))
            errorInfo.concat('error_orders_id-')
        
        if(production.product_id == undefined || isNaN(production.product_id))
            errorInfo.concat('error_product_id-')
        
        if(production.price_unity == undefined || isNaN(production.price_unity))
            errorInfo.concat('error_price_unity-')
        
        if(production.quantity_products == undefined || isNaN(production.quantity_products))
            errorInfo.concat('error_quantity_products-')
        
        if(errorInfo != ''){
            res.send(errorInfo)
            return
        }   

        if(cod != undefined){
            console.log(cod)
            await app.db('production')
                .where({cd_production:cod})
                .update({
                    product_id: production.product_id,
                    sales_price_unity: production.price_unity,
                    sales_quantity_products: production.quantity_products,
                    sales_embroidery: production.embroidery,
                    sales_silk: production.silk,
                    sales_laser_applique: production.laser_applique,
                    sales_laser_holes: production.laser_holes,
                    sales_sublimation_applique: production.sublimation_applique,
                    sales_sublimation_body: production.sublimation_body,
                    sales_vies: production.vies,
                    sales_forro: production.forro})
                .then(resp => res.status(204).send('success'))
                .catch(err => res.status(500).send('error_server') )
        } else {
            console.log(production)
            await app.db
                .raw(`SELECT create_production(
                    ${production.orders_id}, ${production.product_id},CAST(${production.price_unity} AS MONEY),
                    ${production.quantity_products},${production.embroidery},${production.silk},
                    ${production.laser_applique},${production.laser_holes},${production.sublimation_applique},
                    ${production.sublimation_body}, ${production.vies}, ${production.forro})`)
                .then(resp => {
                    const saveResp = resp.rows[0].create_production
                    res.send(saveResp)
                })
                .catch(err =>res.send(err))
        }
    }
    //----------------------------------------------
    //insert the date in db, in a timestamp type field for production control

    const modify  = async (req, res) => {
        const cod = req.params.id
        const production = { ...req.body }

        if(cod != undefined && production.field != undefined){
           await app.db('production')
                .update(`${production.field}`,`${dataFormat()}`)
                .where({cd_production: cod})
                .then(resp => res.status(204).send('success'))
                .catch(err => res.status(500).send('error_server'))
        }
    }

    //----------------------------------------------
    const get = async (req, res) => {
        let limit = req.query.limit
        let page = req.query.page

        if(limit == undefined || isNaN(limit))
            limit = 10

        if(page == undefined || isNaN(page))
            page = 1

        await app.db('production')
            .select('*')
            .limit(limit).offset(page * limit - limit)
            .then(respo => res.json(respo) )
            .catch(err => res.status(500).send('error_server'))
    }

     //----------------------------------------------
    const getById = async (req, res) => {
        const cod = req.params.id

        if(cod != undefined){
            await app.db('production')
                .select('*')
                .where({cd_production: cod})
                .then(respo => res.json(respo))
                .catch(err => res.status(500).send('error_server'))
        }
    }

     //----------------------------------------------
    const remove = async (req, res) => {
        const cod=req.params.id

        if(cod != undefined){
            await app.db
                .raw(`SELECT delete_production('${cod}');`)
                .then(resp => {
                        const deleteResp = resp.rows[0].delete_production
                        if( deleteResp == 'success'){
                            res.status(204).send(deleteResp)
                        } else {
                            res.status(400).send(deleteResp)
                        }
                })
                .catch(err => res.status(500).send('erro_server'))
        }
    }

    return { save, modify, get, getById, remove }
}
