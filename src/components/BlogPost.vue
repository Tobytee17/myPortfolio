<template>
  <div class="blogPost">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12" v-for="article in articles" v-if="article.link == $route.params.articleID">
        <div class="well">
          <div class="page-header">
            <h1 v-text="article.title"></h1><small v-text="article.date"></small>
          </div>
          <br>
          <p v-text="article.contentBlock1"></p>
          <br v-if="article.contentBlock1 != null">
          <br v-if="article.contentBlock1 != null">

          <p v-text="article.contentBlock2"></p>
          <br v-if="article.contentBlock2 != null">
          <br v-if="article.contentBlock2 != null">

          <p v-text="article.contentBlock3"></p>
          <br v-if="article.contentBlock3 != null">
          <br v-if="article.contentBlock3 != null">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogPost',
  data () {
    return {
        articles: [
          {title: "TestPost1", date: "10/07/2017", summary: "Here is the content of this article, I am trying to make it a little bit longer so that it can look like a real post", contentBlock1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae auctor ex. In vehicula commodo risus, mattis feugiat dolor eleifend id. Donec non ante et lectus accumsan dapibus et non dui. Donec suscipit condimentum nunc, vitae sagittis sapien tincidunt sed. Nulla vestibulum lectus et vulputate facilisis. Aenean tincidunt maximus urna et finibus. Nullam pharetra ullamcorper dui quis efficitur. Sed ultrices nisl sed ligula feugiat, sit amet condimentum dui laoreet. Nam pretium rutrum eros id aliquam. Quisque ut arcu tincidunt, volutpat erat sed, condimentum dui. Curabitur ornare ipsum ac convallis convallis. Suspendisse consectetur nisi sit amet lacinia malesuada. Pellentesque quis felis nec erat posuere ultrices. Phasellus felis nisi, malesuada ut consequat ac, volutpat at leo. Suspendisse sed molestie est. Proin eget tincidunt justo.", link: "1"},
          {title: "TestPost2", date: "10/07/2017", summary: "Here is the content of this article, I am trying to make it a little bit longer so that it can look like a real post", contentBlock1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae auctor ex. In vehicula commodo risus, mattis feugiat dolor eleifend id. Donec non ante et lectus accumsan dapibus et non dui. Donec suscipit condimentum nunc, vitae sagittis sapien tincidunt sed. Nulla vestibulum lectus et vulputate facilisis. Aenean tincidunt maximus urna et finibus. Nullam pharetra ullamcorper dui quis efficitur. Sed ultrices nisl sed ligula feugiat, sit amet condimentum dui laoreet. Nam pretium rutrum eros id aliquam. Quisque ut arcu tincidunt, volutpat erat sed, condimentum dui. Curabitur ornare ipsum ac convallis convallis. Suspendisse consectetur nisi sit amet lacinia malesuada. Pellentesque quis felis nec erat posuere ultrices. Phasellus felis nisi, malesuada ut consequat ac, volutpat at leo. Suspendisse sed molestie est. Proin eget tincidunt justo.", contentBlock2: "Morbi lacinia neque a sapien efficitur efficitur. Phasellus tincidunt ultricies metus, nec porttitor ligula. Cras viverra odio feugiat, tempor justo vel, porta tellus. Donec pretium faucibus ante, ut tincidunt tellus porttitor in. Donec ac ultrices nisi, ornare fermentum tortor. Sed diam libero, ultrices ac sapien vitae, fermentum facilisis metus. Nunc ut gravida dui, sit amet commodo nisi. Ut iaculis bibendum orci non tempor. Curabitur convallis, diam vel dignissim lobortis, urna massa egestas odio, ac scelerisque ex mi vitae velit. Duis rutrum, orci vitae bibendum elementum, ipsum ex blandit risus, nec facilisis ligula tellus vel enim. Sed eu lacus nec nisi dapibus ultrices. Donec commodo diam vitae nisl efficitur scelerisque. Curabitur placerat interdum tincidunt.", link: "2"},
          {title: "TestPost3", date: "10/07/2017", summary: "Here is the content of this article, I am trying to make it a little bit longer so that it can look like a real post", contentBlock1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae auctor ex. In vehicula commodo risus, mattis feugiat dolor eleifend id. Donec non ante et lectus accumsan dapibus et non dui. Donec suscipit condimentum nunc, vitae sagittis sapien tincidunt sed. Nulla vestibulum lectus et vulputate facilisis. Aenean tincidunt maximus urna et finibus. Nullam pharetra ullamcorper dui quis efficitur. Sed ultrices nisl sed ligula feugiat, sit amet condimentum dui laoreet. Nam pretium rutrum eros id aliquam. Quisque ut arcu tincidunt, volutpat erat sed, condimentum dui. Curabitur ornare ipsum ac convallis convallis. Suspendisse consectetur nisi sit amet lacinia malesuada. Pellentesque quis felis nec erat posuere ultrices. Phasellus felis nisi, malesuada ut consequat ac, volutpat at leo. Suspendisse sed molestie est. Proin eget tincidunt justo.", contentBlock2: "Morbi lacinia neque a sapien efficitur efficitur. Phasellus tincidunt ultricies metus, nec porttitor ligula. Cras viverra odio feugiat, tempor justo vel, porta tellus. Donec pretium faucibus ante, ut tincidunt tellus porttitor in. Donec ac ultrices nisi, ornare fermentum tortor. Sed diam libero, ultrices ac sapien vitae, fermentum facilisis metus. Nunc ut gravida dui, sit amet commodo nisi. Ut iaculis bibendum orci non tempor. Curabitur convallis, diam vel dignissim lobortis, urna massa egestas odio, ac scelerisque ex mi vitae velit. Duis rutrum, orci vitae bibendum elementum, ipsum ex blandit risus, nec facilisis ligula tellus vel enim. Sed eu lacus nec nisi dapibus ultrices. Donec commodo diam vitae nisl efficitur scelerisque. Curabitur placerat interdum tincidunt.", contentBlock3: "Mauris mattis sit amet mauris nec dictum. Mauris ultrices vestibulum dictum. Ut in purus eget enim pharetra blandit. Maecenas a magna in tortor eleifend volutpat. Praesent hendrerit sagittis porttitor. Donec ac justo ultrices, blandit elit ac, faucibus felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non nisi quam.", link: "3"},
        ]
    }
  },
  methods: {
    
  },
  computed: {

  },
}
</script>

<style scoped>
h1 {
  color:#e74c3c;
}

p {
    margin: 0% 10% 0% 10%;
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
</style>
