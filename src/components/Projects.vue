<template>
  <div class="projects">
    <div class="row jumbotron" v-for="projects in projectList">
      <div class="col-lg-6 col-md-6 col-sm-6">
          <h1 v-text="projects.title"></h1>
          <br>
          <h3 v-text="projects.description"></h3>
          <br>
          <h4 v-text="projects.technology"></h4>
          <button v-bind:class="{ 'disabled' : !projects.onGithub }" @click="goToGithub(projects.github, projects.onGithub)" type="button" class="btn btn-lg btn-info" id="gitButton">GitHub</button>
          <button v-bind:class="{ 'disabled' : !projects.isLive }" @click="goToLive(projects.liveSite, projects.isLive)" type="button" class="btn btn-lg btn-info">Live Version</button>
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
  data () {
    return {
      projectList: [
        {title: 'Currency Converter', description: "A basic currency converter that pulls the current exchange rates for 30 different currencies from the Central European Bank.", technology: 'HTML/CSS (Bootstrap), Javascript, JQuery', github: "https://github.com/Tobytee17/currencyConverter", source: "../static/currencyConverter.png", onGithub: true, isLive: false, liveSite: "", },
        {title: 'ToDo List', description: "A simple ToDo list that lets users add tasks to their list, then cross them off and delete them upon completion.", technology: 'HTML/CSS (Bootstrap), Javascript, JQuery', github: "https://github.com/Tobytee17/ToDoList", source: "../static/ToDoList.png", onGithub: true, isLive: false, liveSite: "", },
        {title: 'Quote Generator', description: "A quote generator that gives users a quote from a stored list. Users can also contribute their own quotes which can then also be given to other users", technology: 'HTML/CSS, Javascript, PHP', github: "https://github.com/Tobytee17/quoteGenerator", source: "", onGithub: true, isLive: false, liveSite: "", },
        {title: 'Portfolio Website', description: "This is the website you are currently viewing. It has been created as a centralised hub to display my work, and allow me to track my progress as a developer.", technology: 'HTML/CSS (Bootstrap), Javascript (Vue.js)', github: "", source: "", onGithub: false, isLive: true, liveSite: "", }
      ],
    }
  },
  methods: {
    goToGithub(targetGithub, isOnGithub) {
      if(isOnGithub == false) {
        return false;
      } else {
        window.location = targetGithub;
      }
    },
    goToLive(targetLive, isOnline) {
      if(isOnline == false) {
        return false
      } else {
        window.location = targetLive;
      }
    }
  },
  computed: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h3, h4 {
    text-align:left;
    margin-top:0px;
    padding-left:20px;
}
h4 {
  font-style:italic;
}
.jumbotron  {
  border-radius: 50px;
}
.col-lg-6 {
  text-align: left;
}
.btn {
  display:inline;
  margin-top:30px;
}
#gitButton {
  margin-left:30px;
}
.img-responsive {
  padding: 5%;
  border-radius: 60px;
  max-height: 500px;
}

</style>
