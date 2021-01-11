
module.exports = app => {
    //actions about salesman (only the administrator can create and modify salesperson information)
    //all the delets is a soft
    app.route('/salesman/:id')
        .get(app.api.salesman.getById)

    app.route('/admin/salesman')
        .get(app.api.salesman.get)

    app.route('/admin/salesman/create')
        .post(app.api.salesman.save)
    
    app.route('/admin/salesman/:id')
        .delete(app.api.salesman.remove)
        .put(app.api.salesman.save)


    //actions about customers (admin and salesman can create and modify the information)
    app.route('/customers/create')
        .post(app.api.customers.save)

    app.route('/customers')
        .get(app.api.customers.get)

    app.route('/customers/:id')
        .put(app.api.customers.save)
        .get(app.api.customers.getById)
        .delete(app.api.customers.remove)
}