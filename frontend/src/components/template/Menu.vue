<template>
    <div class="menu">
        <span @click="registerCustomer">Cadastro Cliente</span>
        <span @click="createOrders">Criação de Pedidos </span>
        <span @click="showOrders">Pedidos</span>
        <!--below is for admin only -->
         <span @click='salesMan'> Vendedores </span>
        <span>Gráficos</span>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    methods:{
        registerCustomer(event){
            event.preventDefault()
            if(this.$router.history.current.name != 'registerCustomer'){
                this.$router.push({name: 'registerCustomer'})
            }
        },
        createOrders(event){
            event.preventDefault()
            if(this.$router.history.current.name != 'CreateOrders'){
                this.$router.push({name: 'CreateOrders'})
            }        
        },
        showOrders(event){
            event.preventDefault()
            if(this.$router.history.current.name != 'ShowOrders'){
                this.$router.push({name:'ShowOrders'})
            }
        },
        salesMan(event){
            event.preventDefault()
            if(this.$router.history.current.name != 'SalesMan'){
                this.$router.push({name: 'SalesMan'})
            }
        }
    }
}
</script>

<style>
    .menu{
        grid-area: menu;
        box-shadow: 5px 1px 4px -2px gray;

        display: flex;
        flex-direction:column;
        justify-content: left;

        font-family: 'PTSans-Regular',Arial, Helvetica, sans-serif;
    }
    .menu span{
        height: 40px;
        padding-left: 4px;

        display:flex;
        align-items: center;

        text-decoration: none;
        transition: 0.5s;
    }

    .menu span:hover{
        background-color: rgb(200, 200, 200);
        text-decoration: none;
        color: white;
    }

</style>