<!-- ChildComponent.vue -->
<template>
  <div>{{ foo }} {{ bar }}</div>
</template>
  
  <script>
export default {
  props: {
    foo: {
      type: String,
      default: "",
    },
    BAR: {
      type: String,
      default: "",
    },
  },
};
</script>