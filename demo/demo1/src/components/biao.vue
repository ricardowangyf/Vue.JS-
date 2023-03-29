<template>
  <div>
    <div>
      <input v-model="message" placeholder="edit me" />
      <p>Message is: {{ message }}</p>
    </div>
    <hr />
    <div>
      <span>Multiline message is:</span>
      <p style="white-space: pre-line">{{ aaaa }}</p>
      <br />
      <textarea v-model="aaaa" placeholder="add multiple lines"></textarea>
    </div>
    <hr />
    <div>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
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
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BiaoApp",
  data() {
    return {
      message: "",
      aaaa: "",
      checked: "",
      checkedNames: [],
      selected: "xxx",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>