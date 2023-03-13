<template>
  <!-- 用 v-for 指令基于一个数组来渲染一个列表 -->
  <!-- v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名 -->
  <div>
    <div>
      <ul id="example-1">
        <li v-for="item in items" :key="item.message">
          {{ item.message }}
        </li>
      </ul>
    </div>
    <div>
      <ul id="example-2">
        <li v-for="(item, index) in itemsss" :key="item">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
        <!-- 在 v-for 块中，我们可以访问所有父作用域的 property。v-for 还支持一个可选的第二个参数，即当前项的索引。 -->
      </ul>
    </div>
    <div>
      <ul id="v-for-object" class="demo">
        <li v-for="value in object" :key="value">
          {{ value }}
        </li>
      </ul>
    </div>
    <div>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListRendering",
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      parentMessage: "Parent",
      itemsss: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
  },
};
</script>

<style >
li {
  list-style: none;
}
</style>