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
                .then(ok => res.status(204).send('success'))
                .catch(err => res.status(500).send('error_server'))
        } else {
            app.db.raw(
                `select create_customers('${customers.name}','${customers.cpf}', '${customers.name_brand}');`)
                .then(customersRes => {
                    if(customersRes == 'error_cpf'){
                        res.status(400).send('exists_cpf')
                    } else {
                        res.status(204).send('success')
                    }
                })
                .catch(err => res.status(500).send('error_server'))
        }
        return
    }
    
    const get = async(req, res) => {
        await app.db('customers')
            .select('name', 'cpf', 'name_brand', 'credit')
            .orderBy('id')
            .where({isdeleted: false})
            .then(customer => res.json(customer))
            .catch(err => res.status(500).send('error_server'))
    }

    const getById = async(req, res) =>{
        const idput = req.params.id
        if(idput != undefined && !isNaN(idput)){
            await app.db('customers')
                .select('name','cpf','name_brand','credit')
                .where({isdeleted: false})
                .where({id: idput})
                .then(customer => {
                    if(customer.length == 0){
                        res.status('400').send('invalidate_id')
                    } else {
                        res.json(customer)
                    }
                })
                .catch(err => res.status(500).send('error_server'))
        } else {
            res.status('400').send('error_id')
        }
    }

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

    return {save, get, getById, remove}
}