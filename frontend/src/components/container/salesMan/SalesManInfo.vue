<template>
    <div class="salesManInfo">
        <b-form>
            <h4>Cadastro de Vendedores</h4>
            <div id="name">
                <label>Nome</label>
                <b-form-input v-model="salesman.name" placeholder="Digite o Nome">
                </b-form-input>
            </div>
            <div id="cpf">
                <label>Cpf</label>
                <b-form-input v-model="salesman.cpf" placeholder="Digite o Cpf" @keypress="notNumber">
                </b-form-input>
            </div>
            <b-form-checkbox class="checkAdmin" v-model="salesman.admin">Adminstrador</b-form-checkbox>
            <div id="login">
                <label>Login</label>
                <b-form-input v-model="salesman.login" placeholder="Digite o Login">
                </b-form-input>
            </div>
            <div id="password">
                <label>Senha</label>
                <b-form-input v-model="salesman.password" placeholder="Digite a Senha">
                </b-form-input>
            </div>
            <div class="buttons">
                <b-button variant="primary" @click="Save()">Salvar</b-button>
                <b-button variant="danger" @click="Close()">Cancelar</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
import salesManConn from './SalesManConn'

export default {
    data(){
        return{
            salesman:{
                name: '',
                cpf: '',
                login: '',
                password: '',
                admin: false
            }
        }
    },
    methods:{
        CreateBox(){
            this.$el.style.display = 'initial'
        },
        Save(){
            salesManConn.save(this.salesman)
            try{
                this.$parent.reLoad()
            } catch(err){
                //put html message in the parent, position absolute
               // this.$parent.'<b-alert>Show Alert</b-alert>'
            }
            this.Close
        },        
        Close(){
            this.salesman.name =  ''
            this.salesman.cpf =  ''
            this.salesman.login =  ''
            this.salesman.password =  ''
            this.salesman.admin =  false
            this.$el.style.display = 'none'
        },
        notNumber(event){
            if(isNaN(event.key) || event.key == ' '){
            event.preventDefault()
        }
}

    },
    mounted(){
        this.$el.style.display = 'none'
    }
}
</script>

<style>
    .salesManInfo{
        position: absolute;
        height: auto;
        width: 400px;
        padding: 5px 20px;
        background-color: white;
        border-style: solid;
        border-color: rgb(200,200,200);
        z-index:8;
    }

    .salesManInfo .checkAdmin{
        margin:10px;
    }

    .salesManInfo .buttons{
        display:flex;
        justify-content: space-between;
        padding: 0px 20px;
        margin: 20px 20px 10px 20px;
    }
</style>