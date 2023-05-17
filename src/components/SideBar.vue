<template>
  <div class="sidebar shadow bg-light">
    <div class="row dash col-5 p-5">
      <i class="bi bi-flower1 flower text-dark"></i>
      <div class="text-black">
        <small>welcome</small>
      </div>
      <div class="text-black d-flex">
        <h2>Beauty spa</h2>
      </div>

      <router-link to="/tenant/dash" class="text-decoration-none text-dark">
        <div class="d-flex dash1 mt-2 mb-2">
          <i class="bi bi-dash-square-fill"></i>
          <p>dashboard</p>
        </div>
      </router-link>

      <router-link to="/tenant/purchase" class="d-flex text-decoration-none text-dark">
        <div class="d-flex dash1">
          <i class="bi bi-bookmarks"></i>
          <p>purchase</p>
        </div>
      </router-link>

      <router-link to="/tenant/email" class="d-flex text-decoration-none text-dark">
        <div class="d-flex dash1">
          <i class="bi bi-envelope"></i>
          <p>Email</p>
        </div>
      </router-link>
      <router-link to="/tenant/messages" class="d-flex text-decoration-none text-dark">
        <div class="d-flex dash1">
          <i class="bi bi-envelope"></i>
          <p>Messages</p>
        </div>
      </router-link>

      <router-link to="/tenant/component" class="d-flex text-decoration-none text-dark">
        <div class="d-flex dash1">
          <i class="bi bi-building-up"></i>
          <p>component</p>
        </div>
      </router-link>

      <router-link to="/tenant/pugins" class="d-flex text-decoration-none text-dark">
        <div class="d-flex box dash1">
          <i class="bi bi-plugin"></i>
          <p>pugins</p>
        </div>
      </router-link>

      <router-link to="/tenant/sms" class="d-flex text-decoration-none text-dark">
        <div class="d-flex box dash1">
          <i class="bi bi-gear-wide"></i>
          <p>sms</p>
        </div>
      </router-link>
      <!-- 
      <div class="text-white d-flex logout">
        <i class="bi bi-box-arrow-right"></i>
        <p>Logout</p>
      </div>-->
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default { components: { router } };
</script>

<style scoped>
.sidebar {
  width: 100%;
  /* background: red; */
  height: 100%;
}

/* .box :hover {
  background: white;
  width: 100%;
  color: aquamarine;
} */
.dash1:hover {
  width: 300px;
  transition: 1s;
  background: white;
  color: black;
  display: flex;
  /* width: 100% !important; */
}
.flower {
  color: white;
  font-size: 60px;
  cursor: pointer;
}
.dash1 {
  display: flex;
  /* width: 70vw; */
  border-radius: 5px;
  /* text-align: left; */
  gap: 20px;
  /* background: white; */
  padding: 8px;
  cursor: pointer;
}
.logout {
  cursor: pointer;
  gap: 10px;
  font-size: 15px;
  padding-top: 3em;
}
</style>
