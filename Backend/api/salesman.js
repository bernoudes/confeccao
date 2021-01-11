const validatingCpf = require('./validatingCpf')
const bcrypt = require('bcryptjs')


module.exports = app =>{
    const encryptedPassword = password =>{
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const salesman = { ...req.body }
        const idput = req.params.id //case id exists (put)

        console.log(typeof idput)
        //validating filling in information
        if(salesman.name == null || salesman.name == undefined || salesman.name.length < 2){
            res.status(400).send('nome não preenchido corretamente')
            return
        }
        if(salesman.admin == null || salesman.admin == undefined || typeof salesman.admin !== 'boolean' ){
            res.status(400).send('administrador não foi preenchido corretamente') 
            return
        }
        if(salesman.login == null || salesman.login == undefined || salesman.login.length < 2){
            res.status(400).send('login não foi preechido corretamente')
            return
        }
        if(salesman.password == null || salesman.password == undefined || salesman.password.length < 5){
            res.status(400).send('password não foi preechido corretamente')
            return
        }
        if(salesman.cpf == null || salesman.cpf == undefined || salesman.cpf.length < 11){
            res.status(400).send('cpf não foi preenhido corretamente (não colocar pontuação)')
        }

        if(!validatingCpf(salesman.cpf)){
            res.status(400).send('cpf invalido')
            return
        }

        
        //validanting information
        if(idput == undefined){
            //password crypt
            const cryptPassword = encryptedPassword(salesman.password)

            console.log('idput')
            app.db.raw(
                `SELECT create_salesman('${salesman.name}','${salesman.cpf}',${salesman.admin},
                '${salesman.login}', '${cryptPassword}');`)
                .then(salesres => {
                    const salesreponse = salesres.rows[0].create_salesman;
                    if(salesreponse != 'success'){
                        if(salesreponse == 'error_login') {
                            res.status(400).send('email ja cadastrado')
                        } else if(salesreponse == 'error_cpf') {
                            res.status(400).send('cpf ja cadastrado')
                        } else {
                            res.status(500).send('erro no server:' + salesreponse)
                        }     
                    } else {
                        res.status(204).send('success')
                    }
                })
                .catch(err => res.status(500).send(err))

        } else {
            app.db('salesman')
                .update(salesman)
                .where({id: 7})
                .then(res.status(204).send('success'))
                .catch(err => res.status(500).send(err))
        }
        return
    }
    
    const get = (req, res) => {
        app.db('salesman')
            .select('name','cpf','admin','login')
            .then(salesman => res.json(salesman))
            .catch((err) => res.status(500).send(err))
    }

    const getById = async (req, res) => {
        app.db('salesman')
            .select('name','cpf','admin','login')
            .where({id: req.params.id})
            .then(saleman => res.json(saleman))
            .catch((err) => res.status(500).send(err))
    }

    //this remove is a soft delet
    const remove = async (req, res) => {
        const idput = req.params.id //case id exists (put)

        if(idput != undefined || !isNaN(idput)){
            app.db('salesman')
                .where({id: idput})
                .update({isformeremployee: true})
                .then(res.status(204).send('success'))
                .catch(err => res.status(500).send(err))
            return
        }
        res.status(400).send('id não é um numero')
        return
    }
    
    return { get, getById, save, remove }
}