<template>
  <div>
    <div>
      <h1>User HelloWorld</h1>
      <NavBar />
      <router-view />
      <router-view name="helper" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
}
</script>

<style>
</style>