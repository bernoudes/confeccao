<template>
    <div class="showOrdersTable">
        <b-table id="idTable" sticky-header bordered class="table text-center text-nowrap"
            striped :fields="orders.fields" :items="orders.items" @dblclick="usable" small>
            <template #cell(bu_editable)="row">
                <i class="fa fa-edit" @click='editConfg(row)'></i>
            </template>
        </b-table>

        <EditOrders class="editOrders dl-none" ref='reEditOrders'/>
       
    </div>
</template>

<script>
 

import ShowOrdersTableConfig from './ShowOrderTableConfig.js'
import EditOrders from './EditOrders'

export default {
    name: 'showOrdersTable',
    data(){
        return{
            orders:{
                selectedItem:{},
                items: ShowOrdersTableConfig.items(this.filter),
                fields: ShowOrdersTableConfig.Fields
            }
        }
    },
    components:{ EditOrders },
    props:{
        filter:{}
    },
    methods:{
        usable(){
           
        },
        editConfg(row){
            const reEditOrders = this.$refs.reEditOrders
            reEditOrders.createBox(this.orders.items[row.index])
        },
        updateTable(){
            this.orders.selectedItem = {}
            console.log('update table open')
        }
    },
    watch:{
        filter: function (filter) {
            this.items = ShowOrdersTableConfig.items(filter)
        }
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
    .showOrdersTable .editOrders{
        position:absolute;
        margin-top: -600px;
        margin-left:150px;
        z-index: 4;
    }

</style>
