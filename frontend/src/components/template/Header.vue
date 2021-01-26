<template>
    <div class="header">
        <div class="title">
           <span @click="homeReturn"><h1>Controle de Pedidos</h1></span> 
        </div>
        <div class="user">
            <span>Kyle</span>
            <span>Sair</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods:{
        homeReturn(event){
            event.preventDefault()
            if(this.$router.history.current.name != 'Home'){
                this.$router.push({name:'Home'})
            }
        }
    }
}
</script>

<style>
    .header{
        grid-area: header;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family:'PTSans-Regular',Arial, Helvetica, sans-serif;
        font-size: 15pt;

        background: linear-gradient(90deg, rgba(214,205,255,0.5) 0%,
         rgba(0,151,255,0.5) 100%);
    }
    .header h1{
        font-size: 20pt;
    }

    .header > .user{
        padding-right: 25px;
        margin-left: auto;
    }
    .header > .user span{
        margin-left: 15px;
    }

    .title{
        padding-left: 8px;
    }



</style>