<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow mt-3 text-secondary">
      <button class="navbar-toggler" data-toggle="collapse" data-target="#toggle">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="toggle">
        <ul class="navbar-nav">
          <li class="nav-item pt-2">
            <i class="bi bi-building-up text-white bg-info"></i>
          </li>
          <li class="nav-item">
            <h5 class="nav-link">Hello</h5>
          </li>
        </ul>
      </div>
    </nav>
    <!-- navend -->

    <div class="row pt-4 container1">
      <div class="col-md-3 col-sm-5 bg-white shadow card1">
        <div class="d-flex">
          <i class="bi bi-building-up pt-2 bg-info text-white"></i>
          <h5 class="nav-link">Hello</h5>
        </div>
        <div>
          <p class="text-secondary">Hello, World</p>
          <div class="border border-20 border-grey shadow mt-3"></div>
          <small>Bind in HTML element to a component property</small>
          <p class="text-primary">view source</p>
        </div>
      </div>
      <!-- end -->
      <div class="col-md-5 col-sm-5 pt-4 bg-white shadow">
        <div class="d-flex">
          <i class="bi bi-building-up pt-2 bg-info text-white"></i>
          <h5 class="nav-link text-black">Hello Expressions</h5>
        </div>
        <div class="form">
          <p class="text-secondary pt-3">FirstName</p>
          <input type="text " />
          <p class="text-secondary pt-3">Last Name</p>
          <input type="text " />
          <p class="text-black pt-3">Uppercased FullName</p>
          <div class="border border-grey"></div>
          <p class="text-secondary pt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Optio impedit dolorem laborum cumque voluptates placeat?
          </p>
          <p class="text-primary">view status</p>
        </div>
      </div>
      <!-- end -->
      <div class="col-md-3 col-sm-3 bg-white shadow card2">
        <div class="d-flex">
          <i class="bi bi-building-up pt-2 bg-info text-white"></i>
          <h5 class="nav-link text-black">Hello Foreach</h5>
        </div>
        <div class="text-secondary">
          <p>
            <b>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quasi at consectetur repudiandae cupiditate,</b>
          </p>
          <div class="border border-grey shadow"></div>
          <small>Loop through an array of item in a template</small>
          <p class="text-primary">view status</p>
        </div>
      </div>
      <!-- end -->
    </div>
    <!-- end 2-->
    <div class="row pt-5 d-flex justify-content-around">
      <div class="col-md-3 col-sm-2 bg-white shadow card3">
        <div class="d-flex">
          <i class="bi bi-building-up pt-2 bg-info text-white"></i>
          <h5 class="nav-link text-black">Hello Binding</h5>
        </div>
        <div class="form">
          <p class="text-secondary pt-3">Hello World</p>
          <p class="text-secondary pt-3">Name</p>
          <input type="text " value="World" />

          <p class="text-secondary pt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Optio impedit dolorem laborum cumque voluptates placeat?
          </p>
          <p class="text-primary">view status</p>
        </div>
      </div>

      <div class="col-md-4 col-sm-4 bg-white shadow card1 p-3">
        <div class="d-flex">
          <i class="bi bi-building-up pt-2 bg-info text-white"></i>
          <h5 class="nav-link">Hello coditionalRendering</h5>
        </div>
        <div>
          <div class="d-flex">
            <input type="checkbox" class="pt-5" />
            <p class="pt-3">Show details</p>
          </div>
          <p class="text-secondary">Not Showing details</p>
          <div class="border border-20 border-grey shadow mt-3"></div>
        </div>
      </div>
      <!-- end -->
      <div class="col-md-4 col-sm-4 bg-white shadow card1">
        <div class="d-flex">
          <i class="bi bi-building-up pt-2 bg-info text-white"></i>
          <h5 class="nav-link">Hello Iterations</h5>
        </div>
        <div class="border border-grey shadow mt-3"></div>
        <p class="text-secondary">
          <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nostrum quae doloribus rem fugiat voluptatum?</b>
        </p>
        <div class="border border-grey shadow mt-3"></div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem placeat magni quia, soluta vel?</p>
          <p class="text-primary">view source</p>
        </div>
      </div>
      <!-- end -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form input {
  width: 100%;
}
.card1 {
  height: 20%;
}
.container1 {
  display: flex;
  justify-content: space-around;
}
.card2 {
  height: 15%;
}
.container3 {
  margin-top: 7em;
}
.card3 {
  height: 10%;
}
/* .wrap {
  display: flex;
  flex-wrap: wrap;
} */
</style>

