<template>
    <div class="showOrders">
        <b-form>
            <b-form-select
                id="form_month" 
                ref="form_month"
                :options="monthTemplate"
                :value="1">
            </b-form-select>

            <b-form-select
                id='form_year'
                ref="form_year"
                :options="yearTemplate"
                :value="yearTemplate[0]">
            </b-form-select>

            <b-button class="fa fa-search" @click="searchByData"></b-button>

            <div class="gr_searchByCPF">
                <b-form-input
                    id='form_cpf'
                    ref="form_cpf"
                    placeholder="CPF/CNPJ"
                    require>
                </b-form-input>

                <b-button class="fa fa-search" @click="searchByCPF"></b-button>
            </div>


        </b-form>
    </div>
</template>

<script>
export default {
    name: 'showOrders',
    data(){
        return{
            monthTemplate:[1,2,3,4,5,7,8,9,10,11,12],
            yearTemplate:[]
        }
    },
    methods:{
        CreateyearTemplate(){
            for(let count = 2020; count < 3000; count++){
                this.yearTemplate.push(count)
            }      
        },
        searchByData(event){
            event.preventDefault()
            console.log(this.$refs.form_month.localValue)
            console.log(this.$refs.form_year.localValue)
            
        },
        searchByCPF(event){
            event.preventDefault()
            console.log(this.$refs.form_cpf.vModelValue)
        }
    },
    mounted(){
        this.CreateyearTemplate()
    }
}
</script>

<style>
    .showOrders .gr_searchByCPF{
        display: flex;
        flex-direction: row;
    }
</style>