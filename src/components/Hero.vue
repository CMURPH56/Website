<template>
  <section class ="Hero">
    <h1> Cam Murphy </h1>
    <h3>  Software Developer </h3>
  </section>
</template>

<style>
.Hero{
  background-size: cover;
  resize: both;
  background-repeat: no-repeat;
  width: auto;
  height: 75vh;
  max-width: 100%;
}
.Hero h1{
  padding-top: 20vh;  
  margin: 0;
  font-size: 80px;
  color: white 
}
.Hero h3{
  color: white;
  font-size: 40px;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .Hero h1{
          padding-top: 10vh;
  }
  
}
</style>