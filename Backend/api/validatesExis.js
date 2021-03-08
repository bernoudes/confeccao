const validateSalesman = (salesman_id,app) =>app.db('salesman')
    .select('id').where({id: salesman_id})
    .then(salesmanArray=> salesmanArray[0])
    .catch('error_validation_salesman')

const validateSalesmanByLogin = async (salesman_login,app) =>{
    let salesManId = undefined
    await app.db('salesman')
        .select('id').where({login: salesman_login})
        .then(salesmanArray=> salesManId = salesmanArray[0].id)
        .catch('error_validation_salesman')
    return salesManId
}

const validateCustomer = (customer_id,app) => app.db('customers')
    .select('id').where({id: customer_id})
    .then(customerArray=> {console.log(customerArray[0])})
    .catch('error_validation_customer')

const validateCustomerByCpf = async (customer_cpf,app) => {
    let customerId = undefined
    await app.db('customers')
        .select('id').where({cpf: customer_cpf})
        .then(customerArray=>customerId =  customerArray[0].id)
        .catch(customerId = 'error_validation_customer')
    return customerId
}

module.exports = {validateSalesman,validateCustomer, validateSalesmanByLogin, validateCustomerByCpf }