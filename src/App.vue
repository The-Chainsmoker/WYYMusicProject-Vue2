<template>
  <div id="app">
    <div class="home">
      <keep-alive exclude="MvDetail">
      <router-view></router-view>
    </keep-alive>
    </div>
    <btn-nav-bar class="btn"></btn-nav-bar>
  </div>
</template>

<script>
import BtnNavBar from './components/common/nav/btn-nav-bar.vue'
export default {
  name: 'app',
  components: {
    BtnNavBar
  }
}
</script>

<style>
#app{
  overflow-x: hidden;
  overflow-y: hidden;
}
.home{
  width: 100%;
  height: 100%;
  position: relative;
}
#app .btn{
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
