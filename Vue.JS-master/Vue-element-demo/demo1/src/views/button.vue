<template>
  <div>
    <button @click="onClick()">点击触发自定义事件</button>
    <div><my-component @my-event="onMyEvent"></my-component></div>
  </div>
</template>

<script>
import MyComponent from "../components/MyComponent.vue";

export default {
  name: "ItemIndex",
  methods: {
    onClick() {
      this.$emit("my-event", "hello");
    },
    onMyEvent(data) {
      console.log("收到自定义事件，参数为：" + data);
    },
  },
  components: {
    "my-component": MyComponent,
  },
};
</script>

<style lang="scss" scoped>
</style>