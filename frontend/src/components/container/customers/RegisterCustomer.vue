<template>
    <div class="regCustomer">
        <h1> Registro de Clientes </h1>
        <SimplesMessage ref="smgRegCustomer"/>
        <b-form  @submit="onSubmit" @reset="onReset">
            <b-form-group>
                <label>Nome:</label>
                <b-form-input 
                    id="form_name" 
                    :disabled="disabled"
                    v-model="form.name"
                    placeholder="Nome do Cliente" 
                    required>
                </b-form-input>
            </b-form-group>

            <b-form-group  class="mt-4">
                <label> Cpf ou Cnpj:</label>
                <b-form-input
                    id="form_cpf" 
                    :disabled="disabled"
                    v-model="form.cpf"
                    placeholder="Somente Numeros"
                    @keypress="notNumber"
                    required>
                </b-form-input>
            </b-form-group>

            <b-form-group class="mt-4">
                <label> Nome da Marca ou Empresa: </label>
                <b-form-input
                    id="form_nameBrand" 
                    :disabled="disabled" 
                    v-model="form.name_brand" 
                    placeholder="Nome da Marca"  
                    require>
                </b-form-input>
            </b-form-group>

            <b-button id="bSubmit" type="submit" variant="primary" class="mt-4" :disabled="disabled">
                Cadastrar</b-button>
            <b-button id="bReset" type ="reset" variant="danger" class="mt-4" :disabled="disabled">
                Cancelar</b-button> 
        </b-form>
    </div>
</template>

<script>

//name VARCHAR(40), cpf VARCHAR(20),name_brand VARCHAR(40)
import axios from 'axios'
import conn from '../../../config/conn'
import SimplesMessage from '../SimplesMessage'

export default {
    name: 'regCustomer',
    data(){
        return{
            message:'Nothing',
            disabled: false,
            form:{
                name:'',
                cpf:'',
                name_brand:''
            }
        }
    },
    components:{ SimplesMessage },
    methods:{
        async onSubmit(event){
            event.preventDefault()
        
            const res = await axios.post(`${conn.backUrl}/customers`,
            {name:this.form.name, cpf:this.form.cpf, name_brand: this.form.name_brand})

            if(res.data == 'exists_cpf'){
                this.$refs.smgRegCustomer.CreateBox(0,0,'Problema no Cadastro','Cpf Já Cadastrado');
            } else if( res.data == 'success'){
                this.$refs.smgRegCustomer.CreateBox(0,0,'Cadastro','Cliente foi cadastrado com sucesso')
            }
        },
        onReset(event){
            event.preventDefault()
        },
        ///////////////////////////////
        enabledElements(){
            this.disabled = false
            this.resetData()
        },
        disabledElements(){
            this.disabled = true
        },
        resetData(){
            this.form.name = '',
            this.form.cpf = '',
            this.form.name_brand = ''
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
    .regCustomer > .messageOpt{
        position: absolute;
        
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
