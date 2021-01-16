module.exports= app =>{
    const save = async (req, res) =>{


    }

    //----------------------------------------------
    const get = async (req, res) => {
        let limit = req.query.limit
        let page = req.query.page

        if(limit == undefined || isNaN(limit))
            limit = 2

        if(page == undefined || isNaN(page))
            page = 1

        await app.db
            .select('*').from('production')
            .join('execution_production',{'execution_production.cd_production': 'production.cd_production'})
            .join('seam',{'seam.cd_production': 'production.cd_production'})
            .limit(limit).offset(page * limit - limit)
            .then(respo => res.json(respo) )
            .catch(err => res.status(500).send('error_server'))
    }

     //----------------------------------------------
    const getById = async (req, res) => {
        const idput = req.params.id

        if(idput != undefined){
            await app.db
                .select('*').from('production')
                .join('execution_production',{'execution_production.cd_production': 'production.cd_production'})
                .join('seam',{'seam.cd_production': 'production.cd_production'})
                .where({'production.cd_production':idput})
                .then(respo => res.json(respo))
                .catch(err => res.status(400).send(err))
        }
    }

     //----------------------------------------------
    const remove = async (req, res) => {



    }

    return { save, get, getById, remove }
}
