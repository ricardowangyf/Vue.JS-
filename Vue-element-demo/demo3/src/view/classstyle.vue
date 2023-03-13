<template>
  <div>
    <div
      class="static"
      v-bind:class="{ active: isActive, 'text-danger': hasError }"
    ></div>
    <hr />
    <div>
      <div v-bind:class="classObject"></div>
    </div>
    <hr />
    <div>
      <div v-bind:class="classObject"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemIndex",
  data() {
    return {
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        "text-danger": false,
      },
      //isActive: true,
      // error: null
    };
  },
  computed: {
    // classObject {
    //   return {
    //     active: this.isActive && !this.error,
    //     'text-danger': this.error && this.error.type === 'fatal'
    //   }
    // }
  },
};
</script>

<style lang="scss" scoped>
</style>