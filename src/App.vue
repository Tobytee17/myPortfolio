<template>
  <div id="app">
    <headings></headings>
      <router-view></router-view>
  </div>
</template>

<script>
import Headings from './components/Headings.vue'



export default {
  name: 'app',
  components: {
    Headings,
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
