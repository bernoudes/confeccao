const validatingCpf = require('./validatingCpf')

module.exports = app => {
    

    const save = async (req, res) => {
        

        
    }
    
    const get = async(req, res) => {
        await app.db('customers')
            .select('name', 'cpf', 'name_brand', 'credit')
            .orderBy('id')
            .where({isdeleted: false})
            .then(customer => res.json(customer))
            .catch(err => res.status(500).send(err))
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
                        res.status('400').send('id invalido')
                    } else {
                        res.json(customer)
                    }
                })
                .catch(err => res.status(500).send(err))
        } else {
            res.status('400').send('erro id')
        }
    }

    const remove = async(req, res) => {
        const idput = req.params.id
        if(idput != undefined && !isNaN(idput)){
            await app.db('customers')
                .update({isdeleted: true})
                .where({id: idput})
                .then(res.status(204).send('success'))
                .catch(err => res.status(500).send(err))
        } else {
            res.status(400).send('erro no id')
        }
    }

    return {save, get, getById, remove}
}