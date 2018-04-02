<template>
  <div class="login-wrapper">
    <div class="panel-lite">
      <div class="thumbur">
        <div class="icon-lock"></div>
      </div>
      <h4>Login</h4>
      <div class="form-group">
        <input class="form-control" required="required" v-model="username"/>
        <label class="form-label">Username    </label>
      </div>
      <div class="form-group">
        <input class="form-control" type="password" required="required" v-model="password" v-on:keyup.enter="login"/>
        <label class="form-label">Password</label>
      </div>
      <div class="error-message">
        <span class="error-text">{{message}}</span>
      </div>
      <button class="floating-btn" type="submit" @click="login()"><i class="icon-arrow"></i></button>
    </div>
  </div>
</template>

<script>
import BACKEND from '../../http-common'
export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    login () {
      console.log(this.username, this.password)
      BACKEND.post('login/', {
        username: this.username,
        password: this.password
      }).then(res => {
        let token = res.data.data.Authorization
        BACKEND.defaults.headers.common['Authorization'] = token
        window.localStorage.setItem('accessToken', token)
        this.$router.push('main')
      }).catch(e => {
        this.username = ''
        this.password = ''
        if (e.response === undefined) {
          this.message = 'Server seems to be down. Please try again later'
        } else {
          this.message = e.response.data.messages
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "loginPage.css";
</style>
