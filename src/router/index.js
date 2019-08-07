import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
// import "@/assets/style/reset.css"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
