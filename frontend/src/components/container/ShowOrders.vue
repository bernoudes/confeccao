<template>
    <div class="showOrders">
        <h1>Pedidos</h1>
        <b-form class="b_form">
            <div class="gr_searchByDate">
                <div class="selectForm">
                    <label>Meses</label>
                    <b-form-select
                        id="form_month" 
                        ref="form_month"
                        class="b_form_select"
                        :options="monthTemplate"
                        :value="1">
                    </b-form-select>
                </div>
                <div class="selectForm">
                    <label>Anos</label>
                    <b-form-select
                        id='form_year'
                        ref="form_year"
                        class="b_form_select"
                        :options="yearTemplate"
                        :value="yearTemplate[0]">
                    </b-form-select>
                </div>
                <b-button class="fa fa-search " @click="searchByData"></b-button>
            </div>
            <div class="gr_searchByCPF">
                <label> ClienteCpf </label>
                <div class='gr_searchByCPF_inter'>
                    <b-form-input
                        id='form_cpf'
                        ref="form_cpf"
                        placeholder="CPF/CNPJ"
                        require>
                    </b-form-input>
                    <b-button class="fa fa-search" @click="searchByCPF"></b-button>
                </div>
            </div>
        </b-form>

        <ShowOrdersTable/>
    </div>
</template>

<script>
import ShowOrdersTable from './ShowOrdersTable'

export default {
    name: 'showOrders',
    components:{ ShowOrdersTable },
    data(){
        return{
            monthTemplate:[1,2,3,4,5,7,8,9,10,11,12],
            yearTemplate:[]
        }
    },
    methods:{
        CreateyearTemplate(){
            for(let count = 2020; count < 3000; count++){
                this.yearTemplate.push(count)
            }      
        },
        searchByData(event){
            event.preventDefault()
            console.log(this.$refs.form_month.localValue)
            console.log(this.$refs.form_year.localValue)
            
        },
        searchByCPF(event){
            event.preventDefault()
            console.log(this.$refs.form_cpf.vModelValue)
        }
    },
    mounted(){
        this.CreateyearTemplate()
    }
}
</script>

<style>
    .showOrders h1{
        font-size: 20pt;
        margin-top: 25px;
        margin-bottom: 20px;
    }

    .showOrders .b_form{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    /*SELECT BOX CONFIG*/
    .showOrders .selectForm{
        display: flex;
        flex-direction: column;
        margin-right: 10px
    }

    .showOrders .b_form_select{
        height: 35px;
    }

    /*SEARCH BY DATE*/
    .showOrders .gr_searchByDate{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        margin-right: 20px;
    }
    
    /*SEARCH BY CPF*/
    .showOrders .gr_searchByCPF_inter{
        display: flex;
    }

    .showOrders #form_cpf{
        margin-right: 10px;
        width: 250px;
    }

    
</style>