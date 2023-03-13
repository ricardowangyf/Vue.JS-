<template>
  <div>
    <div >
      <!-- `greet` 是在下面定义的方法名 -->
      <button v-on:click="greet">Greet</button>
    </div>
    <hr />
    <div>
      <div >
        <button v-on:click="say('hi')">Say hi</button>
        <button v-on:click="say('what')">Say what</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ItemIndex",
  data() {
    return {
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
      alert(message)
    }
  },
};
</script>
  