<template>
  <div>
    <div>
      <my-component></my-component>
      <my-component></my-component>
      <my-component></my-component>
    </div>
    <hr />

    <div>
      <child-component :message="parentMessage"></child-component>
    </div>
  </div>
</template>
  
  <script>
import MyComponent from "../components/child.vue";
import ChildComponent from "../components/blogpost.vue";

export default {
  name: "IntemIndex",
  data() {
    return {
      parentMessage: "Hello from parent component!",
    };
  },
  components: {
    "my-component": MyComponent,
    ChildComponent,
  },
};
</script>
  