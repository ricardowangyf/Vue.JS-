<template>
 <div>
   <h3>主页内容</h3>
   <p>
     <router-link to='/index/register'>注册</router-link> 
     <router-link to='/index/login'>登录</router-link>
     <router-view/>
     </p>
  </div>
</template>

<script>
export default {
  name: "RegiSter",
};
</script>

<style>
</style>