<template>
    <div class="showOrdersTable">
        <b-table id="idTable" sticky-header bordered class="table text-center text-nowrap"
            striped :fields="orders.fields" :items="orders.items" @dblclick="usable" small>
            <template #cell(bu_editable)="row">
                <i class="fa fa-edit" @click='editConfg(row)'></i>
            </template>
        </b-table>

        <EditOrders class="editOrders"  name="ShowOrders_editorOrders"
            :item="selectedItem"/>
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
                selectedItem: null,
                items: ShowOrdersTableConfig.items(this.filter),
                fields: ShowOrdersTableConfig.Fields
            },
            editorHtml:'hfdh'
        }
    },
    components:{ EditOrders },
    props:{
        filter:{}
    },
    methods:{
        usable(){
            console.log('kasa hitotsu')
        },
        editConfg(row){
            this.selectedItem = row.item;
            const editOrdersElement = document.getElementsByName('ShowOrders_editorOrders')[0]
            editOrdersElement.style.display = "initial"
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
