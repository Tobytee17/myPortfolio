<template>
  <div class="headings">
    <img class="img-responsive" src='../assets/logo.png'></img>
    <div class="row">
        <div class="col-sm-3 col-md-3 col-lg-3" v-for="page in pages">
          <h3><router-link :to="page.link" v-text="page.title"></router-link></h3>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3">
          <h3><a href="./static/CV_2017.pdf" target="_blank">CV</a></h3>
        </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'headings',
  data() {
    return {
      pages: [
        {title: "Home", link: "/" },
        {title: "Projects", link: "/projects" },
        {title: "Blog", link: "/blog" }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (max-width : 767px) {
  .well {
    height:50px;
    padding:0px;
    margin: 10px;
  }
  h3 {
    padding:0xp;
    margin-top:15px;
  }
}

hr {
  padding:0px;
  margin:0px 0px 20px 0px;
}

a {
  text-decoration: none;
}

h3 {
  padding-bottom: 20px;
}

.img-responsive {
  display:inline-block;
  margin: 100px 0px 100px 0px;
}

.row {
  margin: 0% 5% 0% 5%;
}
</style>
