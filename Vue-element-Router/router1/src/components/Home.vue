<template>
  <div id="app">
    <!--可以定义不变的内容-->
    <h3>{{ title }}</h3>
    <!--可以定义不变的内容-->
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "",
    };
  },
};
</script>
