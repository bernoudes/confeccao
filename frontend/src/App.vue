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
</style>
