// Update with your config settings.
const { dbinfo }  = require('./.env')

module.exports = {
  client: 'postgresql',
  connection: dbinfo,
  pool: {
    min: 2,
    max: 10,
    afterCreate:function(conn,done) {
      conn.query('SET timezone="UTC";', function (err) {
        if (err) {
          done(err, conn)
        } else{
          done(err, conn)
        }
      })
    }
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
