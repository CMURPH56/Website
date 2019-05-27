<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/About"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

body{
    background-image: url('./assets/chicago.jpg');
    background-size: cover;
    background-size: cover;
  resize: both;
  background-repeat: no-repeat;
  width: auto;
  height: 75vh;
  max-width: 100%;


}
#app {
  font-family: 'Verdana', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
