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


        let errorInfo = ''
        //validating filling in information
        if(salesman.name == null || salesman.name.length < 2){
            errorInfo.concat('error_name-')
        }
        if(salesman.admin == null || typeof salesman.admin !== 'boolean' ){
            errorInfo.concat('error_adm-')
        }
        if(salesman.login == null || salesman.login.length < 2){
            errorInfo.concat('error_login-')
        }
        if(salesman.password == null || salesman.password.length < 5){
            errorInfo.concat('error_password-')
        }
        if(salesman.cpf == null || salesman.cpf.length < 11){
            errorInfo.concat('error_cpf-')
        }

        if(errorInfo != ''){
            res.status(400).send(errorInfo)
        }

        if(!validatingCpf(salesman.cpf)){
            res.status(400).send('invalidate_cpf')
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
                            res.status(400).send('registered_email')
                        } else if(salesreponse == 'error_cpf') {
                            res.status(400).send('registered_cpf')
                        } else {
                            res.status(500).send('erro_in_server:' + salesreponse)
                        }     
                    } else {
                        res.status(204).send('success')
                    }
                })
                .catch(err => res.status(500).send('error_server'))

        } else {
            app.db('salesman')
                .update(salesman)
                .where({id: 7})
                .then(res.status(204).send('success'))
                .catch(err => res.status(500).send('error_server'))
        }
        return
    }

    //----------------------------------------------
    const get = async (req, res) => {
        let limit = req.query.limit
        let page = req.query.page

        if(limit == undefined || isNaN(limit))
            limit = 10

        if(page == undefined || isNaN(page))
            page = 1

        await app.db('salesman')
            .select('name','cpf','admin','login')
            .limit(limit).offset(page * limit - limit)
            .then(salesman => res.json(salesman))
            .catch((err) => res.status(500).send('error_server'))
    }

    //----------------------------------------------
    const getById = async (req, res) => {
        await app.db('salesman')
            .select('name','cpf','admin','login')
            .where({id: req.params.id})
            .then(saleman => res.json(saleman))
            .catch((err) => res.status(500).send('error_server'))
    }

    //----------------------------------------------
    //this remove is a soft delet
    const remove = async (req, res) => {
        const idput = req.params.id //case id exists (put)

        if(idput != undefined || !isNaN(idput)){
            await app.db('salesman')
                .where({id: idput})
                .update({isformeremployee: true})
                .then(res.status(204).send('success'))
                .catch(err => res.status(500).send('error_server'))
            return
        }
        res.status(400).send('invalidate_id')
        return
    }
    
    return { get, getById, save, remove }
}