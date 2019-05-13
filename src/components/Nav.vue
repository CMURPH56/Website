<template> 
<nav class="navbar">
    <ul>
        <div  class="name">
          <router-link class="noDecoration" to="/">Cam Murphy </router-link>    
        </div>
        <div>
           <router-link class="noDecoration" to="/About">About</router-link>  
        </div>
        <div> 
          <router-link class="noDecoration" to="/">Resume</router-link>
        </div>
        <div>
        </div>
    </ul>
</nav>
</template>


<style>

.navbar ul{
  text-decoration: none !important;
  display: flex;
  list-style-type: none;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.noDecoration {
    text-decoration: none;
    text-decoration-color:currentColor;
    color: purple;
}
.navbar div {
  text-decoration: none !important;
  font: 'verdana';
  font-weight: bold;
  font-size: 20px;
  color: purple;
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