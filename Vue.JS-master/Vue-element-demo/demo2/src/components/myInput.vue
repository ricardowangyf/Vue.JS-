<!-- MyInput.vue 自定义组件 -->
<template>
  <input :value="value" @input="$emit('input', $event.target.value)" />
</template>
  
  <script>
export default {
  name: "ItemIndex",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>
  