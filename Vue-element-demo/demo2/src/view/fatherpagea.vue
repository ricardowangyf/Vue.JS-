<template>
  <div>
    <div>
      <button @click="currentComponent = 'HomeComponent'">Home</button>
      <button @click="currentComponent = 'AboutComponent'">About</button>
    </div>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>
  
  <script>
import HomeComponent from "../components/HomeComponenta.vue";
import AboutComponent from "../components/AboutComponenta.vue";

export default {
  name: "ItemIndex",
  components: {
    HomeComponent,
    AboutComponent,
  },
  data() {
    return {
      currentComponent: "HomeComponent",
    };
  },
};
</script>
  