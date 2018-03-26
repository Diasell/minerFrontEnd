// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import loading from '@/components/loading'

Vue.config.productionTip = false

/* eslint-disable no-new */
const mainapp = new Vue({
  el: '#app',
  router,
  components: {loading},
  template: '<div id="app"> <router-view/> <loading v-if="$root.loading"></loading> </div>',
  data: {loading: false}
})

router.beforeEach((to, from, next) => {
  mainapp.loading = true
  checkLogin(to, from, next)
})

router.afterEach((to, from, next) => {
  mainapp.loading = false
  // setTimeout(() => { mainapp.loading = false }, 1500)
})

function checkLogin (to, from, next) {
  if (window.localStorage.getItem('accessToken')) {
    next()
  } else {
    next('/')
  }
}
