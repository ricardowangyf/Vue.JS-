<template>
  <div class="hello">
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <hr />
    <div>
      <p>Reversed message: "{{ reversedMexssage() }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "Hello",
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    reversedMexssage () {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>