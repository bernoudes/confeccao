<template>
    <div class="createOrders">
        <h1>Criação de Pedidos</h1>
        <SimplesMessage ref="smgCreateOrders"/>
        <b-form class="customerForm">
            <b-form-group>
                <label>ClienteCpf</label>
                <div class="cpfForm">
                    <b-form-input
                        id='id_customerCpf' v-model="customer.inputcpf"
                        placeholder="Somente Numeros" 
                        @keypress="notNumber" :disabled="disabled" required>
                    </b-form-input>
                    <b-button class='fa fa-search' @click="search"  :disabled="disabled" ></b-button>
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

        <CreateOrdersTable ref='reCreateOrderTable' :customer="customer" :disabled="tableDisabled"/>
    </div>
</template>

<script>
import CreateOrdersTable from './CreateOrdersTable'
import axios from 'axios'
import conn from '../../../config/conn'
import SimplesMessage from '../SimplesMessage'

export default {
    name:'createOrders',
    components: { CreateOrdersTable, SimplesMessage },
    data(){
        return({
            disabled: false,
            tableDisabled: true,
            saved: false,
            customer:{
                inputcpf: '',
                name: '',
                cpf: '',
                name_brand:''
            },
        })
    },
    methods:{
        async search(event){
            event.preventDefault()
            if(this.customer.inputcpf != undefined && this.customer.inputcpf != ''){
                const res = await axios.get(`${conn.backUrl}/customers/${this.customer.inputcpf}`)

                if(res.data == 'invalidate_cpf'){
                    this.$refs.smgCreateOrders.CreateBox(0,0,'Cpf Invalido', 'Cpf mal formado ou contendo letras')
                } else {
                    this.customer.name = res.data[0].name
                    this.customer.cpf = res.data[0].cpf
                    this.customer.name_brand = res.data[0].name_brand

                    this.tableDisabled = false;
                }
            } else {
                this.$refs.smgCreateOrders.CreateBox(0,0,'Cpf Invalido', 'O campo cpf precisa estar preenchido')
            }
        },
        ///////////////////////////////////////////////////////
        enabledElements(notReset){
            this.disabled = false
            this.tableDisabled = false
            if(notReset == false || notReset == undefined){
                this.resetData()
            }
        },
        disabledElements(){
            this.disabled = true
            this.tableDisabled = true
        },
        resetData(){
            this.customer.name = '',
            this.customer.cpf = '',
            this.customer.name_brand = ''
            this.tableDisabled = false
            this.$refs.reCreateOrderTable.resetData()
        },
        notNumber(event){
            if(isNaN(event.key) || event.key == ' '){
                event.preventDefault()
                
            }
        }
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