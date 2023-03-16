<template>
  <div>
    <h1>Click the button to trigger an event</h1>
    <button @click="triggerEvent">Trigger Event</button>
  </div>
</template>


<script>
export default {
  name: "ItemIndfex",
  mounted() {
    this.$on("my-event", this.handleEvent);
  },
  methods: {
    triggerEvent() {
      this.$emit("my-event", "Hello, World!");
    },
    handleEvent(data) {
      console.log(data);
    },
  },
};
</script>
<style>
</style>