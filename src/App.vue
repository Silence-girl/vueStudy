<template>
  <div id="app">
    <cqq-headerbar></cqq-headerbar>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <cqq-footerbar></cqq-footerbar>
  </div>
</template>

<script>
import footer from '@/components/footer.vue'
import header from '@/components/header.vue'

export default {
  name: 'app',
  components: {
    'cqq-footerbar': footer,
    'cqq-headerbar': header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
