<template>
  <div id="dashboard-wrapper">
    <dashboard-header></dashboard-header>
    <div id="dashboard-sidebar">SIDEBAR COMPONENT</div>
    <div id="dashboard-content">CONTENT COMPONENT</div>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'DashBoard',
  components: {
    'dashboard-header': Header
  },
  data () {
    return {
      'isLogged': false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
