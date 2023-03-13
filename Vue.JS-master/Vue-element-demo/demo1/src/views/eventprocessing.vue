<template>
  <div>
    <!-- 事件处理 -->
    <div>
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
      <!-- v-on 指令监听 DOM 事件，并在触发时运行一些JS代码 -->
    </div>
    <hr />
    <div>
      <div>
        <button v-on:click="greet">Greet</button>
        <!-- 事件处理方法 -->
      </div>
    </div>
    <hr />
    <div>
      <button v-on:click="say('hi')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>
      <!-- 内联处理器中的方法 -->
    </div>
    <hr />
    <div>
      <button v-on:click="warn('Form cannot be submitted yet.', $event)">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemIndex",
  data() {
    return {
      counter: 0,
      name: "Vue.js", //事件处理方法
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
    warn(message, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>