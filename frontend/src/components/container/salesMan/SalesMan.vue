<template>
    <div class="salesman">
        <h2>Vendedores</h2>
        <SimplesMessage ref="refDeleteSales" :message="messageDelete" 
            okLabel="Sim" notLabel="Não" :okFunction="deleteSales"/>
        <SalesManCreate ref="refSalesManCreate"/>
        <SalesManInfo ref="refSalesManInfo"/>
        <b-form>
            <div class="SalesManForm">
                <div class="selectForm">
                    <label>Estado</label>
                    <b-form-select
                        id:="state"
                        ref="state"
                        :options="selectedState"
                        :value="selectedState[0]"
                        :disabled="disabled.inptState"
                    >
                    </b-form-select>
                </div>
                 <b-button @click="addSalesMan()" class="tamButton" ref="tamButton" :disabled="disabled.buAdd">
                    Adicionar
                </b-button>
            </div>
        </b-form>
        <SalesManTable ref="salesManTable"/>
    </div>
</template>

<script>
import SalesManTable from './SalesManTable'
import SimplesMessage from '../SimplesMessage' 
import SalesManCreate from './SalesManCreate'
import SalesManInfo from './SalesManInfo'

export default {
    name:'SalesMan',
    data(){
        return{
            disabled:{ inptState: false,buAdd: false },
            selectedState: ['Ativos', 'Desativados', 'Ambos'],
            messageDelete: 'Tem Certeza que deseja excluir'
        }
    },
    components:{ SalesManTable, SimplesMessage, SalesManCreate, SalesManInfo },
    methods:{
        addSalesMan(){
            this.$refs.refSalesManCreate.CreateBox(true)
        },
        deleteSales(){
            console.log(this.$refs.state) 
        },
        MessageDelete(){
            this.$refs.refDeleteSales.CreateBox()
            this.disableAll(true)
        },

        /////THE METHODS FOLLOWING, DON'T USE DIRECTLY/////
        reLoad(){

        },
        disableAll(value){
            console.log(this)
            if(value == true || value == false){
                this.disabled.inptState = value
                this.disabled.buAdd = value
            } else {
                this.disabled.inptState = true
                this.disabled.buAdd = true
            }
        }
    }
}
</script>

<style>
    .SalesManForm{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    .SalesManForm > .tamButton{
        height: 40px;
    }

    .salesman >  h2{
        font-size: 20pt;
        margin-top: 25px;
        margin-bottom: 20px;
    }
</style>