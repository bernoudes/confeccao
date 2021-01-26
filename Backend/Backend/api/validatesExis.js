const validateSalesman = (salesman_id,app) =>app.db('salesman')
    .select('id').where({id: salesman_id})
    .then(salesmanArray=> salesmanArray[0])
    .catch('error_validation_salesman')

const validateCustomer = (customer_id,app) => app.db('customers')
    .select('id').where({id: customer_id})
    .then(customerArray=> customerArray[0])
    .catch('error_validation_customer')


module.exports = {validateSalesman,validateCustomer}