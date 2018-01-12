<template>
  <div class="projects">
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
        { title: 'QuickClick', description: "A simplistic online multiplayer browser game which pits users against each other to see who has the fastest reaction time.", technology: 'NodeJS (Express), Javascript (ES6), Socket.IO, JQuery, EJS, HTML/CSS (Bulma.IO)', github: "https://github.com/Tobytee17/QuickClick", source: "../static/QuickClick.png", onGithub: true, isLive: false, liveSite: "", },
        { title: 'Gister', description: "Gister is a Google Chrome extension that I published which allows users to easily create and share code snippets through their browser. This was achieved through utilising GitHub's public Gister API.", technology: 'JavaScript, JQuery, Chrome API, HTML/CSS (Bulma.IO)', github: "https://github.com/Tobytee17/Gister", source: "../static/Gister.png", onGithub: true, isLive: true, liveSite: "https://goo.gl/t34pJJ", },
        { title: 'TobyTee.com', description: "This is the website you are currently viewing. It has been created as a centralised hub to display my work, and allow me to track my progress as a developer.", technology: 'JavaScript (VueJS), HTML/CSS (Bootstrap)', github: "https://github.com/Tobytee17/myPortfolio", source: "../static/portfolioWebsite.png", onGithub: true, isLive: true, liveSite: "./", },
        { title: 'ToDo List', description: "A simple ToDo list that was created as a proof of concept to help me learn how to implement a small NodeJS backend", technology:  'NodeJS (Express), JavaScript (ES6), JQuery, MongoDB, EJS, HTML/CSS (Bulma.IO)', github: "https://github.com/Tobytee17/ToDoList", source: "../static/ToDoListNode.jpg", onGithub: true, isLive: true, liveSite: "https://tobytee17.github.io/ToDoList/", },
        { title: 'Currency Converter', description: "A basic currency converter that pulls the current exchange rates for 30 different currencies from the Central European Bank.", technology: 'JavaScript, JQuery, HTML/CSS (Bootstrap)', github: "https://github.com/Tobytee17/currencyConverter", source: "../static/currencyConverter.png", onGithub: true, isLive: false, liveSite: "", },
        { title: 'Quote Generator', description: "A quote generator that gives users a quote from a stored list. Users can also contribute their own quotes which can then also be given to other users", technology: 'JavaScript, PHP, HTML/CSS', github: "https://github.com/Tobytee17/quoteGenerator", source: "../static/quoteGenerator.png", onGithub: true, isLive: false, liveSite: "", },
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

.jumbotron {
  margin: 0% 10% 0% 10%;
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
