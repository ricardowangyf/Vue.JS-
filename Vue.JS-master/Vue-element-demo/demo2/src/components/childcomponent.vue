<!-- ChildComponent.vue -->
<template>
  <div>
    <slot :items="list"></slot>
  </div>
</template>
  
  <script>
export default {
  name: "ItemIndex",
  props: ["list"],
};
</script>
  