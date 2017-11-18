<template>
  <div class="projects">

    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3" v-for="page in pages">
        <h3 id="NavButtons">
          <router-link :to="page.link" v-text="page.title"></router-link>
          <div id="navLines" class="page-header"></div>
        </h3>
      </div>
      <div class="col-sm-3 col-md-3 col-lg-3">
        <h3 id="NavButtons">
          <a href="../static/CV_2017.pdf" target="_blank">CV</a>
          <div id="navLines" class="page-header"></div>
        </h3>
      </div>
    </div>

    <div class="row jumbotron" v-for="projects in projectList">
      <div class="col-lg-6 col-md-6 col-sm-6">
        <h1 id="projectTextTitle" v-text="projects.title"></h1>
        <br>
        <h3 id="projectTextDescription" v-text="projects.description"></h3>
        <br>
        <h4 id="projectTextTechnology" v-text="projects.technology"></h4>
        <button v-bind:class="{ 'disabled' : !projects.onGithub }" @click="goToGithub(projects.github, projects.onGithub)" type="button" class="btn btn-lg btn-default" id="gitButton">GitHub</button>
        <button v-bind:class="{ 'disabled' : !projects.isLive }" @click="goToLive(projects.liveSite, projects.isLive)" type="button" class="btn btn-lg btn-default">Live Version</button>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6" id="resImage">
        <img class="img-responsive" v-bind:src="projects.source"></img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data() {
    return {
      projectList: [
        { title: 'Portfolio Website', description: "This is the website you are currently viewing. It has been created as a centralised hub to display my work, and allow me to track my progress as a developer.", technology: 'HTML/CSS (Bootstrap), Javascript (Vue.js)', github: "https://github.com/Tobytee17/myPortfolio", source: "../static/portfolioWebsite.png", onGithub: true, isLive: true, liveSite: "./", },
        { title: 'Currency Converter', description: "A basic currency converter that pulls the current exchange rates for 30 different currencies from the Central European Bank.", technology: 'HTML/CSS (Bootstrap), Javascript, JQuery', github: "https://github.com/Tobytee17/currencyConverter", source: "../static/currencyConverter.png", onGithub: true, isLive: false, liveSite: "", },
        { title: 'ToDo List', description: "A simple ToDo list that lets users add tasks to their list, then cross them off and delete them upon completion.", technology: 'HTML/CSS (Bootstrap), Javascript, JQuery', github: "https://github.com/Tobytee17/ToDoList", source: "../static/ToDoList.png", onGithub: true, isLive: true, liveSite: "https://tobytee17.github.io/ToDoList/", },
        { title: 'Quote Generator', description: "A quote generator that gives users a quote from a stored list. Users can also contribute their own quotes which can then also be given to other users", technology: 'HTML/CSS, Javascript, PHP', github: "https://github.com/Tobytee17/quoteGenerator", source: "../static/quoteGenerator.png", onGithub: true, isLive: false, liveSite: "", },
      ],
      pages: [
        { title: "Home", link: "/" },
        { title: "Projects", link: "/projects" },
        { title: "About Me", link: "/blog" }
      ],
    }
  },
  methods: {
    goToGithub(targetGithub, isOnGithub) {
      if (isOnGithub == false) {
        return false;
      } else {
        window.location = targetGithub;
      }
    },
    goToLive(targetLive, isOnline) {
      if (isOnline == false) {
        return false
      } else {
        window.location = targetLive;
      }
    }
  }
}
</script>

<style scoped>

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

#projectTextTitle {
  text-align: left;
  margin-top: 0px;
  padding-left: 20px;
  font-size: 50px;
  font-weight: bold;
}

#projectTextDescription {
  text-align: left;
  margin-top: 0px;
  padding-left: 20px;
  font-size: 20px;
}

#projectTextTechnology {
  text-align: left;
  margin-top: 0px;
  padding-left: 20px;
  font-size: 20px;
  font-style: italic;
}

#NavButtons {
  font-size: 35px;
}

.row {
  margin: 5% 5% 5% 5%;
}

.jumbotron {
  /* border: 1px #e3e3e3 solid; */
  margin: 2% 10% 2% 10%;
  border-radius: 20px;
  background: #fff;
}

.col-lg-6 {
  text-align: left;
}

.disabled {
  background-color: #E8EACD;
}

.disabled:hover {
  background-color: #d2c7b8;
}

.btn {
  display: inline;
  margin: 30px 0px 20px 0px;
}

#gitButton {
  margin-left: 30px;
}

.img-responsive {
  max-height: 500px;
  border: 2px #e3e3e3 solid;
  float: right;
  border-radius: 15px;
}

.projects {
  background: #fff;
  padding-top: 5px;
  padding-bottom: 5px;
}

/*   background: #E8EACD;*/

</style>
