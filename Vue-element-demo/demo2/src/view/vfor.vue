<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <div v-if="item.type === 'text'">
          <p>{{ item.text }}</p>
        </div>
        <div v-else-if="item.type === 'image'">
          <img :src="item.url" />
        </div>
        <div v-else>
          <p>Unknown item type</p>
        </div>
        <div v-show="item.showDetails">
          <p>{{ item.details }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ItemIndex",
  data(){
    return{
        items:'wefwgqwer',
        item:{
            text:'zzzzzz',
            detalis:'zzzzzz'
        }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>