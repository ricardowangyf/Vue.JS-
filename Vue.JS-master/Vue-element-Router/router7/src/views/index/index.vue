<template>
  <div>
    欢迎来到人员管理系统
    <footer-nav v-bind:class="{ isIndex: isNowPage }"></footer-nav>
  </div>
</template>

<script>
import FooterNav from "../../components/Fotter.vue";
export default {
  name: "IndexApp",
  components: {
    FooterNav,
  },
  data() {
    return {
      isNowPage: true,
    };
  },
};
</script>
