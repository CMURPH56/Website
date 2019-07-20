<template> 
<section>
    <div class="hamburger">
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle"/>
      <div class="menu">
        <router-link class="noDecoration" to="/">Cam</router-link>
        <router-link class="noDecoration" to="/About">About</router-link>
        <router-link class="noDecoration" to="/Blogs">Blogs</router-link>
        <router-link class="noDecoration" to="/Projects">Projects</router-link>
        <a target="_blank" href="./resume.pdf">Resume</a>
      </div>
  </div>
</section>  
</template>
<style>

.menu{
  margin: 0 30px 0 0;
}
.menu a {
  text-decoration: none;
  color: black;
  margin: 0 10px;
  line-height: 70px; 
  font-size: 18px;
}

label {
  margin: 0 40px 0 0;
  font-size: 32px;
  line-height: 70px; 
  display: none; 
}
#toggle {
  display: none;  
}

@media only screen and (max-width: 500px) {
  label {
    display: block;
    cursor: pointer;
  }
  .hamburger {
    margin-left: 75%;
  }
  .menu {
    text-align: left;
    width: 100%;
    display: none;
  }
  .menu a {
    display: block;
    border-bottom: 1px solid #eaeaeb;
  }
  #toggle:checked + .menu {
    position: absolute;
    z-index: 100;
    background: white;
    display:block;
  }
}
.navbar{
  position: sticky;
  position: -webkit-sticky;
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
  color: black;
}
.noDecoration {
    text-decoration: none;
    text-decoration-color:currentColor;
    color: black;
}
.navbar div {
  text-decoration: none !important;
  font: 'verdana';
  font-weight: bold;
  font-size: 16px;
  color: black;
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