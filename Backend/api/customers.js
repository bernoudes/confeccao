const validatingCpf = require('./validatingCpf')

module.exports = app => {
    

    const save = async (req, res) => {
        const customers = {...req.body}
        const idput = req.params.id

        //validating information
        const error_info = ''
        if(customers.name == undefined || customers.name.length < 2){
            error_info.concat('error_name-')
        }
        if(customers.cpf == undefined || customers.cpf.length != 11 || isNaN(customers.cpf)){
            error_info.concat('error_cpf-')
        }
        if(customers.name_brand == undefined || customers.name_brand < 2){
            error_info.concat('error_name_brand-')
        }
        
        if(error_info != ''){
            res.status(400).send(error_info)
            return
        }
        
        if(!validatingCpf(customers.cpf)){
            res.status(400).send('invalidate_cpf')
            return
        }

        //creating a 
        
        if(idput != undefined && !isNaN(idput)){
            await app.db('customers')
                .update(customers)
                .where({id: idput})
                .then(ok => res.status(200).send('success'))
                .catch(err => res.status(500).send('error_server'))
        } else {
            console.log(`select create_customers('${customers.name}','${customers.cpf}', '${customers.name_brand}');`)
            app.db.raw(
                `select create_customers('${customers.name}','${customers.cpf}', '${customers.name_brand}');`)
                .then(customersRes => {
                    if(customersRes.rows[0].create_customers == 'error_cpf'){
                        res.send('exists_cpf')
                    } else {
                        res.send('success')
                    }
                })
                .catch(err => res.status(500).send('error_server'))
        }
        return
    }
    
    //----------------------------------------------
    const get = async(req, res) => {
        let limit = req.query.limit
        let page = req.query.page

        if(limit == undefined || isNaN(limit))
            limit = 10

        if(page == undefined || isNaN(page))
            page = 1

        await app.db('customers')
            .select('name', 'cpf', 'name_brand', 'credit')
            .orderBy('id')
            .where({isdeleted: false})
            .limit(limit).offset(page * limit - limit)
            .then(customer => res.json(customer))
            .catch(err => res.status(500).send('error_server'))
    }

    //----------------------------------------------
    const getByCpf = async(req,res) => {
        const idput = req.params.cpf

        if(!validatingCpf(idput)){
            res.send('invalidate_cpf')
            return
        }
        if(idput != undefined && !isNaN(idput)){
            await app.db('customers')
                .select('name','cpf', 'name_brand')
                .where({ cpf: idput})
                .then(customer => {
                    if(customer.length == 0){
                        res.send('invalidate_cpf')
                    } else {
                        res.json(customer)
                    }
                })
                .catch(err => res.status(500).send('error_server'))
        } else {
            res.status('400').send('error_cpf')
        }
    }


    //----------------------------------------------
    const remove = async(req, res) => {
        const idput = req.params.id
        if(idput != undefined && !isNaN(idput)){
            await app.db('customers')
                .update({isdeleted: true})
                .where({id: idput})
                .then(res.status(204).send('success'))
                .catch(err => res.status(500).send('error_server'))
        } else {
            res.status(400).send('error_id')
        }
    } 

    return {save, get, getByCpf, remove}
}