<template>
  <div>
    <div>
      <button @click="incrementCount">Increment</button>
      <button @click="decrementCount">Decrement</button>
      <p>Count: {{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItenIndex",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>