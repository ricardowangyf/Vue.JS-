<template>
  <div>
    <div>
      <p v-if="isTrue">这个段落只会在isTrue为true时显示。</p>
    </div>
    <hr />
    <div>
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else-if="type === 'C'">C</div>
      <div v-else>Not A/B/C</div>
    </div>
    <hr />
    <div>
      <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username" />
      </template>
      <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address" />
      </template>
      <button @click="toggleLoginType">{{ buttonLabel }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConDition",
  data() {
    return {
      isTrue: true,
      type: "A",
      loginType: "",
    };
  },
  methods: {
    toggleLoginType() {
      this.loginType = this.loginType === "username" ? "email" : "username";
    },
  },
  computed: {
    buttonLabel() {
      return this.loginType === "username"
        ? "Switch to Email"
        : "Switch to Username";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>