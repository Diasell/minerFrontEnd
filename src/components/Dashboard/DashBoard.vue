<template>
  <div id="dashboard-wrapper">
    <dashboard-header :name="firstName" :avatar="photo"></dashboard-header>
    <div id="dashboard-sidebar">SIDEBAR COMPONENT</div>
    <div id="dashboard-content">CONTENT COMPONENT</div>
  </div>
</template>

<script>
import Header from './Header.vue'
import BACKEND from '../../http-common'
export default {
  name: 'DashBoard',
  components: {
    'dashboard-header': Header
  },
  data () {
    return {
      'firstName': '',
      'photo': '',
      'pools': [],
      'errors': []
    }
  },
  created () {
    BACKEND.defaults.headers.common['Authorization'] = window.localStorage.getItem('accessToken')
    this.init()
  },
  methods: {
    init: function () {
      this.loadData()
    },
    loadData: function () {
      BACKEND.get('onlogin/')
        .then(response => {
          this.firstName = response.data.data.first_name
          this.photo = BACKEND.media + response.data.data.avatar
          this.pools = response.data.data.pools
        })
        .catch(e => {
          if (e.response === undefined) {
            this.errors.push('Server seems to be down. Please try again later')
          } else {
            this.errors.push(e.response.data.messages)
          }
        })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
