<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>
  
  <script>
export default {
  name: "ItemIndex",
  data() {
    return {
      title: "",
      content: "",
    };
  },
  mounted() {
    // 模拟异步请求获取数据
    setTimeout(() => {
      this.title = "异步组件";
      this.content = "这是一个异步组件示例";
    }, 2000);
  },
};
</script>
  