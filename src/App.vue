<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view name="TopBar"></router-view>
    </transition>
    
    <transition name="fade" mode="out-in">
      <router-view name="Header"></router-view>
    </transition>

    <transition name="fade" mode="out-in">
      <router-view name="MainView"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Abel', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  overflow: hidden;
  padding: 0px;
}

body {
  background: #fff;
  padding: 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
