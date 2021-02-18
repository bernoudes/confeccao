<template>
  <div class="app">
    <Header />
    <Menu />
    <Container />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/template/Header'
import Footer from './components/template/Footer'
import Container from './components/template/Container'
import Menu from './components/template/Menu'

export default {
  name: 'App',
  components: {
    Header,Footer,Container, Menu
  }
}
</script>

<style>
  @font-face {
    font-family: 'PTSans-Regular';
    src: url('./assets/PTSans-Regular.ttf');
  }

  .app{
    height: 97vh;
    display: grid;
    grid-template-areas:
		"header header"
		"menu conteiner"
		"footer footer"
		;
    grid-template-rows: 50px 1fr 20px;
    grid-template-columns: 200px 1fr;
  }

  /*SELECT BOX CONFIG*/
   .selectForm{
        display: flex;
        flex-direction: column;
        margin-right: 10px
    }

    .b_form_select{
        height: 35px;
    }
    /*CHILD COMMOM BOX CONFIG*/
    .childCommomConfg{
       position: absolute;
        height: auto;
        padding: 5px 20px;
        background-color: white;
        border-style: solid;
        border-color: rgb(200,200,200);
        z-index:8;
    }
</style>
