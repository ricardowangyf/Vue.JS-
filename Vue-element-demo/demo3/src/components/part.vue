<template>
  <div>
    <h1>Parent</h1>
    3
    <Comment />
  </div>
</template>

<script>
import Comment from "./Comment.vue";

export default {
  name: "ParentVue",
  components: {
    Comment,
  },
};
</script>