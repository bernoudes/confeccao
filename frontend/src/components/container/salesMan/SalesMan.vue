<template>
    <div class="salesman">
        <h2>Vendedores</h2>
        <SimplesMessage ref="refDeleteSales" :message="messageDelete" 
            okLabel="Sim" notLabel="Não" :okFunction="deleteSales"/>
        <b-form>
            <div class="SalesManForm">
                <div class="selectForm">
                    <label>Estado</label>
                    <b-form-select
                        id:="state"
                        ref="state"
                        :options="selectedState"
                        :value="selectedState[0]"
                        :disabled="enable.inptState"
                    >
                    </b-form-select>
                </div>
                 <b-button @click="MessageDelete()" class="tamButton" 
                    ref="tamButton" :disabled="enable.buAdd">
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

export default {
    name:'SalesMan',
    data(){
        return{
            enable:{ inptState: false,buAdd: false },
            selectedState: ['Ativos', 'Desativados', 'Ambos'],
            messageDelete: 'Tem Certeza que deseja excluir'
        }
    },
    components:{ SalesManTable, SimplesMessage },
    methods:{
        add(){

        },
        deleteSales(){
            console.log(this.$refs.state) 
        },
        MessageDelete(){
            this.$refs.refDeleteSales.CreateBox()
        },

        /////THE FUNCTION FOLLOWING, DON'T USE DIRECTLY/////
        disableAll(value){
            console.log(this)
            if(value == true || value == false){
                this.enable.inptState = value
                this.enable.buAdd = value
            } else {
                this.enable.inptState = true
                this.enable.buAdd = true
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