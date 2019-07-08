<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/About"></router-link>
      <router-link to="/Blogs"></router-link>
      <router-link to="/Blogs/RouterLinkArticle.vue"></router-link>
    </div>
    <Nav />
    <router-view id="router-view"/>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Nav,
    Footer
  }
}
</script>


<style>

body{

  background-color:white;
  width: auto; 
  height: 100%;
  margin: 0;
  padding: 0;
}
#router-view {
 min-height:100%; 
 position:relative;
 padding-bottom: 10vh;
}
#app {
  height:100%;
  font-family: 'Verdana', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
}
</style>
