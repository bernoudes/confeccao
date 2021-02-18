<template>
    <div class="salesManTable">
        <b-table bordered :fields="salesMan.fields" :items="salesMan.items" 
            class="table text-center text-nowrap" small striped sticky-header>

            <template #cell(delete) ="row">
                <i class="fa fa-trash fa-2x" @click="showInfo(row)"></i>
            </template>
            <template #cell(details)="row">
                <i class="fa fa-address-card fa-2x" @click="deleteSales(row)"></i>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            salesMan: {
                items: [
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'},
                    { name: 'morgana', mounth: '25.000', year:'36.000'}
                ],
                fields:[
                    { key: 'name', label: 'nome'},
                    { key: 'mounth', label: 'Total Mês' },
                    { key: 'year', label: 'Total Anual'},
                    { key: 'details', label: 'Info'},
                    { key: 'delete', label: 'Excluir' }
                ]
            }
        }
    },
    methods:{
        showInfo(){},
        deleteSales(){}
    }
}
</script>

<style>
    .salesManTable{
        margin-top: 10px;
        height: 400px;
    }

    .salesManTable > .table{
        max-height: 100%;
    }
</style>