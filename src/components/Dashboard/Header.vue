<template>
<div>
  <slot>
    <div id="header-wrapper">
        <div id="header-logo">
            <p>TheMinerAssistant</p>
        </div>
        <div id="header-welcome">
          <p>Welcome, {{firstname}}</p>
        </div>
        <div id="header-avatar">
          <img :src="avatar"/>
        </div>
    </div>
  </slot>
</div>
</template>

<script>
import logo from '../../assets/logo.png'
export default {
  name: 'Header',
  data () {
    return {
      'firstname': 'Taras',
      'avatar': logo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header-wrapper {
    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    top: 0;
    left: 0;
    height: 60px;
    text-align: right;
}

#header-logo {
  position: absolute;
  left: 0px;
  width: 30%;
  height: 60px;
  display: inline-block;
  line-height: 60px;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  color: #ece9e6;
}

#header-logo p {
  font-size: 2.5vw;
  margin: 0;
}

#header-welcome {
  position: relative;
  right: 60px;
  display: inline-block;
  margin: 0;
  width: 15%;
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
  color: #ece9e6;
  text-align: center
}

#header-welcome p {
  font-size: 1.4vw;
  margin: 0;
}

#header-avatar {
  position: absolute;
  right: 5px;
  display: inline-block;
  margin: 0;
  width: 50px;
  height: 60px;
}

#header-avatar img {
  padding-top: 5px;
  width: 50px;
  height: 50x;
}
</style>
