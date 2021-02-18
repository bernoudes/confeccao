<template>
    <!-- this box is diferent from others because is created by using independt of the parent
         so, the props is (message: 'string', okLabel: 'string', notLabel:'string', okFunction:'function',
    notFunction:'function')-->
    <div class="simpleMessage childCommomConfg">
        <label>{{message}}</label>
        <div class="buttonArea">
            <b-button variant="primary">{{okLabel}}</b-button>
            <b-button variant="danger">{{notLabel}}</b-button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        message:{},
        okLabel:{},
        notLabel:{},
        okFunction:{},
        notFunction:{}
    },
    data(){
        return{
            message2: 'do some',
            update: 'false'
        }
    },
    methods:{
        CreateBox(){
            this.$el.style.display = 'initial'
          //  console.log(this.$parent)
        }
    },
    mounted(){
        this.$el.style.display = 'none';
    }
}
</script>

<style>
    .simpleMessage{
        width: auto;
    }
    .simpleMessage > .buttonArea{
        display: flex;
        justify-content: space-between;
        margin: 10px 30px;
    }
</style>