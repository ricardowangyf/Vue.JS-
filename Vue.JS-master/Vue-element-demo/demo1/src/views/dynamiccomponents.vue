<template>
  <div>
    <button @click="toggleComponent">切换组件</button>
    <component :is="currentComponent"></component>
  </div>
</template>
  
  <script>
import ComponentA from "../components/ComponentA.vue";
import ComponentB from "../components/ComponentB.vue";

export default {
  name: "ItemIndex",
  data() {
    return {
      currentComponent: ComponentA,
    };
  },
  methods: {
    toggleComponent() {
      if (this.currentComponent === ComponentA) {
        this.currentComponent = ComponentB;
      } else {
        this.currentComponent = ComponentA;
      }
    },
  },
  components: {
    ComponentA,
    ComponentB,
  },
};
</script>
  