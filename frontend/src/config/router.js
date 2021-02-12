import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/container/Home'
import RegisterCustomer from '../components/container/RegisterCustomer'
import CreateOrders from '../components/container/CreateOrders'
import ShowOrders from '../components/container/ShowOrders'
import SalesMan from '../components/container/SalesMan'

Vue.use(VueRouter)

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'registerCustomer',
        path:'/registerCustomer',
        component: RegisterCustomer
    },
    {
        name: 'CreateOrders',
        path: '/createOrders',
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