<template>
  <div id="app">
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <hr />
    <div>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </div>
    <hr />
    <div>
      <ul v-for="set in sets" :key="set">
        <li v-for="n in even(set)" :key="n">{{ n }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemIndex",
  data() {
    return {
      items: ["item 1", "item 2", "item 3"],
      numbers: [1, 2, 3, 4, 5],
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
    };
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
 
  },
  methods: {
      even: function (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0;
        });
      },
    },
};
</script>