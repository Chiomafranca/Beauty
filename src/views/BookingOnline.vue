<template>
  <div class="container">
    <div class="col pt-5 c">
      <div class="col-5">
        <img
          width="200px"
          src="https://i5.walmartimages.com/asr/474f9206-5727-4a81-abf2-5bf706f8c59f_1.4b1f787c4a014284affa684824986e90.jpeg"
        />
        <div class="row justify-content-center btn">
          <botton class="text-info bg-light btn btn-small shadow justify-content-center">buy now</botton>
        </div>
      </div>
      <div class="col-5 pt-5">
        <img
          width="300px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEgACV6yJtLDQyeMZX-NGMBDtmTp4jDSq4A&usqp=CAU"
        />
        <div class="row justify-content-center btn">
          <botton class="text-info bg-light btn btn-small shadow justify-content-center">buy now</botton>
        </div>
      </div>
    </div>

    <!-- start -->
    <div class="col pt-5 c">
      <div class="col-5">
        <img
          width="350px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49YP70YghPGO-VXOcL6zvg7gNIjefv6MPFpc5gsBM2Y-oNXoApmHRSk6gK3XuXUZSY1A&usqp=CAU"
        />
        <div class="row justify-content-center btn">
          <botton class="text-info bg-light btn btn-small shadow justify-content-center">buy now</botton>
        </div>
      </div>

      <div class="col-5 pt-5">
        <img
          width="300px"
          src="https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM="
        />
        <div class="row justify-content-center btn">
          <botton class="text-info bg-light btn btn-small shadow justify-content-center">buy now</botton>
        </div>
      </div>
    </div>
    <!-- end -->
    <!-- start -->
    <div class="col pt-5 c">
      <div class="col-5">
        <img
          width="400px"
          src="https://images.macrumors.com/article-new/2019/01/iphone11wallpaper-800x637.jpg"
        />
        <div class="row justify-content-center btn">
          <botton class="text-info bg-light btn btn-small shadow">buy now</botton>
        </div>
      </div>
      <div class="col-5 pt-5">
        <img
          width="300px"
          src="https://cdn.shopify.com/s/files/1/0523/8439/9556/products/Hisense-295-liter-refrigerator-double-door-frost-free_1200x1200.jpg?v=1660298786"
        />
        <div class="row justify-content-center btn">
          <botton class="text-info bg-light btn btn-small shadow">buy now</botton>
        </div>
      </div>
    </div>
    <!-- end -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.c {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 2em;
  gap: 10rem;
}

@media only screen and (max-width: 700px) and (min-width: 600px) {
  .c {
    display: grid;
    grid-template-columns: 30px 30px 30px 30px;
    /* justify-content: center; */
    margin-left: 3rem;
  }
  .c {
    min-width: 600px;
  }
  and {
    display: block;
  }
  .c {
    display: block;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
  }
}
</style>