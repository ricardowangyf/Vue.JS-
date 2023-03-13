<template>
  <div>
    <li>
      <ul>
      <router-view></router-view>
      <router-link :to="{ name: '/Home' }">Home</router-link>
      </ul>
      <ul>
      <router-link :to="{ name: '/Login' }">Login</router-link>
      </ul>
      <ul>
      <router-link :to="{ name: '/Welcome' }">Welcome</router-link>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
<style>
li{
  list-style-type: none;
}

</style>