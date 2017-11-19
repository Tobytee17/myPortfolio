// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import BlogPost from './components/BlogPost'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', components: {Header: Home, MainView: Header}},
    {path:'/projects', components: {Header: Header, MainView: Projects}},
    {path:'/aboutMe', components: {Header: Header, MainView: AboutMe}},
    {path:'/blog/:articleID', component: BlogPost}
  ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app');
