<template>
  <div>
    <div>
      <input v-model.lazy="msg" />
    </div>
    <hr />
    <div>
      <input v-model.number="age" type="number" />
    </div>
    <hr />
    <div>
      <input v-model.trim="aamsg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "XiuShi",
  data() {
    return {
      msg: "123",
      age: "123",
      aamsg: "123",
    };
  },
};
</script>

<style >
</style>