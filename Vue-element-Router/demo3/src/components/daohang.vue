<template>
  <div>
    <button @click="navigateToHome">Go to Home Page</button>
    <button @click="navigateToAbout">Go to About Page</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "DoHang",
  methods: {
    navigateToHome() {
      this.$router.push({ path: "./about" });
    },
    navigateToAbout() {
      this.$router.push({ path: "/navigateToHome" });
    },
  },
};
</script>

<style>
</style>