<template>
  <div class="header">   

    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3" v-for="page in pages">
        <h3 id="headerText">
          <router-link :to="page.link" v-text="page.title"></router-link>
          <div id="navLines" class="page-header"></div>
        </h3>
      </div>
      <div class="col-sm-3 col-md-3 col-lg-3">
        <h3 id="headerText">
          <a href="../static/CV_2018.pdf" target="_blank">CV</a>
          <div id="navLines" class="page-header"></div>
        </h3>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      pages: [
        { title: "Home", link: "/" },
        { title: "Projects", link: "/projects" },
        { title: "About Me", link: "/aboutMe" }
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
    margin-top: 5px;
  }
  #headerText {
    font-size: 25px;
  }
    #navLines {
    display: none;
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

h3 {
  padding-bottom: 20px;
  font-size: 35px;
}

.row {
  margin: 2% 5% 0% 5%;
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
