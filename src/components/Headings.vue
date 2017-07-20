<template>
  <div class="headings">
    <h1 id="firstName">Toby </h1>
    <h1 id="lastName">Tee</h1>
    <div class="row">
      <div class="col-sm-3 col-md-3 col-lg-3" v-for="page in pages">
        <h3>
          <router-link :to="page.link" v-text="page.title"></router-link>
        </h3>
      </div>
      <div class="col-sm-3 col-md-3 col-lg-3">
        <h3>
          <a href="../static/CV_2017.pdf" target="_blank">CV</a>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headings',
  data() {
    return {
      pages: [
        { title: "Home", link: "/" },
        { title: "Projects", link: "/projects" },
        { title: "Blog", link: "/blog" }
      ]
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

a {
  text-decoration: none;
  color: #ecf0f1;
}

a:hover {
  color: #bdc3c7;
}

h3 {
  padding-bottom: 20px;
}

.img-responsive {
  display: inline-block;
  margin: 100px 0px 100px 0px;
}

.row {
  margin: 0% 5% 0% 5%;
}

#firstName {
  font-size: 150px;
  margin: 10% 0% 10% 0%;
  color: #ecf0f1;
  display: inline-block;
}

#lastName {
  color: #e74c3c;
  font-size: 150px;
  margin: 10% 0% 10% 0%;
  display: inline-block;
}

.headings {
  background: #0a5573;
}
</style>
