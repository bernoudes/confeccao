<template>
    <div class="regCustomer">
        <h1> Registro de Clientes </h1>
        <b-form  @submit="onSubmit" @reset="onReset">
            <b-form-group>
                <label>Nome:</label>
                <b-form-input 
                    id="form_name" 
                    v-model="form.name"
                    placeholder="Nome do Cliente" 
                    required>
                </b-form-input>
            </b-form-group>

            <b-form-group  class="mt-4">
                <label> Cpf ou Cnpj:</label>
                <b-form-input
                    id="form_cpf" 
                    v-model="form.cpf"
                    placeholder="Somente Numeros"
                    @keypress="notNumber"
                    required>
                </b-form-input>
            </b-form-group>

            <b-form-group class="mt-4">
                <label> Nome da Marca ou Empresa: </label>
                <b-form-input
                    id="form_nameBrand" v-model="form.name_brand" placeholder="Nome da Marca"  
                    require>
                </b-form-input>
            </b-form-group>

            <b-button id="bSubmit" type="submit" variant="primary" class="mt-4" >Cadastrar</b-button>
            <b-button id="bReset" type ="reset" variant="danger" class="mt-4" >Cancelar</b-button>
        </b-form>
    </div>
</template>

<script>

//name VARCHAR(40), cpf VARCHAR(20),name_brand VARCHAR(40)
export default {
    name: 'regCustomer',
    data(){
        return{
            form:{
                name:'',
                cpf:'',
                name_brand:''
            }
        }
    },
    methods:{
        onSubmit(event){
            event.preventDefault()
            alert(this.form.name_brand)
        },
        onReset(event){
            event.preventDefault()
        },
        notNumber(event){
            if(isNaN(event.key) || event.key == ' '){
                event.preventDefault()
            }
        }
    }
}
</script>

<style>
    .regCustomer h1{
        font-size: 20pt;
        margin-top: 25px;
        margin-bottom: 20px;
    }
    #form_name{
        width: 800px;
    }
    #form_cpf{
        width: 400px;
    }
    #form_nameBrand{
        width:800px;
    }
    #bReset{
        margin-left: 10px;
    }


</style>
