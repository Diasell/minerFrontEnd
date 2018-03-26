import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/Dashboard/DashBoard'
import LoginPage from '@/components/LoginPage/LoginPage'
import NotFound from '@/components/Errors/NotFound/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/main',
      name: 'Main',
      component: DashBoard
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
