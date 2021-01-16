const validateExis = require('./validatesExis')

module.exports = app => {
    const save = async (req, res) =>{
        const orders = { ...req.body }
        const idput = req.params.id

        const { validateSalesman,validateCustomer } = validateExis//exporting the promises

        //validating information 
        let errorInfo = ''
        if(orders.money_input == undefined || orders.money_input < 0 ){
            errorInfo.concat('error_money_input-')
        }
        if(orders.money_all == undefined || orders.money_all < 0){
            errorInfo.concat('error_money_all-')
        }

        if(errorInfo != ''){
            res.status(400).send(errorInfo)
            return
        }

        //validating information in db
        const validateSalesmen = await validateSalesman(orders.salesman_id, app)
        if(validateSalesmen == undefined){
            res.status(400).send('invalidate_salesman')
            return
        }

        const validateCustomers = await validateCustomer(orders.customer_id, app)
        if(validateCustomers == undefined){
            res.status(400).send('invalidate_customers')
            return
        }

        if(idput != undefined && !isNaN(idput)){
             await app.db('orders')
                .where({id: idput})
                .update({
                    customers_id: orders.customer_id,
                    salesman_id: orders.salesman_id,
                    money_input: orders.money_input,
                    money_rest: orders.money_rest,
                    money_all: orders.money_all,
                })
                .then(respo => res.status(204).send('success'))
                .catch(err => res.status(500).send('error_sever'))
    
        } else {
            await app.db
            .raw(`SELECT create_orders(${orders.salesman_id},${orders.customer_id},
                CAST (${orders.money_input} AS MONEY), 
                CAST (${orders.money_all} AS MONEY));`)
            .then(respo => res.status(204).send('success'))
            .catch(err => res.status(500).send('error_server'))
        }
    }

    //----------------------------------------------
    const get = async (req, res) =>{
        const limit = req.query.limit
        const page = req.query.page

        if(limit == undefined || isNaN(limit))
            limit = 10

        if(page == undefined || isNaN(page))
            page = 1

        await app.db('orders')
            .select('*')
            .limit(limit).offset(page * limit - limit)
            .then(respo => res.json(respo))
            .catch(err => res.status(500).send('error_server'))
    }
    
    //----------------------------------------------
    const getById = async (req, res) => {
        const idput = req.params.id

        if(idput != undefined && !isNaN(idput)){
            await app.db('orders')
                .select('*')
                .where({id: idput})
                .then(respo => res.json(respo))
                .catch(err => res.status(500).send('error_server'))
        }
    }
    
    //----------------------------------------------
    const cancel = async (req, res) => {
        const idput = req.params.id
        const textEx = { ...req.body }

        if(idput != undefined && !isNaN(idput)){
            if(textEx.text != undefined && textEx.text.length > 5){
                await app.db
                    .raw(`UPDATE orders SET is_cancel = ${true} WHERE id = ${idput};
                          UPDATE orders SET is_cancel_text = '${textEx.text}' WHERE id = ${idput};`)
                    .then(respo => res.status(204).send('success'))
                    .catch(err => res.status(500).send('error_server'))
            } else {
                res.status(400).send('invalidate_text')
            }
        } else {
            res.status(400).send('invalidate_id')
        }
    }


    return { save, get, getById, cancel }
}