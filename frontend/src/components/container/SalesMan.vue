<template>
    <div class="salesman">
        <h2>Vendedores</h2>
        <b-form>
            <div class="SalesManForm">
                <div class="selectForm">
                    <label>Estado</label>
                    <b-form-select
                        id:="estado"
                        ref="estado"
                        :options="selectedEstado"
                        :value="selectedEstado[0]"
                    >
                    </b-form-select>
                </div>
                 <b-button @click="adicionar" class="tamButton">Adicionar</b-button>
            </div>
        </b-form>
        <SalesManTable/>
    </div>
</template>

<script>
import SalesManTable from './SalesManTable'

export default {
    data(){
        return{
            selectedEstado: ['Ativos', 'Desativados', 'Ambos']
        }
    },
    components:{ SalesManTable },
    methods:{
        adicionar(){

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