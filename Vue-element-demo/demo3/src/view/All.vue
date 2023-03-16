<template>
  <div>
    <Child />
    <part />
    <Comment />
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
  