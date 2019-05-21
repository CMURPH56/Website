<template>
  <div class="hello">
    <Nav />
    <Hero />

    <div class="quick-description"> 
      <h1> Hello!! </h1>
      My name is Cam, 
      I am a software Developer living in Chicago.
      Along with programming, I also like to run, read, 
      and work with robotics. If you would like to 
      know more about me click 
      <router-link to="/about"> here</router-link>.
    </div>

    <div class="quick-description"> 
      <h1> Projects </h1>
      I like to grow my skills by building things that I 
      like. See some of my favorite projects here. 
    </div>
    <div class="quick-description"> 
      <h1> Skills </h1>
      After being a Developer some years. I have learned
      some technical and soft-skills learn more here.
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
  },
  methods : {
    stickyNav:function() {
      const navbar = document.getElementById('navbar')
    }
  }
}

  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  color:white;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .quick-description {
    width: 100%;
  }
}

</style>
