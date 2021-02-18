<template>
    <div class="createOrderTable mt-5">
        <div class="buttonNewEx">
            <b-button id="buAdd" @click="newItem"> Adicionar </b-button>
            <b-button id="buSave" @click="saveOrder"> Salvar </b-button>
            <b-button id="buReset" @click="resetOrder"> Cancelar </b-button>
        </div>

        <template>
            <b-table sticky-header striped :fields="orders.fields" :items="orders.items" bordered
                class="text-center">
                <template #cell(product)="row">
                    <b-form-input v-model="row.item.product"></b-form-input>
                </template>
                <template #cell(price_unity)="row">
                    <b-form-input v-model="row.item.price_unity"></b-form-input>
                </template>
                <template #cell(quantity_products)="row">
                    <b-form-input v-model="row.item.quantity_products"></b-form-input>
                </template>
                <template #cell(embroidery)="row">
                    <b-form-checkbox v-model="row.item.embroidery"> </b-form-checkbox>
                </template>
                <template #cell(silk)="row">
                    <b-form-checkbox v-model="row.item.silk"> </b-form-checkbox>
                </template>
                <template #cell(laser_applique)="row">
                    <b-form-checkbox v-model="row.item.laser_applique"> </b-form-checkbox>
                </template>
                <template #cell(laser_holes)="row">
                    <b-form-checkbox v-model="row.item.laser_holes"> </b-form-checkbox>
                </template>
                <template #cell(sublimation_applique)="row">
                    <b-form-checkbox v-model="row.item.sublimation_applique"> </b-form-checkbox>
                </template>
                <template #cell(sublimation_body)="row">
                    <b-form-checkbox v-model="row.item.sublimation_body"> </b-form-checkbox>
                </template>
                <template #cell(vies)="row">
                    <b-form-checkbox v-model="row.item.vies"> </b-form-checkbox>
                </template>
                <template #cell(forro)="row">
                    <b-form-checkbox v-model="row.item.forro"> </b-form-checkbox>
                </template>
                <template #cell(delete)="row">
                    <b-button class="fa fa-trash" @click="deleteItem($event,row)" ></b-button>
                </template>
            </b-table>
        </template>
    </div>   
</template>

<script>



const orderFildes = [
    { key: 'product', label: 'produto'},
    { key: 'price_unity', label: 'preço Unitario'},
    { key: 'quantity_products', label: 'quantidade'},
    { key: 'embroidery', label: 'Bordado'},
    { key: 'silk', label: 'Silk' },
    { key: 'laser_applique', label: 'Aplique Laser'},
    { key: 'laser_holes', label: 'Furos a laser'},
    { key: 'sublimation_applique', label: 'Aplique Sublimado'},
    { key: 'sublimation_body', label: 'Corpo Sublimado'},
    { key: 'vies', label: 'vies'},
    { key: 'forro', label: 'forro'},
    { key: 'delete', label: ''}
]
    


export default {
    name:'createOrdersTable',
    data(){
        return({
            orders:{
                items:[],
                fields: orderFildes
            }
        })
    },
    props:{
        customer:{},
    },
    methods:{
        newItem(event){
            event.preventDefault()
            this.orders.items.push({
                product: '',
                price_unity:'',
                quantity_products:'',
                embroidery: true,
                silk: true,
                laser_applique: false,
                laser_holes: false,
                sublimation_applique: false,
                sublimation_body:true,
                vies:false,
                forro: false
            })
        },
        deleteItem(event,row){
            event.preventDefault()
            this.orders.items.splice(row.index,1)
        },
        resetOrder(){
            this.orders.items.splice(0, this.orders.items.length)
        },
        saveOrder(){
            if(this.$props.customer.name != undefined && this.$props.customer.name != ''){
                if(this.orders.items.length > 0){
                    this.resetOrder()
                }
            }
        }
    }
}
</script>

<style>
    .createOrders .buttonNewEx{
        display:flex;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
    }
    .createOrders .buttonNewEx #buSave{
        margin-left: auto;
    }
    .createOrders .buttonNewEx #buReset{
        margin-left: 50px;
    }
</style>