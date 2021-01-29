<template>
    <div class="showOrdersTable">
        <b-table sticky-header bordered class="table text-center text-nowrap"
            striped :fields="orders.fields" :items="orders.items" small >

        </b-table>
    </div>
</template>

<script>

import ShowOrdersTableConfig from './ShowOrderTableConfig.js'

export default {
    name: 'showOrdersTable',
    data(){
        return{
            orders:{
                items: ShowOrdersTableConfig.items,
                fields: ShowOrdersTableConfig.Fields
            }
        }
    },
    mounted(){
        this.orders.items.forEach(element => {
            if(element.status_order == 'Prosseguindo'){
                element._cellVariants= { status_order: 'success'}
            } 
            if(element.status_order == 'Alerta'){
                element._cellVariants= {status_order: 'warning '}
            } 
            if(element.status_order == 'Atrasado'){
                element._rowVariant='danger'
            } 
            if(element.status_order == 'Finalizado'){
                element._rowVariant='primary '
            } 
            if(element.status_order == 'Entregue'){
                element._rowVariant='success '
            } 
            if(element.status_order == 'Cancelado'){
                element._rowVariant='dark'
            }
        });
    }


}
</script>

<style>
    .showOrdersTable{
        height: 400px;
    }
    .showOrdersTable .table{
        max-height: 100%;
    }

</style>
