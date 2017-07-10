<template>
  <div id="app">
    <headings></headings>
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
  padding:0px;
}
body {
  background: #c0392b;
  padding: 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
