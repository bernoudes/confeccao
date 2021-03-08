<template>
    <div class="createOrdersPay childCommomConfg" :style="`margin-top: ${posY}px; margin-left: ${posX}px;`">
        <h4>Informações de Pagamento</h4>
        <div class="register">
            <p> Nome: {{order.customer != undefined ? order.customer.name:''}} </p>
            <p> Cpf: {{order.customer != undefined ? order.customer.cpf:''}} </p>
            <p> Nome da Marca: {{order.customer != undefined ? order.customer.name_brand:''}}</p>
            <p> Vendedor: {{order.salesman != undefined ? order.salesman:''}}</p>
            <p> Total de Peças: {{order.sumTotalQuant != undefined ? order.sumTotalQuant:''}}</p>
            <p> Total do Pedido: R$ {{order.sumTotalPrices != undefined ? order.sumTotalPrices:''}},00</p>
        </div>
        <b-form class="forms">
            <div class="initialValue">
                <label>Valor de Entrada: </label>
                <b-form-input 
                    class="initialValueInput" 
                    placeholder="Digite a entrada"
                    v-model="initialValue"
                    @keypress="notNumber"
                    >
                </b-form-input>
                ,00
            </div>
            <div class="buttonpay">
                <b-button variant="primary" @click="Pay">Marcar Como Pago</b-button>
                <b-button variant="danger" @click="Closing"> Fechar</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
import axios from 'axios'
import conn from '../../../config/conn'

export default {
    name: 'createOrdersPay',
    data(){
        return{
            posX: 0,
            posY:-120,
            order: {},
            initialValue: ''
        }
    },
    methods:{
        CreateBox(order){
            if(this.$parent.disabledElements && this.$parent.enabledElements){
                this.$parent.disabledElements()

                this.order = order
                console.log(order)

                if(this.order.customer != undefined){
                    this.$el.style.display = 'initial'
                }
            }
        },
        async Pay(){
            this.order.initialValue = this.initialValue
            const result = await axios.post(`${conn.backUrl}/orders`,this.order)
            if(result.status == 200 && !isNaN(result.data)){
                this.order.items.forEach(item => {
                    item.orders_id = result.data
                    const mais = axios.post(`${conn.backUrl}/production`,item)
                    console.log(mais)
                })
            }
            this.$parent.enabledElements()
            this.Close()
        },
        Closing(){
            this.$parent.enabledElements(true)
            this.Close()
        },
        Close(){
            this.resetData()
            this.$el.style.display = 'none'
        },
        /////////////////////////////////////////////
        resetData(){
            this.order = {},
            this.initialValue = ''
        },
        notNumber(event){
            if(isNaN(event.key) || event.key == ' '){
                event.preventDefault()
            }
        }
    },
    mounted(){
        this.$el.style.display = 'none';
    }
}
</script>

<style>
    .createOrdersPay > .forms > .initialValue{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    .createOrdersPay > .forms > .initialValue > .initialValueInput{
        width: 155px;
        margin-left: 10px;
        margin-right: 5px;
    }
    .createOrdersPay > .forms > .buttonpay{
        display: flex;
        justify-content: space-between;
        margin: 20px 10px;
    }
</style>