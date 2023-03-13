<template>
  <div>
    <div>
      <input v-model="message" placeholder="edit me" />
      <p>Message is: {{ message }}</p>
    </div>
    <hr />
    <div>
      <span>Multiline message is:</span>
      <p style="white-space: pre-line">{{ meassage }}</p>
      <br />
      <textarea v-model="meassage" placeholder="add multiple lines"></textarea>
    </div>
    <hr />
    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <hr />
    <div>
      <div id="example-4">
        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>
        <br />
        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>
        <br />
        <span>Picked: {{ picked }}</span>
      </div>
    </div>
    <hr />
    <div>
      <input
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no"
      />
    </div>
    <hr />
    <div>
        <input v-model.lazy="msg">
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemIndex",
  data() {
    return {
      message: "asdasd",
      meassage: "",
      checkedNames: [],
      picked: "",
      toggle:'',
      msg:''
    };
  },
};
</script>

<style>
</style>