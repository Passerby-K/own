import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import FindNav from '@/pages/find/find'
import City from '@/pages/city/city'
import Post from '@/pages/post/post'
import Activity from '@/pages/activity/activity'
import Course from '@/pages/course/course'
import Matter from '@/pages/course/course'
import Login from '@/pages/login/login'
import Register from '@/pages/register/register'
// import "@/assets/style/reset.css"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/findNav',//发现
      name: 'FindNav',
      component: FindNav
    },
    {
      path: '/city',//城市
      name: 'City',
      component: City
    },
    {
      path: '/post',//职位
      name: 'Post',
      component: Post
    },
    {
      path: '/activity',//活动
      name: 'Activity',
      component: Activity
    },
    {
      path: '/course',//课程
      name: 'Course',
      component: Course
    },
    {
      path: '/matter',//正版素材
      name: 'Matter',
      component: Matter
    },
    {
      path: '/login',//登陆
      name: 'Login',
      component: Login
    },
    {
      path: '/register',//注册
      name: 'Register',
      component: Register
    },
  ]
})
