<template>
  <div>
    <User />
    <Post />
    <Comment />
  </div>
</template>
  
<script>
import User from "../components/Child.vue";
import Post from "../components/part.vue";
import Comment from "../components/Comment.vue";

export default {
  name: "AppVue",
  components: {
    User,
    Post,
    Comment,
  },
};
</script>
  