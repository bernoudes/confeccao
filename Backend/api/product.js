const knexfile = require("../knexfile")

module.exports = app => {
    const get = async (req,res) => {
        await app.db('product')
            .select('*')
            .then(resp => res.json(resp))
            .catch(err => res.send(err))
    }


    return { get }
}