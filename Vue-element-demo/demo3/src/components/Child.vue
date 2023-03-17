<template>
    <div>
      <h2>Child</h2>
      <Parent />
      1
    </div>
  </template>
  
  <script>
  import Parent from './part.vue';
  
  export default {
    name: 'ChildVue',
    components: {
      Parent,
    },
  };
  </script>
  