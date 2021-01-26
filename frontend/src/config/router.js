import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/container/Home'
import RegisterCustomer from '../components/container/RegisterCustomer'
import CreateOrders from '../components/container/CreateOrders'

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
    }
]

export default new VueRouter({routes})