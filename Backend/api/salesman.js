
module.exports = app =>{
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

    

    return { get, getById }
}