<template>
  <div class="hello">
    <Nav />
    <Hero />

    <div class="quick-description"> 
      <h1> Hello!! </h1>
      My name is Cam,   
      I am a software Developer living in Chicago.
      I code to build things I like. Learn more about me here.
    </div>
    <div class="quick-description"> 
      <h1> Projects </h1>
      I like to grow my skills by building things that I 
      like. See some of my favorite projects here. 
    </div>
    <div class="quick-description"> 
      <h1> Skills </h1>
      I have yet to write any blog posts. 
      This is section is a hopeful one for me.
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue'
import Hero from './Hero.vue'
export default {
  components: {
    Nav,
    Hero
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  margin-top: 2vh;
}
.quick-description{
  font-size: 18px;
}
.hello h1{
  color:purple;
}

</style>
