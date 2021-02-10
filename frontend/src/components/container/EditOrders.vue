<template>
    <div class="editOrders" id="editOrders">
        <h2>Modificando Valores N° 2222222</h2>
        <label>Vendedor: dfasdfadsflsdkajflsadj</label>
        <div class="editorsFields">
            <div class="selectForm">
                <label>Estado</label>
                <b-form-select
                    id='selEstado'
                    class="b_form_select"
                    :options="selectOption"
                    :value="selectOption[0]"
                >
                </b-form-select>
            </div>
            <div class="checkGroup">
                <b-form-checkbox v-model="itemMod.sales_embroidery" :value="true" :unchecked-value="false">
                    Bordado</b-form-checkbox>
                <b-form-checkbox v-model="itemMod.sales_silk" :value="true" :unchecked-value="false">
                    Silk</b-form-checkbox>
                <b-form-checkbox v-model="itemMod.sales_laser_applique" :value="true" :unchecked-value="false">
                    Apl Gravado</b-form-checkbox>
                <b-form-checkbox v-model="itemMod.sales_laser_holes" :value="true" :unchecked-value="false">
                    Furo a laser</b-form-checkbox>
                <b-form-checkbox v-model="itemMod.sales_sublimation_applique" :value="true" :unchecked-value="false">
                    Apl Sublimado</b-form-checkbox>
                <b-form-checkbox v-model="itemMod.sales_sublimation_body" :value="true" :unchecked-value="false">
                    Corpo Sublimado</b-form-checkbox>
                <b-form-checkbox v-model="itemMod.sales_vies" :value="true" :unchecked-value="false">
                    viés</b-form-checkbox>
                <b-form-checkbox v-model="itemMod.sales_forro" :value="true" :unchecked-value="false">
                    forro</b-form-checkbox>
            </div>

            <div class="buttonGroup">
                <b-button @click="save" variant="primary" id="saveButton">Salvar</b-button>
                <b-button @click="cancel" variant="danger">Cancelar</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import EditOrdersConfig from './EditOrdersConfg'

export default {
    data(){
        return{
            itemMod: {},
            selectOption:['Manter','Enviado','Cancelar']
        }
    },
    methods:{
        createBox(item){
            if(item.status_order != undefined && item.status_order != '¨'){
                this.itemMod = EditOrdersConfig.itemInPrimaryValue(item)
              /*  if(itemMod.status_order == 'Cancelado'){

                }*/
                document
                this.$el.style.display = 'initial'
            } else {
                this.close()
            } 
        },
        save(){
            console.log(this.itemMod)
           // this.close()
        },
        cancel(){
            this.close()
        },
        close(){
            this.$el.style.display = 'none'
            this.itemMod = {}
            this.$parent.updateTable()
        }
    },

    mounted(){
        this.$el.style.display = 'none'
    }
}
</script>

<style>
    .editOrders{
        background-color: white;
        width: 350px;
        height: auto;
        padding: 5px 15px;
    }
    .editOrders > h2{
        font-size: 15pt;
        margin-top: 5px;
    }
    .editOrders > .editorsFields{
        padding:5px;
        background-color:rgb(245, 245, 245);
        border-radius: 15px;
    }
    .editOrders #saveButton{
        margin-right: 10px;
    }
    .editOrders .checkGroup{
        margin-bottom: 10px;
    }

</style>