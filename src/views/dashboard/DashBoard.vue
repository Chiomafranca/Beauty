<template>
  <div class="container">
    <h3 class="text-center text-success">Active plans</h3>
    <!-- start -->
    <div class="row dash margin-0-auto">
      <div class="row justify-content-around pb-5">
        <div class="col-8 col-sm-5 bg-white shadow box1">
          <p class="text-warning">package1</p>
          <h4>code 360.com</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, fugiat! Cum voluptatum veniam in facere repellendus illo nesciunt libero aut!</p>
          <small class="text-info">codepen</small>
        </div>
        <div class="col-8 col-sm-5 bg-white shadow box2">
          <p class="text-warning">package2</p>
          <h4>code 360.com</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, fugiat! Cum voluptatum veniam in facere repellendus illo nesciunt libero aut!</p>
          <small class="text-info">codepen</small>
        </div>
      </div>
      <!-- end -->
      <!-- start -->
      <div class="row justify-content-around">
        <div class="col-8 col-sm-5 bg-white shadow box3">
          <p class="text-warning">package3</p>
          <h4>code 360</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, fugiat! Cum voluptatum veniam in facere repellendus illo nesciunt libero aut!</p>
          <small class="text-info">codepen</small>
        </div>
        <div class="col-8 col-sm-5 bg-white shadow box4">
          <p class="text-warning">package3</p>
          <h4>code 360.com</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, fugiat! Cum voluptatum veniam in facere repellendus illo nesciunt libero aut!</p>
          <small class="text-info">codepen</small>
        </div>
      </div>
      <!-- end -->
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