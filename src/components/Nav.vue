<template> 
<nav id="navbar" class="navbar">
    <ul>
        <div  class="name">
          <router-link class="noDecoration" to="/">Cam Murphy </router-link>    
        </div>
        <div>
           <router-link class="noDecoration" to="/About">About</router-link>  
        </div>
        <div> 
          <a target="_blank" href="./resume.pdf">Resume</a>
        </div>
        <div>
        </div>
    </ul>
</nav>
</template>

<script>
  export default  {
    mounted :function() {
      this.fixedNav();
    },  
    methods: {
     fixedNav(){
      var navbar = document.getElementById("navbar")
      var sticky = navbar.offsetTop;
      if ( window.pageYOffset >= sticky ){
        navbar.classList.add("sticky")
      }
      else {
        navbar.classList.remove("sticky")
      }
    }
    }
  }
</script>

<style>
.navbar ul{
  text-decoration: none !important;
  display: flex;
  list-style-type: none;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.navbar a{
  text-decoration: none;
  color: white;
}
.noDecoration {
    text-decoration: none;
    text-decoration-color:currentColor;
    color: white;
}
.navbar div {
  text-decoration: none !important;
  font: 'verdana';
  font-weight: bold;
  font-size: 16px;
  color: white;
  padding: 14px;

}

.navbar .name{
  text-decoration: none !important;
  margin-right: auto;
  font-size: 24px;
}

.sticky {
  top: 0;
  width: 100%;
}
.sticky + .content {
  padding-top: 60px;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .navbar{
        display:none;
    }
}
</style>