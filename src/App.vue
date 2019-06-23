<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/About"></router-link>
      <router-link to="/Blogs"></router-link>
      <router-link to="/Blogs/RouterLinkArticle.vue"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

body{
  background-image: url('./assets/chicago.jpg');
  background-size: cover;
  resize: both;
  background-repeat: no-repeat;
  width: auto;
  height: auto;
  overflow: hidden;
}

#app {
  height:100%;
  font-family: 'Verdana', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
