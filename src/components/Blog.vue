<template>
  <div class="blog">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12" v-for="post in posts">
        <div class="well">
          <div class="page-header">
            <h1>
              <router-link :to="post.link" v-text="post.title"></router-link>
            </h1>
            <small v-text="post.date"></small>
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
  data() {
    return {
      posts: [
        { title: "Learning by Doing: This Website", date: "11/07/2017", summary: "When it comes to learning how to code, there are many different approaches that can be taken. For me, the method that has taught me the most has been learning through doing.", link: "/blog/learningByDoing" },
      ]
    }
  },
}
</script>

<style scoped>
.page-header {
  text-align: left;
  margin: 0px 0px 0px 30px;
}

small {
  font-style: italic;
}

.well {
  border-radius: 15px;
  margin: 2% 10% 2% 10%;
}

a {
  text-decoration: none;
  color: #0a5573;
}

a:hover {
  color: #2bb2c0;
}

.blog {
  background: #E8EACD;
}
</style>
