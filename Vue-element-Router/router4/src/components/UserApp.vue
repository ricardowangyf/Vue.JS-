<template>
  <div>
    <h1>Nested Named Views</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.us {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "nav content"
    "nav helper";
}

h2 {
  grid-area: header;
}

.us__nav {
  grid-area: nav;
  border: 1px dotted;
  margin-right: 0.75rem;
  padding: 0.3rem;
}
.us__content {
  grid-area: content;
}
.us__content--helper {
  grid-area: helper;
}
</style>