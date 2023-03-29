<template>
  <div>
    <li v-for="item in items" :key="item.message">
      {{ item.message }}
    </li>
    <hr />
    <li v-for="(item, index) in items" :key="item">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
    <hr />
    <li v-for="value in object" :key="value">
      {{ value }}
    </li>
    <hr />
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    <hr />
    <ul v-for="set in sets" :key="set">
      <li v-for="n in even(set)" :key="n">{{ n }}</li>
    </ul>
    <hr />
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo">
        {{ todo }}
      </li>
    </ul>
    <p v-else>No todos left!</p>
  </div>
</template>

<script>
export default {
  name: "VforApp",
  data() {
    return {
      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      todos:[
        [1,2,3,4,5,123,12,3],
        [12123,123123123,1231231231]
      ]
    };
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 1 === 0;
      });
    },
    methods: {
      even(numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0;
        });
      },
    },
  },
};
</script>
<style>
li {
  list-style: none;
}
</style>