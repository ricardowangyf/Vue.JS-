<template>
  <div>
    <my-component :slotName="dynamicSlotName">
      <template v-slot:[dynamicSlotName]>
        <!-- 插槽内容 -->
        <h1>标题</h1>
      </template>
    </my-component>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      dynamicSlotName: "header",
    };
  },
};
</script>
  