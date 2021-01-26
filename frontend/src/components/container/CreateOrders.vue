<template>
    <div class="createOrders">
        <h1>Criação de Pedidos</h1>

        <b-form class="customerForm">
            <b-form-group>
                <label>ClienteCpf</label>
                <div class="cpfForm">
                    <b-form-input
                        id='id_customerCpf' v-model="customer.cpf"
                        placeholder="Somente Numeros" required>
                    </b-form-input>
                    <b-button class='fa fa-search'></b-button>
                </div>
            </b-form-group>
            
            <b-form-group class="form_group">
                <label>Nome</label>
                <b-form-input
                    id='id_customerName'  v-model="customer.name"
                    disabled required>
                </b-form-input>
            </b-form-group>

            <b-form-group class="form_group">
                <label>Nome Marca</label>
                <b-form-input
                    id='id_customerNameBrand' v-model="customer.name_brand"
                    disabled required>
                </b-form-input>
            </b-form-group>
        </b-form>


        <CreateOrdersTable :customer="customer"/>
    </div>
</template>

<script>
import CreateOrdersTable from './CreateOrdersTable'

export default {
    name:'createOrders',
    components: { CreateOrdersTable },
    data(){
        return({
            customer:{
                name: '',
                cpf: '',
                name_brand:''
            },
            items:[]
        })
    },
    methods:{
        
    }
}
</script>

<style>
    .createOrders h1{
        font-size: 20pt;
        margin-top: 25px;
        margin-bottom: 20px;
    }

    .createOrders .customerForm{
        display: flex;
        flex-direction: row;
        justify-content: start;
        flex-wrap: wrap;
    }

    .createOrders .form_group{
        margin-left: 20px;
        width: 300px;
    }

    .createOrders .cpfForm{
        display: flex;
        flex-direction: row;
    }
</style>