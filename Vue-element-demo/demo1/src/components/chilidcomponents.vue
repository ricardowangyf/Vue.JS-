<template>
  <div>
    <div>这是一个自定义组件</div>
  </div>
</template>

<script>
export default {
    name:'ItemIndex',
  props: {
    // 验证类型
    propA: Number,
    // 验证必要性
    propB: {
      type: String,
      required: true,
    },
    // 验证类型和默认值
    propC: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>