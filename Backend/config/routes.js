
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
    app.route('/customers')
        .post(app.api.customers.save)
        .get(app.api.customers.get)

    app.route('/customers/:id')
        .put(app.api.customers.save)
        .get(app.api.customers.getById)
        .delete(app.api.customers.remove)

    //actions about orders (admin and salesman can create but only adim can remove)
    app.route('/orders')
        .post(app.api.orders.save)
        .get(app.api.orders.get)

    app.route('/orders/:id')
        .put(app.api.orders.save)
        .get(app.api.orders.getById)
        .delete(app.api.orders.cancel)
    
    //actions about production (admin and salesman can create and modify but only admin can delete)
    app.route('/production/mdf/:id')
        .put(app.api.production.modify)

    app.route('/production/:id')
        .get(app.api.production.getById)
        .delete(app.api.production.remove)
        .put(app.api.production.save)

    app.route('/production')
        .post(app.api.production.save)
        .get(app.api.production.get)
        .post(app.api.production.save)
}