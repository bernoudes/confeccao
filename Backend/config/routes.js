
module.exports = app => {
    app.route('/')
        .get(app.api.salesman.get)

    app.route('/save')
        .post(app.api.salesman.save)
    
    app.route('/:id')
        .get(app.api.salesman.getById)

    
}