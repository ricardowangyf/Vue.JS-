<template>
  <div>
    <h1>Async Component Demo</h1>
    <button @click="loadComponent">Load Async Component</button>
    <async-component v-if="showComponent" />
  </div>
</template>


<script>

import Vue from 'vue';

export default {
  name: "ItemIndex",

  data() {
    return {
      showComponent: false,
    };
  },
  methods: {
    loadComponent() {
      import("../components/AsyncComponent.vue").then((module) => {
        const AsyncComponent = module.default;
        Vue.component("async-component", AsyncComponent);
        this.showComponent = true;
      });
    },
  },
};
</script>
<style>
</style>