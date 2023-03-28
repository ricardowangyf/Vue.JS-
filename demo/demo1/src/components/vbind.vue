<template>
  <div>
    <div
      class="static"
      v-bind:class="{ active: isActive, 'text-danger': hasError }"
    >
      xxx
    </div>
    <hr />
    <div>
      <div v-bind:class="classObject">aa</div>
    </div>
    <hr />
    <div>
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
        asdas
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VbindApp",
  data() {
    return {
      isActive: true,
      hasError: false,

      classObject: {
        active: true,
        "text-danger": false,
      },

      activeColor: "red",
      fontSize: 30,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>