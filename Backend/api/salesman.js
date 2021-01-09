
module.exports = app =>{
    const save = async (req, res) => {
        const salesman = { ...req.body }
        /*create_salesman(name VARCHAR(40), cpf VARCHAR(20), 
            admin BOOL, login_2 VARCHAR(20),password VARCHAR(30))*/

        //colocar as validações e barramentos antes da query



        app.db.raw(`SELECT create_salesman('${salesman.name}','${salesman.cpf}',${salesman.admin},
            '${salesman.login}', '${salesman.password}');`)
            .then(respons => res.send(respons))
    }
    
    
    
    const get = (req, res) => {
        app.db('salesman')
            .select('id', 'name')
            .then(salesman => res.json(salesman))
            .catch((err) => res.status(500).send(err))
    }

    const getById = async (req, res) => {
        app.db('salesman')
            .select('id', 'name')
            .where({id: req.params.id})
            .then(saleman => res.json(saleman))
            .catch((err) => res.status(500).send(err))
    }
    
   
    

    return { get, getById, save }
}