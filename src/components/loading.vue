<template>
  <div class="loading-wrapper">
    <div class="container">
      <div class="banner">LOADING</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans);

  /*
  Light Blue 007db7
  Blue 170073
  Blue 162cff
  Pink ff1684
  Saumon f85a5a
  Yellow ebfc5c
  Yellow dcfa51
  */

  .loading-wrapper
  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: 'Open Sans';
    color: #EB8C79;
    background-color: #18506F;
    z-index: 999;
  }

  .container
  {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .banner
  {
    position: relative;
    padding: 10px 20px;
    animation: loader 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;
  }

  @keyframes loader
  {
    0%
    {
      letter-spacing: -1px;
    }
    100%
    {
      letter-spacing: 15px;
    }
  }

  .banner::before
  {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    transform: skewX(-15deg);
    background-color: #eee;
  }
</style>
