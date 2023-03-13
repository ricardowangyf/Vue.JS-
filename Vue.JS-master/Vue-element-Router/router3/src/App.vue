<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <ViewApp msg="Welcome to Your Vue.js App"/> -->
    <ViewApp></ViewApp>
  </div>
</template>

<script>
import ViewApp from './components/ViewApp.vue'

export default {
  name: 'App',
  components: {
    ViewApp
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
