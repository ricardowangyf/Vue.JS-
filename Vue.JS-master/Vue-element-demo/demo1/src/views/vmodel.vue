<template>
  <div>
    <div>
      <input v-model="message" placeholder="edit me" />
      <p>Message is: {{ message }}</p>
      <!-- 单行文本 -->
    </div>
    <hr />
    <div>
      <span>Multiline message is:</span>
      <p style="white-space: pre-line">{{ message }}</p>
      <br />
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
      <!-- 多行文本 -->
    </div>
    <hr />
    <div>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
      <!-- 复选框 -->
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
      <!-- 多个复选框 -->
    </div>
    <hr />
    <div>
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ picked }}</span>
      单选按钮
    </div>
    <hr />
    <div>
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br />
      <span>Selected: {{ selected }}</span>
      <!-- 选择框 -->
    </div>
    <hr />
    <div>
      <select v-model="selecxted" multiple style="width: 50px">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br />
      <span>selecxted: {{ selecxted }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemIndex",
  data() {
    return {
      message: "xewgeqrg",
      checked: true, //复选框
      checkedNames: [], //多个复选框
      picked: "", //单选按钮
      selected: "", //选择框
      selecxted: [], //多个选择框
    };
  },
};
</script>