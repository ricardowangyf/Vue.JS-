<template>
    <div>
      <p>商品名称：{{ productName }}</p>
      <p>商品价格：{{ productPrice }}</p>
      <input type="text" v-model="discount" placeholder="请输入折扣">
      <p>折后价：{{ discountedPrice }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name:'ItemIndex',
    data() {
      return {
        name: '手机',
        price: 1000,
        discount: 0.8
      }
    },
    computed: {
      productName() {
        return this.name;
      },
      productPrice() {
        return this.price;
      },
      discountedPrice() {
        return this.price * this.discount;
      }
    },
    watch: {
      discount(newVal, oldVal) {
        if (newVal !== oldVal) {
          console.log('discount changed from ' + oldVal + ' to ' + newVal);
        }
      }
    }
  }
  </script>
  