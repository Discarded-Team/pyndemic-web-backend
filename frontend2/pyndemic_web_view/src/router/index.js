import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RegisterPage from '@/components/RegisterPage'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})
