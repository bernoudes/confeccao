
module.exports = app => {
    app.route('/')
        .get(app.api.salesman.get)
    
    app.route('/:id')
        .get(app.api.salesman.getById)
}