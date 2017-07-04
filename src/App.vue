<template>
  <div id="app">
    <headings></headings>
    <!--<projects></projects>-->
    <home></home>
  </div>
</template>

<script>
import Projects from './components/Projects.vue'
import Headings from './components/Headings.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Headings,
    Projects,
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  font-family: 'Oswald', sans-serif;
}
body {
  padding:20px;

}
</style>
