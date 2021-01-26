<template>
    <div class="footer">
        <p>Projeto Criado Por Lucas Bernardo da Silva</p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer{
        grid-area: footer;
        display: flex;      
        justify-content: flex-end;
        align-items: Center;
    }
    .footer p{
        margin-right: 20px;
        color: gray;
    }
</style>