<template>
  <div class="home">   

    <div id="headerContainer" class="row container-fluid">
      <h1 id="introduction">I'm <strong>Toby Tee</strong>, an aspiring web and software developer currently based out of Auckland, New Zealand.</h1>
        <div class="page-header"></div>
      <div id="socialMedia" class="col-lg-4 col-md-4 col-sm-4 col-xs-4" v-for="platform in socialMedia">
        <a v-bind:href="platform.link" v-bind:target="platform.target">
          <i v-bind:class="platform.source"></i>
        </a> 
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      socialMedia:
      [
          { platform: "GitHub", source: "fa fa-github", link: "https://github.com/Tobytee17", target: "__blank" },
          { platform: "LinkedIn", source: "fa fa-linkedin", link: "https://www.linkedin.com/in/toby-tee-27aaa5108/", target: "__blank" },
          { platform: "Email", source: "fa fa-envelope-o", link: "mailto:tobytee17@gmail.com" },
      ],
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 767px) {
}

i {
  font-size: 25px;
  color: #bdc3c7;
  -moz-transition: all .1s ease-in;
  -o-transition: all .1s ease-in;
  -webkit-transition: all .1s ease-in;
  transition: all .1s ease-in;
}

i:hover {
  color: black;
  transform: scale(1.1);
}


.img-responsive {
  display: inline-block;
  margin: 100px 0px 100px 0px;
}

.headings {
  background: #fff;
}

#socialMedia {
  padding: 0%;
}

#headerContainer {
  margin:10% 27% 10% 27%;
}

.page-header {
  margin:5%;
}

</style>
