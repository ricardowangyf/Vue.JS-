<template>
  <div>
    <my-child-component @childEvent="handleChildEvent"></my-child-component>
  </div>
</template>
  
  <script>
import MyChildComponent from "../components/MyChildComponent.vue";

export default {
  name: "ItemIndex",
  components: {
    MyChildComponent,
  },
  methods: {
    handleChildEvent(payload) {
      console.log("子组件触发了 childEvent 事件，参数为：", payload);
    },
  },
};
</script>
  