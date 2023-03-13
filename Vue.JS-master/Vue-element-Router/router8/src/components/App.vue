<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <router-link to="/index">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/friend">朋友圈</router-link>
      <IndexApp />
    </div>
  </div>
</template>

<script>
import IndexApp from "./index.vue";
export default {
  name: "App",
  components: {
    IndexApp,
  },
};
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
