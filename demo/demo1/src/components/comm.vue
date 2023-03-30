<template>
    <div>
      <!-- 使用局部组件 my-local-component -->
      <my-local-component></my-local-component>
    </div>
  </template>
  
  <script>
  import MyLocalComponent from './MyLocalComponent.vue'
  
  export default {
    name:'XxxXxx',
    components: {
      'my-local-component': MyLocalComponent
    }
  }
  </script>
  