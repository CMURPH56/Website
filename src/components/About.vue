<template>
  <section>
    <Nav />
    <div class='content'>
      <h1> Test </h1>
    </div>
  </section>
</template>

<script>
  import Nav from './Nav.vue'
  export default {
    components :{
      Nav
    }
  }
</script>
<style>
.content{
  border-top: 2px solid purple;
}
</style>