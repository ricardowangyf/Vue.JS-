<template>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AsyncComponent',
    data() {
      return {
        title: '',
        content: '',
      };
    },
    mounted() {
      // 模拟异步加载数据
      setTimeout(() => {
        this.title = '异步加载的标题';
        this.content = '这是异步加载的内容';
      }, 2000);
    },
  };
  </script>
  