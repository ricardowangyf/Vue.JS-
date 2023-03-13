<!-- 父组件 -->
<template>
  <div>
    <my-input v-model="message"></my-input>
    <p>{{ message }}</p>
  </div>
</template>
  
  <script>
import MyInput from "../components/myInput.vue";

export default {
  name: "ItemIndex",
  components: {
    MyInput,
  },
  data() {
    return {
      message: "",
    };
  },
};
</script>
  