<template>
  <div>
    <button @click="handleClick">点击我触发 childEvent 事件</button>
  </div>
</template>
  
  <script>
export default {
  name: "ItemIndex",
  methods: {
    handleClick() {
      this.$emit("childEvent", { foo: "bar" });
    },
  },
};
</script>
  