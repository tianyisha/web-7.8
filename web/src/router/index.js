import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
