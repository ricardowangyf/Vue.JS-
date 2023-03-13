<template>
  <div>
    <div id="demo">{{ fullName }}</div>
  </div>
</template>

<script>
export default {
  name: "ItemIndex",
  data() {
    return {
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar",

      x: 'Foo',
    a: 'Bar'
    };
  },
  watch: {
    firstName(val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName(val) {
      this.fullName = this.firstName + " " + val;
    },
  },
  computed: {
    a() {
      return this.x + ' ' + this.a
    }
  }
};
</script>

<style >
</style>