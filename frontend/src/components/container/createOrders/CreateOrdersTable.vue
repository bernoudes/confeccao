<template>
    <div class="createOrderTable mt-5">
        <CreateOrdersPay ref='reCreateOrdersPay'/>
        <SimplesMessage ref='smgCreateTable'/>

        <div class="buttonNewEx">
            <b-button id="buAdd" @click="newItem" :disabled="disabled"> Adicionar </b-button>
            <b-button id="buSave" @click="saveOrder" :disabled="disabled"> Salvar </b-button>
            <b-button id="buReset" @click="resetData" :disabled="disabled"> Cancelar </b-button>
        </div>
        <template>
            <b-table :sticky-header="!disabled" striped :fields="orders.fields" :items="orders.items" bordered
                class="text-center">
                <template #cell(product)="row">
                    <b-form-input v-model="row.item.product" :disabled="disabled"></b-form-input>
                </template>
                <template #cell(price_unity)="row">
                    <b-form-input v-model="row.item.price_unity" :disabled="disabled"></b-form-input>
                </template>
                <template #cell(quantity_products)="row">
                    <b-form-input v-model="row.item.quantity_products" :disabled="disabled"></b-form-input>
                </template>
                <template #cell(embroidery)="row">
                    <b-form-checkbox v-model="row.item.embroidery" :disabled="disabled"> </b-form-checkbox>
                </template>
                <template #cell(silk)="row">
                    <b-form-checkbox v-model="row.item.silk" :disabled="disabled"> </b-form-checkbox>
                </template>
                <template #cell(laser_applique)="row">
                    <b-form-checkbox v-model="row.item.laser_applique" :disabled="disabled"> </b-form-checkbox>
                </template>
                <template #cell(laser_holes)="row">
                    <b-form-checkbox v-model="row.item.laser_holes" :disabled="disabled"> </b-form-checkbox>
                </template>
                <template #cell(sublimation_applique)="row">
                    <b-form-checkbox v-model="row.item.sublimation_applique" :disabled="disabled"> </b-form-checkbox>
                </template>
                <template #cell(sublimation_body)="row">
                    <b-form-checkbox v-model="row.item.sublimation_body" :disabled="disabled"> </b-form-checkbox>
                </template>
                <template #cell(vies)="row">
                    <b-form-checkbox v-model="row.item.vies" :disabled="disabled"> </b-form-checkbox>
                </template>
                <template #cell(forro)="row">
                    <b-form-checkbox v-model="row.item.forro" :disabled="disabled"> </b-form-checkbox>
                </template>
                <template #cell(delete)="row">
                    <b-button class="fa fa-trash" @click="deleteItem($event,row)" :disabled="disabled"></b-button>
                </template>
            </b-table>
        </template>
    </div>   
</template>

<script>
//import axios from 'axios'
import conn from '../../../config/conn'
import CreateOrdersPay from './CreateOrdersPay'
import SimplesMessage from '../SimplesMessage'

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
                fields: orderFildes,
            },
            errorResetControl: false
        })
    },
    props:{
        customer:{},
        disabled:{}
    },
    components: { CreateOrdersPay, SimplesMessage },
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
        saveOrder(){
            if(this.$props.customer.name != undefined && this.$props.customer.name != ''){
                if(this.orders.items.length > 0){
                    let sumPriceCalc = 0;
                    let sumQuantCalc = 0;
                    let error = false;
                   
                    this.orders.items.forEach(item => {
                        if(isNaN(item.price_unity) || isNaN(item.quantity_products)){
                            error = true
                        } else if(item.price_unity == undefined || item.quantity_products == undefined){
                            error = true
                        } else if(item.price_unity == '' || item.quantity_products == ''){
                            error = true
                        }
                         else {
                            sumQuantCalc += parseInt(item.quantity_products)
                            sumPriceCalc += parseInt(item.price_unity) * parseInt(item.quantity_products)
                        }
                    })

                    if(error == true){
                        this.$refs.smgCreateTable.CreateBox(0,0,'Erro','Algum preço ou quantidade tem caracter não numerico')
                        this.errorResetControl = true
                    } else{
                        const order = {
                            salesman: conn.user.name,
                            customer: this.customer,
                            sumTotalPrices: sumPriceCalc,
                            sumTotalQuant: sumQuantCalc,
                            items: this.orders.items
                        }
                        console.log(order)
                        this.$refs.reCreateOrdersPay.CreateBox(order)
                    }
                }
            }
        },
        enabledElements(notReset){
            if(this.errorResetControl == true){
                this.$parent.enabledElements(true)
                this.errorResetControl = false
            } else {
                this.$parent.enabledElements(notReset)
            }   
        },
        disabledElements(){
            this.$parent.disabledElements()
        },
        resetData(){
            this.orders.items.splice(0, this.orders.items.length)
        },
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