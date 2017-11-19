<template>
  <div class="aboutMe">
    
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      pages: [
        { title: "Home", link: "/" },
        { title: "Projects", link: "/projects" },
        { title: "About Me", link: "/aboutMe" },
      ]
    }
  },
}
</script>

<style scoped>
#navLines {
  width: 50%;
  margin: 0% 25% 0% 25%;
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

.aboutMe {
  background: #fff;
}

#NavButtons {
  font-size: 35px;
}

.row {
  margin: 5% 5% 5% 5%;
}

</style>
