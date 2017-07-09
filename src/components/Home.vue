<template>
  <div class="home">
    <div class="row container-fluid">
        <div class="col-lg-12" v-for="title in about">
            <div class="page-header">
                <h1 v-text="title.title"></h1>
                <hr>
                <p v-text="title.content"></p>
            </div>
        </div>
    </div>
    <div class ="row container-fluid">
        <div class="page-header">
            <h1 v-text="contactMe"></h1>
        </div>
        <div class="col-lg-3" v-for="platform in socialMedia">
            <a v-bind:href="platform.link" v-bind:target="platform.target"><i v-bind:class="platform.source"></i></a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
        about:
        [
            {title: "About Me", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae efficitur dolor. Morbi sollicitudin mollis eros at cursus. Pellentesque risus nisi, aliquet eu mollis ut, posuere eu dolor. Duis pretium velit at convallis iaculis. Donec interdum diam id maximus tempus. Nulla sed sapien a neque convallis volutpat. Ut sit amet accumsan diam, vel mattis magna. Duis ac tellus quis erat pharetra blandit molestie nec odio. Nunc vulputate vulputate mi. Nulla turpis nunc, dignissim et sem at, malesuada cursus leo. Sed interdum tellus sit amet eleifend aliquet. Aliquam in metus eu nulla tempor mattis. Vivamus dapibus, nulla eu aliquam euismod, nulla lacus lacinia lacus, id sollicitudin nisl justo id diam."},
        ],
        socialMedia:
        [
            {platform: "Twitter", source: "fa fa-twitter", link: "https://twitter.com/TobyTee17", target: "__blank" },
            {platform: "GitHub", source: "fa fa-github", link: "https://github.com/Tobytee17", target: "__blank"},
            {platform: "LinkedIn", source: "fa fa-linkedin", link: "https://www.linkedin.com/in/toby-tee-27aaa5108/", target: "__blank"},
            {platform: "Email", source: "fa fa-envelope-o", link: "mailto:tobytee17@gmail.com"},
        ],
        contactMe: "Get in touch with me"
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
h1 {
    padding-bottom: 0px;
}

i {
    font-size: 50px;
    padding-bottom: 50px;
}

i:hover {
    transform: scale(1.1);
}

.container-fluid {
    margin: 0% 10% 0% 10%;
}

.page-header {
    text-align: center;
}

</style>
