// Update with your config settings.
const { dbinfo }  = require('./.env')

module.exports = {
  client: 'postgresql',
  connection: dbinfo,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
