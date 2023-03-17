<template>
  <div>
    <Child />
    <!-- 123123 -->
    <hr />
    <part />
    <!-- 123123 -->
    <hr />
    <Comment />
    <!-- 123123 -->
    <hr />
  </div>
</template>
  
<script>
import Child from "../components/Child.vue";
import part from "../components/part.vue";
import Comment from "../components/Comment.vue";

export default {
  name: "AppVue",
  components: {
    Child,
    part,
    Comment,
  },
};
</script>
  