<template>
  <div class="container-fluid px-0 overflow-hidden border2">
    <div class="row">
      <div class="col-md-3 sidebar">
        <SideBarVue />
      </div>
      <div class="col-md-9">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBarVue from "../../components/SideBar.vue";
export default {
  components: { SideBarVue }
};
</script>

<style scoped>
.border2 {
  box-sizing: border-box;
}
/* .sidebar {
  display: block !important;
} */
@media screen and (max-width: 767px) {
  .sidebar {
    display: none !important;
    margin: 0 auto;
  }
}
</style>