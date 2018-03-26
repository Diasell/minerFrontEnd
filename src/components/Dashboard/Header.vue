<template>
<div>
  <slot>
    <div id="header-wrapper">
        <div id="header-logo">
            <h1>TheMinerAssistant</h1>
        </div>
    </div>
  </slot>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      'test': true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header-wrapper {
    position: relative;
    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    top: 0;
    left: 0;
    height: 50px;
}

#header-logo {
    left: 0px;
    color: #ece9e6;
}
</style>
