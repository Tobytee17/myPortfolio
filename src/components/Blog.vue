<template>
  <div class="blog">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12" v-for="post in posts">
        <div class="well">
          <div class="page-header">
            <h1><router-link :to="post.link" v-text="post.title"></router-link></h1><small v-text="post.date"></small>
          </div>
          <p v-text="post.summary"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
        posts: [
          {title: "TestPost1", date: "10/07/2017", summary: "Here is the content of this article, I am trying to make it a little bit longer so that it can look like a real post", link: "/blog/1"},
          {title: "TestPost2", date: "10/07/2017", summary: "Here is the content of this article, I am trying to make it a little bit longer so that it can look like a real post", link: "/blog/2"},
          {title: "TestPost3", date: "10/07/2017", summary: "Here is the content of this article, I am trying to make it a little bit longer so that it can look like a real post", link: "/blog/3"}
        ]
    }
  },
  methods: {
    
  },
  computed: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.page-header {
  text-align: left;
  margin: 0px 0px 0px 0px;
}

small {
  font-style: italic;
}

.well {
  border-radius: 15px;
  margin: 20px 10% 20px 10%;
}

a {
  text-decoration: none;
  color:#e74c3c;
}

a:hover {
  color: #2bb2c0;
}
</style>
