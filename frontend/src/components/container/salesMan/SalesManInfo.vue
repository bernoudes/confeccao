<template>
    <div class="salesManInfo">
        <b-form>
            <h4>Cadastro de Vendedores</h4>
            <div id="name">
                <label>Nome</label>
                <b-form-input>
                </b-form-input>
            </div>
            <div id="cpf">
                <label>Cpf</label>
                <b-form-input>
                </b-form-input>
            </div>
            <b-form-checkbox class="checkAdmin">Adminstrador</b-form-checkbox>
            <div id="login">
                <label>Login</label>
                <b-form-input>
                </b-form-input>
            </div>
            <div id="password">
                <label>Senha</label>
                <b-form-input>
                </b-form-input>
            </div>
            <div class="buttons">
                <b-button variant="primary">Salvar</b-button>
                <b-button variant="danger">Cancelar</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {

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