<template>
  <div>
    <div>
      {{ message }}
    </div>
    <div id="app-2">
      <span v-bind:title="bbb">
        鼠标悬停几秒钟查看此处动态绑定的提示信息!
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "aaaaaa",
      bbb: "页面加载于 " + new Date().toLocaleString(),
    };
  },
};
</script>

<style></style>