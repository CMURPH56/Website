<template>
  <section>
    <Nav />
    <div class='content'>

      <h1> College </h1>
      <p>
        I was initially a Physics Major. However, After a few years in the Physics program. I realized, I wanted 
        something more practical. I switched to Computer Science Sophmore Year, and after
        I took the  the Python introduction classes
        there was no turning back. The further I got into large scale software, Java,
        and design patterns the more I enjoyed it. I graduated in 2018 with my Degree in Software Development and 
        a minor in Physics.
      </p>
      <h1> Internship </h1>
      <p>
        In the summer of 2018, I got my first
        internship at Pronto Progress. It was a small company that did
        consulting work with companies who use Epicor. I was responsible 
        for writing small programs in C# that would modify the existing software.
      </p>
      <h1> Career </h1>
      <p>
        After the summer, I got another offer from One North Interactive
        for an internship. I worked part time at One North and finished up 
        my degree at DePaul University. After graduating, I accepted a full time 
        position as an Associate Software Developer. Where I work on large scale .NET application
        with the Sitecore CMS, and smaller scale JavaScript based WordPress and Keystone sites.
      </p>
      <h1> Mentorship  </h1>
      <p>
        In the Fall of 2018 I applied to be a mentor with Chicago Python Users Group.
        The program takes someone who is more experienced in programming and pairs them 
        with someone who wants to learn more in a project based environment. The project
        I worked on was connecting a Raspberry Pi to a cars OBDII port to get real time 
        data sent to a <a href='https://github.com/krum04/OBD2-Cloud-Connect-Client'>React Website</a> hosted on Heroku. We went on to win the competition that
        season.
      </p>
      <h1> Side Projects </h1>
      <p>
        I try to be
        a frequent Contributer to github, and have started a few side projects.
        Including most recently
        <a href='http://www.Camshorrorquiz.com'> CamsHorrorQuiz.com</a>.
        I also like to work on smaller home projects with Raspberry Pi's
        or Arduinos. 
      </p>
    </div>
  </section>
</template>

<script>
  import Nav from './Nav.vue'
  export default {
    components :{
      Nav
    }
  }
</script>
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