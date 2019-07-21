<template>
  <section>
    <div>
      <h1> College </h1>
      <p>
        Graduate of Depaul University, with a minor in Physics and a Major in Computer Science.
      </p>
      <h1> Internship </h1>
      <p>
        First College internship was at Pronto Progess. I worked with a properiatary 
        manufacturing software product called Epicor. I mostly configure the software in an IT
        role or I wrote C# programs that extended the software's capabilities.        
      </p>
    </div>
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
p {
  margin: 0 auto;
  width: 33%;
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
  p { 
    width: 100%;
  }
}
</style>