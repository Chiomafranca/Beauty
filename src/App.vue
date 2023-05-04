<template>
  <div id="app">
    <router-view />
    <!-- <WebSite /> -->
  </div>
</template>

<script>
// import WebSite from "./components/WebSite.vue";
// import image from "./components/image.vue";

export default {
  components: {
    // WebSite
    // image
  }
};
</script>

<style>
.connection {
  position: fixed;
  z-index: 9;
}
html {
  scroll-behavior: smooth;
}
</style>
