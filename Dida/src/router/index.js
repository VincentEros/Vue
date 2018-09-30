import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import mainpage from '@/pages/mainpage/mainpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: mainpage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
