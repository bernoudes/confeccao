
module.exports = app => {
    app.route('/')
        .get(app.api.users.get)
}