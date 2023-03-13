<template>
  <div>
    <my-component>
      <p>This is custom content!</p>
    </my-component>
  </div>
</template>
<script>
import MyComponent from "../components/child.vue";
export default {
  name: "ItemIndex",
  components: {
    "my-component": MyComponent,
  },
};
</script>  