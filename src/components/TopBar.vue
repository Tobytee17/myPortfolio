<template>
  <div class="topBar">
      <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="websiteName" v-for="page in pages">
              <h2><router-link :to="page.link" v-text="page.title"></router-link></h2>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="SocialMedia">
            <div id="socialMedia" class="col-lg-1 col-md-1 col-sm-1 col-xs-1" v-for="platform in socialMedia">
                <a v-bind:href="platform.link" v-bind:target="platform.target">
                <i v-bind:class="platform.source"></i>
                </a> 
            </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      socialMedia:
      [
          { platform: "GitHub", source: "fa fa-github", link: "https://github.com/Tobytee17", target: "__blank" },
          { platform: "LinkedIn", source: "fa fa-linkedin", link: "https://www.linkedin.com/in/toby-tee-27aaa5108/", target: "__blank" },
          { platform: "Email", source: "fa fa-envelope-o", link: "mailto:tobytee17@gmail.com" },
      ],
      pages: [
        { title: "Tobytee.com", link: "/" },
      ],
    }
  }
}
</script>

<style scoped>

.header {
    margin: 0px;
    padding: 0px;
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
  margin: 20px 20px 0px 0px;
}

i:hover {
  color: black;
  transform: scale(1.1);
}

.row {
    margin: 0px;
    padding: 0px;
}

h2 {
    margin-left: 20px;
}

#websiteName {
    text-align: left;
}

#socialMedia {
    float: right;
}

.topBar {
    background: #fff;
}
</style>
