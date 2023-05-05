<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow mt-3 p-3">
      <button class="navbar-toggler" data-toggle="collapse" data-target="#toggle">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="toggle">
        <h1 class="text-white">Product</h1>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-2 text-white">
            <a>foundation</a>
          </li>
          <li class="nav-item mr-2 text-white">
            <a>lipstick</a>
          </li>
          <li class="nav-item mr-2 text-white">
            <a>powder</a>
          </li>
          <li class="nav-item mr-2 text-white">
            <a>perfume</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- end of navbar -->
    <div class="col-12">
      <div class="d-flex justify-content-between mt-4">
        <div class="col-3">
          <img
            class="100px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlpDf26EGvHijtyzg3Kk5S56jIdtTShGaxvg&usqp=CAU"
          />
          <p>for skill type at a cheap cost</p>
        </div>
        <div class="col-3">
          <img width="170px" src="https://m.media-amazon.com/images/I/61x7hSFI6kL._SL1500_.jpg" />
          <p>for skill type at a cheap cost</p>
        </div>
        <div class="col-3">
          <img
            width="170px"
            src="https://cdn.shopify.com/s/files/1/0645/1619/4519/products/20220720_183549.jpg?v=1658307983&width=1808"
          />
          <p>for skill type at a cheap cost</p>
        </div>
        <div class="col-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLpxoxxIGnA9ZtA56UIz3wXyyUZa4YqmMeQ&usqp=CAU"
          />
          <p>for skill type at a cheap cost</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//    import image from "./components/image.vue";
// import SideBar from "../components/SideBar.vue";

export default {
  components: {
    // SideBar
  }
};
</script>

<style scoped>
.box1 {
  border-bottom-style: groove;
  border-bottom-color: coral;
  border-bottom-width: 3px;
  /* width: 100%; */
}
.box2 {
  border-bottom-style: groove;
  border-bottom-color: gainsboro;
  /* border-bottom-width: 3px; */
  /* width: 100%; */
}
.box3 {
  border-bottom-style: groove;
  border-bottom-color: skyblue;
  border-bottom-width: 3px;
  /* width: 100%; */
}
.box4 {
  margin-bottom: 5px;
  border-bottom-style: groove;
  border-bottom-color: blue;
  border-bottom-width: 3px;
  /* width: 100%; */
}
/* .dash {
  gap: 20px; 
} */

small {
  text-shadow: 2px 2px yellowgreen;
}
</style>