import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/container/home/Home'
import RegisterCustomer from '../components/container/customers/RegisterCustomer'
import CreateOrders from '../components/container/createOrders/CreateOrders'
import ShowOrders from '../components/container/showOrders/ShowOrders'
import SalesMan from '../components/container/salesMan/SalesMan'

Vue.use(VueRouter)

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'registerCustomer',
        path:'/RegisterCustomer',
        component: RegisterCustomer
    },
    {
        name: 'CreateOrders',
        path: '/CreateOrders',
        component: CreateOrders
    },
    {
        name: 'ShowOrders',
        path: '/ShowOrders',
        component: ShowOrders
    },
    {
        name: 'SalesMan',
        path: '/SalesMan',
        component: SalesMan
    }
]

export default new VueRouter({routes})