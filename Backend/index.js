const app = require('express')()
const bodyParse = require('body-parser')
const cors = require('cors')
const consign = require('consign')
const db = require('knex')(require('./knexfile'))
const port = 3030

app.db = db;
app.use(bodyParse.urlencoded({ extended:false }));
app.use(bodyParse.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors())
    next()
})

consign()
    .include('./api')
    .then('./config/routes.js')
    .into(app)


app.listen(port, () => {
    console.log('the port is ok')
})
 
