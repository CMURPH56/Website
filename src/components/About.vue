<template>
  <section>
    <div class='content' />
  </section>
</template>


<style>
.content{
  width: 45%;
  margin-left: auto;
  margin-right: auto;
}
.content h1 {
  color: white;
}
img {
  height: auto;
  width:  350px;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .content {
    width: 100%;
  }
  img{
    width: 100%;
  }
}
</style>