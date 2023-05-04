<template>
  <div class="container">
    <div class="d-flex bg-info justify-content-between p-5">
      <div class="text-light pt-3">
        <h1>Welcome to wordpress!</h1>
        <a
          href="#"
          class="text-white text-decoration-none border-bottom"
        >Learn more about 6.1.1 version</a>
      </div>
      <div class="d-flex text-light mb-5">
        <i class="bi bi-x-lg"></i>
        <p class="info">Demiss</p>
      </div>
    </div>
    <!-- end -->
    <div class="col-12 d-flex justify-content-between">
      <div class="row justify-content-around pt-4 bg-white shadow">
        <div class="col-4 d-flex card1">
          <div class="icon">
            <i class="bi bi-pen-fill bg-dark text-white p-1 px-2"></i>
          </div>
          <div>
            <h5>Author rich content with blocks and pattern</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum nulla in cumque minima incidunt iure!
            </p>
            <p class="text-info footer">Add a new post</p>
          </div>
        </div>
        <!-- end -->
        <div class="col-4 d-flex card2">
          <div class="icon">
            <i class="bi bi-file-earmark-ruled bg-dark text-white p-1 px-2"></i>
          </div>
          <div>
            <h5>customize your entire site with block themes</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum nulla in cumque minima incidunt iure!
            </p>
            <p class="text-info footer">Open site edit</p>
          </div>
        </div>
        <!-- end -->
        <div class="col-4 d-flex card3">
          <div class="icon">
            <i class="bi bi-toggle-on bg-dark text-white p-1 px-2"></i>
          </div>
          <div>
            <h5>
              Switch up your style look & feel with
              style
            </h5>
            <p>
              Lorem, ipsum dolor si
              t amet consectetur adipisicing elit.
              Nostrum nulla in cumque minima incidunt iure!
            </p>
            <p class="text-info footer">Edit styles</p>
          </div>
        </div>
      </div>
    </div>
    <!-- end -->
    <div class="col-12">
      <div class="d-flex justify-content-between">
        <div class="col-6 mt-4 bg-white shadow">
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <h5>Site health status</h5>
            </div>
            <div class="d-flex">
              <i class="bi bi-arrow-down-short"></i>
              <i class="bi bi-arrow-up-short"></i>
              <i class="bi bi-bell"></i>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class>
              <i class="bi bi-circle text-info"></i>
              <p>Good</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illo nihil nostrum, similique obcaecati libero aliquam quas! Nostrum, sequi voluptatum?</p>
              <p class="text-info footer">Open site edit</p>
            </div>
          </div>
        </div>
        <div class="col-6">2</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.footer {
  text-decoration: underline;
}

.icon {
  border-radius: 5px;
  padding-top: 8px;
  padding-right: 12px;
}
.icon .bi {
  border-radius: 3px;
}
</style>