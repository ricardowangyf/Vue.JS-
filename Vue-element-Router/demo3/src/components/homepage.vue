<template>
    <div>
      <h2>User Detail</h2>
      <p>ID: {{ id }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name:'HomePage',
    props: {
      id: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  