const app = require('express')()
const consign = require('consign')
const db = require('knex')(require('./knexfile'))
const port = 3030

app.db = db;

consign()
    .include('./api')
    .then('./config/routes.js')
    .into(app)


app.listen(port, () => {
    console.log('the port is ok')
})

