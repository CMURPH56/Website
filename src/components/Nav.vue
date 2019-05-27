<template> 
  <div id="navbar" class="navbar">
    <ul>
      <div class="name">
        <router-link class="noDecoration" to="/">Cam </router-link>    
      </div>
      <div>
        <router-link class="noDecoration" to="/About">About</router-link>  
      </div>
      <div> 
        <a target="_blank" href="./resume.pdf">Resume</a>
      </div>
    </ul>
  </div>
</template>

<style>
.navbar{
  position: sticky;
  position: -webkit-sticky;
  background-color: #444444;
  top: 0;
}
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