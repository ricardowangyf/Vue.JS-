<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
  
  <script>
export default {
  name: "ItemIndex",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
  