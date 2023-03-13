<template>
  <div>
    <my-component :message="message"></my-component>
  </div>
</template>
  
  <script>
import MyComponent from "../components/MyComponent.vue";

export default {
  name: "ItemIndex",
  data() {
    return {
      message: "Hello world",
    };
  },
  components: {
    MyComponent,
  },
};
</script>
  