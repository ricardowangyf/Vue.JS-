<template>
  <div>
    <div id="app">
      <h1>Named Routes</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li>
          <router-link :to="{ name: '/Baz' }"><button>Baz</button></router-link>
        </li>
        <li>
          <router-link :to="{ name: '/Foo' }"><button>Foo</button></router-link>
        </li>
        <li>
          <router-link :to="{ name: '/Bar' }"><button>Bar</button></router-link>
        </li>
      </ul>
      <router-view></router-view>
      <!-- <FooApp></FooApp>
      <BazApp></BazApp>
      <BarApp></BarApp> -->
    </div>
  </div>
</template>
<script>
// import FooApp from "./Foo.vue";
// import BazApp from "./Baz.vue";
// import BarApp from "./Bar.vue";
export default {
  components: {
    // FooApp,
    // BazApp,
    // BarApp,
  },
};
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>