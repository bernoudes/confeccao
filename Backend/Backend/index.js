const app = require('express')()
const bodyParse = require('body-parser')
const consign = require('consign')
const db = require('knex')(require('./knexfile'))
const port = 3030

app.db = db;
app.use(bodyParse.urlencoded({ extended:false }));
app.use(bodyParse.json())

consign()
    .include('./api')
    .then('./config/routes.js')
    .into(app)


app.listen(port, () => {
    console.log('the port is ok')
})

