<template>
  <div class="aboutMe">

    <div class="row" id="rowContainer" v-for="article in Me">
      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
        <img class="img-responsive" v-bind:src="article.image"></img>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
        <h1 v-text="article.title"></h1>
        <h3>{{article.aboutMe}}</h3>
        <ul v-for="interests in article.interests">
          <h3><i>{{interests}}</i></h3>
        </ul>
      </div>
    </div>

    <div class="row" id="rowContainer" v-for="article in education">
      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
        <img class="img-responsive" v-bind:src="article.image"></img>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
        <h1 v-text="article.title"></h1>
        <h3 v-text="article.university"></h3>
        <ul><h3>Degree: <i>{{article.degree}}</i></h3></ul>
        <ul><h3>Major: <i>{{article.major}}</i></h3></ul>
        <ul><h3>Minor: <i>{{article.minor}}</i></h3></ul>
      </div>
    </div>

    <div class="row" id="rowContainer" v-for="article in skills">
      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
        <img class="img-responsive" v-bind:src="article.image"></img>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
        <h1 v-text="article.title"></h1>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <h3>Languages:</h3>
          <ul v-for="skills in article.languages">
            <h3><i>{{skills}}</i></h3>
          </ul>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <h3>Frameworks:</h3>
          <ul v-for="technologies in article.frameworks">
            <h3><i>{{technologies}}</i></h3>
          </ul>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <h3>Concepts:</h3>
          <ul v-for="concepts in article.concepts">
            <h3><i>{{concepts}}</i></h3>
          </ul>
        </div>
      </div>
    </div>

    <div class="row" id="rowContainer" v-for="article in workExperience">
      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
        <img class="img-responsive" v-bind:src="article.image"></img>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
        <h1 v-text="article.title"></h1>
        <h3 v-text="article.company"></h3>
        <ul><h3>Role: <i>{{article.role}}</i></h3></ul>
        <ul><h3>Duration: <i>{{article.duration}}</i></h3></ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      education: [
        {title: "Education",
        university: "Massey University", major: "Information Technology", minor: "Small Business Management",
        degree: "Bachelor of Information Science", image: "../static/masseyUniversity.jpg" },
      ],
      skills: [
        { title: "Skills", languages: ["HTML5", "CSS3", "Javascript", "C#"], frameworks: ["JQuery", "VueJS", "Bootstrap 3 & Bulma", ], concepts: ["Agile Development", "Unit Testing", "OOP", "Design Patterns"], image: "../static/codeStockImage.jpg" },
      ],
      workExperience: [
        { title: "Work Experience", company: "The Warehouse Group", role: "General IT Intern", duration: "10 Weeks", image: "../static/workExperience.jpg" },
      ],
      Me: [
        {title: "Me", aboutMe: "Hi, I'm Toby Tee, an aspiring web/software developer who is currently based out of Auckland, New Zealand. As well as coding, I have many interests that I pursue in my spare time, these include:", interests: ["Photography", "Gyming", "Travel", "Martial Arts", ""], image: "../static/ProfilePic.jpg"}
      ]
    }
  },
}
</script>

<style scoped>
.aboutMe {
  background: #fff;
}

.row {
  margin: 1% 10% 1% 10%;
  text-align: left;
}

h1 {
  font-weight: bold;
  font-size: 50px;
  margin-top:0px;
}

h3 {
  font-size: 20px;
  margin-top: 20px;
}

#rowContainer {
  margin: 2% 10% 5% 10%;
}

.aboutMe {
  padding-top: 5px;
  padding-bottom: 5px;
}

.img-responsive {
  max-height: 500px;
  border-radius: 15px;
}

</style>
