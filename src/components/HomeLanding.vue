<template>
  <div class="hello">
    <Nav />
    <h1> Cam Murphy </h1>
    <h3>  Software Developer </h3>
    <Footer />
  </div>
</template>

<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue'
export default {
  components: {
    Nav,
    Footer
  },
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
.hello{
  margin-top: 2vh;
}
.quick-description{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  font-size: 18px;
}
.hello h1{
  padding-top: 20vh;  
  margin: 0;
  font-size: 80px;
}
.hello h3{
  font-size: 40px;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .quick-description {
    width: 100%;
  }
}
</style>
