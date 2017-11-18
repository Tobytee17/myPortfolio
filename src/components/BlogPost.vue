<template>
  <div class="blogPost">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12" v-for="article in articles" v-if="article.link == $route.params.articleID">
        <div class="well">
          <div class="page-header">
            <h1 v-text="article.title"></h1>
            <small v-text="article.date"></small>
          </div>
          <br>
          <p v-text="content" v-for="content in article.content">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogPost',
  data() {
    return {
      articles: [
        {
          title: "Learning by Doing: This Website", date: "11/07/2017", summary: "When it comes to learning how to code, there are many different approaches that can be taken. For me, the method that has taught me the most has been learning through doing.", link: "learningByDoing",
          content: ["When I began learning to code, I had a very different learning approach to what I now have. In the beginning, I was very scared of creating projects for fear of being looked down upon for my creations being inferior and insignificant. As a result of this, my approach to learning to code often focused on spending countless hours reading through textbooks and over language documentation, trying to memorise sets of functions, and reading theoretical solutions to theoretical problems. The pitfall I fell into by doing this however, is that not only was it demotivating (It was very hard to visualise my progress), but in my head, I could never come to a point where I felt confident in what I knew, and that I should create any projects, as there was always more to learn.", "Don’t get me wrong though, textbooks and documentation have their place, and without them, I would never have been able to create the website you are reading this blog on. Jon Duckett’s ‘JavaScript and JQuery’ and the Vue.JS documentation helped me tremendously in the creating of this website, as they provided me with a foundational knowledge of how JavaScript and the Vue.JS framework works.", "Since becoming somewhat self-aware of the issues and pitfalls that this approach to learning has, I have turned my focus towards trying to apply my acquired knowledge by creating projects centred around specific topics that I am learning at the time. My three main solo projects that I have developed all fit this approach. I created my CurrencyConverter website as a way to apply the knowledge of APIs that I had gained from Jon Duckett’s ‘JavaScript and JQuery’. My ToDoList application was created so that I could practise DOM Manipulation using solely JQuery. Lastly, this website was created so that I could get my feet wet with creating basic single-page website using the Vue.JS framework.", "To end off this first blog post, I would like to acknowledge that this blog entry has little technical detail to it (which might be unexpected for a development blog). But this is mainly due to it being my first post, and it should be noted that I will try to cover more technical, development focused topics in future posts.", " - Toby T."]
        },
      ],
    }
  },
}
</script>

<style scoped>
h1 {
  color: #0a5573;
}

p {
  margin: 0% 20% 2% 20%;
}

small {
  font-style: italic;
}

.page-header {
  text-align: center;
  margin: 0% 20% 0% 20%;
}

.well {
  margin: 20px 10% 20px 10%;
  border-radius: 15px;
}

.blogPost {
  background: #E8EACD;
}
</style>
