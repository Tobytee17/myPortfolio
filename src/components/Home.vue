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

    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3" v-for="page in pages">
        <h3>
          <router-link :to="page.link" v-text="page.title"></router-link>
          <div id="navLines" class="page-header"></div>
        </h3>
      </div>
      <div class="col-sm-3 col-md-3 col-lg-3">
        <h3>
          <a href="../static/CV_2017.pdf" target="_blank">CV</a>
          <div id="navLines" class="page-header"></div>
        </h3>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      pages: [
        { title: "Home", link: "/" },
        { title: "Projects", link: "/projects" },
        { title: "About Me", link: "/blog" }
      ],
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
  .well {
    height: 50px;
    padding: 0px;
    margin: 10px;
  }
  h3 {
    padding: 0xp;
    margin-top: 15px;
  }
}

#navLines {
  width: 50%;
  margin: 0% 25% 0% 25%;
}

a {
  text-decoration: none;
  color: black;
  -moz-transition: all .1s ease-in;
  -o-transition: all .1s ease-in;
  -webkit-transition: all .1s ease-in;
  transition: all .1s ease-in;
}

a:hover {
  color: #bdc3c7;
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

h3 {
  padding-bottom: 20px;
  font-size: 35px;
}

.img-responsive {
  display: inline-block;
  margin: 100px 0px 100px 0px;
}

.row {
  margin: 0% 5% 0% 5%;
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
