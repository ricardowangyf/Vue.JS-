<template>
    <div>
<!-- 在 HTML 中定义命名视图 -->
<div id="app">
  <router-view name="header"></router-view>
  <router-view></router-view>
  <router-view name="footer"></router-view>
</div>

    </div>
</template>

<script>
    export default {
       name:"FotterApp", 
    }
</script>

<style >

</style>