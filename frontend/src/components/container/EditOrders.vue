<template>
    <div class="editOrders">
        <h2>Modificando Valores N° 2222222</h2>
        <label>Vendedor: dfasdfadsflsdkajflsadj</label>
        <div class="editorsFields">
            <div class="selectForm">
                <label>Estado</label>
                <b-form-select
                    class="b_form_select"
                >
                </b-form-select>
            </div>
            <div class="checkGroup">
                <b-form-checkbox id='edBordado'>Bordado</b-form-checkbox>
                <b-form-checkbox id='edBordado'>Silk</b-form-checkbox>
                <b-form-checkbox id='edBordado'>Apl Gravado</b-form-checkbox>
                <b-form-checkbox id='edBordado'>Furo a laser</b-form-checkbox>
                <b-form-checkbox id='edBordado'>Apl Sublimado</b-form-checkbox>
                <b-form-checkbox id='edBordado'>Corpo Sublimado</b-form-checkbox>
                <b-form-checkbox id='edBordado'>viés</b-form-checkbox>
                <b-form-checkbox id='edBordado'>forro</b-form-checkbox>
            </div>
            


        </div>
    </div>
</template>

<script>
export default {
    
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

</style>