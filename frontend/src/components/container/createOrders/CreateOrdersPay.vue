<template>
    <div class="createOrdersPay childCommomConfg" :style="`margin-top: ${posY}px; margin-left: ${posX}px;`">
        <h4>Informações de Pagamento</h4>
        <div class="register">
            <p> Nome: {{order.customer != undefined ? order.customer.name:''}} </p>
            <p> Cpf: {{order.customer != undefined ? order.customer.cpf:''}} </p>
            <p> Nome da Marca: {{order.customer != undefined ? order.customer.name_brand:''}}</p>
            <p> Vendedor: {{order.user != undefined ? order.user.name:''}}</p>
            <p> Total do Pedido: {{order.sumvalues != undefined ? order.sumvalues:''}}</p>
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
                <b-button variant="primary">Marcar Como Pago</b-button>
                <b-button variant="danger"> Fechar</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
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
        CreateBox(posX,posY,order){
            if(this.$parent.disabledElements && this.$parent.enabledElements){
                this.$parent.disabledElements()

                this.posX = posX
                this.posY = posY
                this.order = order

                this.$el.style.display = 'initial'
            }
        },
        /////////////////////////////////////////////
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