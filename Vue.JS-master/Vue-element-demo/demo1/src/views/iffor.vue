<template>
  <div>
    <div>
      <h2 v-show="showTitle">这是标题</h2>
      <p v-if="showParagraph">这是段落1。</p>
      <p v-else-if="showSecondParagraph">这是段落2。</p>
      <p v-else>这是默认段落。</p>
    </div>
    <div>
      <template v-if="ok">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </template>
    </div>
    <div>
      <div v-if="Math.random() > 0.5">Now you see me</div>
      <div v-else>Now you don't</div>
    </div>
    <div>
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else-if="type === 'C'">C</div>
      <div v-else>Not A/B/C</div>
    </div>
    <div>
        <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username">
        </template>
        <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address">
        </template>
        <button>Toggle login type</button>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ItemIndex",
  data() {
    return {
      showTitle: true,
      ok: false,
      showParagraph: true,
      showSecondParagraph: false,
    };
  },
};
</script>
  