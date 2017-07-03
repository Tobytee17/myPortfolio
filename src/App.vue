<template>
  <div id="app">
    <projects></projects>
  </div>
</template>

<script>
import Projects from './components/Projects'

export default {
  name: 'app',
  components: {
    Projects
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
  overflow-x: hidden;
}
body {
  padding:20px;
  font-family: 'Montserrat', sans-serif;
}
</style>
