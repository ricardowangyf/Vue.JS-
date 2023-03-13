<template>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
    data() {
      return {
        title: 'Hello World',
        message: 'This is my first Vue.js component!'
      }
    }
  }
  </script>
  
  <style>
  h1 {
    color: blue;
  }
  </style>
  