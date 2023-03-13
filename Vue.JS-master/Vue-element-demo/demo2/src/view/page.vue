<template>
  <div>
    <div>
      <button @click="currentComponent = 'HomeComponent'">Home</button>
      <button @click="currentComponent = 'AboutComponent'">About</button>
      <button @click="currentComponent = 'ContactComponent'">Contact</button>
    </div>
    <component :is="currentComponent"></component>
  </div>
</template>
  
  <script>
import HomeComponent from "../components/HomeComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";

export default {
  name: "ItemIndex",
  components: {
    HomeComponent,
    AboutComponent,
    ContactComponent,
  },
  data() {
    return {
      currentComponent: "HomeComponent",
    };
  },
};
</script>
  