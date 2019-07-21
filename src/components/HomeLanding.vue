<template>
  <div class="hello">
    <Nav />
    <h1> Cam Murphy </h1>
    <h3>  Software Developer </h3>
    <Footer />
  </div>
</template>

<style scoped>
.hello{
  margin-top: 2vh;
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
  .hello {
    margin-top: 0vh;
  }
  .hello h1{
    padding-top: 5vh;
  }
}
</style>
