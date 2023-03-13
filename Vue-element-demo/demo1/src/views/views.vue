<template>
    <div>
        <my-component prop-a="1" prop-b="hello"></my-component>
    </div>
</template>

<script>
import MyComponent from "../components/chilidcomponents.vue";
    export default {
        name:'ItemIndex',
        components: {
    "my-component": MyComponent,
  },
    }
</script>

<style lang="scss" scoped>

</style>