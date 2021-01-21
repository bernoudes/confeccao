<template>
    <div class="header">
        cabeçalho
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    .header{
        grid-area: header;
        height: 50px;
        display: flex;
        justify-content: flex-end;
    }
    .header{
        background: linear-gradient(90deg, rgba(214,205,255,0.5) 0%, rgba(0,151,255,0.5) 100%);
        
    }
</style>