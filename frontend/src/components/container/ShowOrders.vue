<template>
    <div class="showOrders">
        <h1>Pedidos</h1>
        <b-form class="b_form">
            <div class="gr_filterType">
                <div class="selectForm">
                    <label>Tipo</label>
                    <b-form-select
                        id="filter_Type"
                        ref="filter_Type"
                        :options="typeFilter"
                        :value="typeFilter[0]"
                        @change="filterTable"
                        class="b_form_select">
                    </b-form-select>
                </div>
            </div>

            <div class="gr_filterStatus">
                <div class="selectForm">
                    <label>Estado</label>
                    <b-form-select
                        id="filter_Status"
                        ref="filter_Status"
                        class="b_form_select"
                        :options="statusFilter"
                        :value="statusFilter[0]">
                    </b-form-select>
                </div>
            </div>

            <div class="gr_filterMonth">
                <div class="selectForm">
                    <label>Meses</label>
                    <b-form-select
                        id="filter_month" 
                        ref="filter_month"
                        class="b_form_select"
                        :options="monthTemplate"
                        :value="1">
                    </b-form-select>
                </div>
            </div>

            <div class="gr_filterYear">
                <div class="selectForm">
                    <label>Anos</label>
                    <b-form-select
                        id='filter_year'
                        ref="filter_year"
                        class="b_form_select"
                        :options="yearTemplate"
                        :value="yearTemplate[0]">
                    </b-form-select>
                </div>
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

        <ShowOrdersTable :filter="filter"/>
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
            yearTemplate:[],
            typeFilter:['Ambos','Pilotos','Produção'],
            statusFilter:['Todos','Prosseguindo', 'Alerta','Atrasado','Finalizado','Entregue','Cancelado'],
            filter:{}
        }
    },
    methods:{
        CreateyearTemplate(){
            for(let count = 2020; count < 3000; count++){
                this.yearTemplate.push(count)
            }      
        },

        filterTable(){
            const newFilter = { 
                filtetType: this.$refs.filter_Type.localValue,
                filterStatus: this.$refs.filter_Status.localValue,
                filterMonth: this.$refs.filter_month.localValue,
                filterYear: this.$refs.filter_year.localValue
            }
            this.filter = newFilter;
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

    .showOrders .gr_filterYear{
        margin-right: auto;
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