<template>
    <div class="salesManInfo">
        <SalesManCreate ref="refSalesManCreate"/>

        <h4>Informações</h4>
        <p>Nome: {{salesinfo.name}}</p>
        <p>Cpf: {{salesinfo.cpf}} </p>
        <p>admin: {{salesinfo.admin}} </p>
        <p>login: {{salesinfo.login}} </p>
        <p>password: {{salesinfo.password}} </p>
        <div class="tableLimit">
            <b-table sticky-header class="text-nowrap table" :fields="table.fields" :items="table.items" small>
            </b-table>
        </div>
        
        <div class="button-group">
            <b-button variant="primary" @click="update()">Alterar</b-button>
            <b-button variant="danger" @click="close()">Fechar</b-button>
        </div>
    </div>
</template>

<script>
import SalesManCreate from './SalesManCreate'

export default {
    data(){
        return{
            salesinfo:{
                name: '',
                cpf: '',
                admin: '',
                login: '',
                password: ''
            },
            table:{
                fields:[
                    { key: 'mounth', label: 'Mês'},
                    { key: 'year', label: 'Ano'},
                    { key: 'mounthValue', label: 'Total Meses' },
                ],
                items:[
                    { mounth:'02', year:'2019', mounthValue:'R$: 661,00' },
                    { mounth:'02', year:'2019', mounthValue:'R$: 661,00' },
                    { mounth:'02', year:'2019', mounthValue:'R$: 661,00' },
                    { mounth:'02', year:'2019', mounthValue:'R$: 661,00' },
                    { mounth:'02', year:'2019', mounthValue:'R$: 661,00' },
                    { mounth:'02', year:'2019', mounthValue:'R$: 661,00' },
                    { mounth:'02', year:'2019', mounthValue:'R$: 661,00' },
                    { mounth:'02', year:'2019', mounthValue:'R$: 661,00' },
                    { mounth:'02', year:'2019', mounthValue:'R$: 661,00' },
                    { mounth:'02', year:'2019', mounthValue:'R$: 661,00' },
                ]
            }
        }
    },

    components:{ SalesManCreate },
    methods:{
        CreateBox(){
            this.$el.style.display = 'initial'
        },
        update(){
            console.log(this.$refs) 
            this.$refs.refSalesManCreate.CreateBox(false)
        },
        close(){
            this.$el.style.display = 'none'
        }
    },
    mounted(){
     //   this.$el.style.display = 'none'
    }
}
</script>

<style>
    .salesManInfo > .tableLimit{
        height: 200px;
      /*  overflow:hidden;*/
    }
    .salesManInfo > .tableLimit > .table{
        max-height: 100%;
    }

    .salesManInfo > .button-group{
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        padding: 10px 40px;
    }
</style>