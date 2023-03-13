<template>
  <div>
    <h2>Welcome to MyComponent!</h2>
    <slot> Default content goes here... </slot>
  </div>
</template>

  
  <script>
export default {
  name: "MyComponent",
  data() {
    return {
      title: "Hello World",
      message: "This is my first Vue.js component!",
    };
  },
};
</script>
  
  <style>
h1 {
  color: blue;
}
</style>
  