<template>
  <div>
    <div>
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    <hr />
    <div>
      <button v-on:click="greet">Greet</button>
    </div>
    <hr />
    <div id="example-3">
      <button v-on:click="say('hi')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>
    </div>
    <div>
      <a v-on:click.stop="doThis">a</a><!-- 阻止单击事件继续传播 -->
      <form v-on:submit.prevent="onSubmit">x</form><!-- 提交事件不再重载页面 -->
      <form v-on:submit.prevent></form><!-- 只有修饰符 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "procEssing",
  data() {
    return {
      counter: 0,
      name: "Vue.js",
    };
  },
  methods: {
    greet(event) {
      // `this` 在方法里指向当前 Vue 实例
      alert("Hello " + this.name + "!");
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName);
      }
    },
    say(message) {
      alert(message);
    },
  },
};
</script>

<style >
</style>