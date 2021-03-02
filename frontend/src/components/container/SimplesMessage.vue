<template>
    <!-- for use this box is necessary with the parent have a enabledElements and disabledElements-->
    <div class="childCommomConfg simpleMessage" 
        :style="`margin-top: ${posY}px; margin-left: ${posX}px;` ">

        <div class="elements">
            <div>
                <h4>{{label}}</h4>
                <p>{{message}}</p>
            </div>
            <b-button class=" buttonClose fa fa-window-close" variant='danger' @click="Close()"></b-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            posX: 0,
            posY: 0,
            message:'',
            label:'',
        }
    },
    methods:{
        CreateBox(posX, posY, label, message){
            if(this.$parent.disabledElements && this.$parent.enabledElements){
                this.$parent.disabledElements()

                this.posX = posX
                this.posY = posY
                this.label = label
                this.message = message

                this.$el.style.display = 'initial'
            }
        },
        Close(){
            this.$parent.enabledElements()
            this.posX = 0
            this.posY = 0
            this.message = ''
            this.label = ''
            this.$el.style.display = 'none'
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
    .simpleMessage > .elements{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .simpleMessage > .elements > .buttonClose{
        margin-left: 20px;
        height: 40px;
    }
</style>