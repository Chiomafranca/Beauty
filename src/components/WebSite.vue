<template>
  <div class="website">
    <nav class="navbar navbar-expand-lg bg-light navbar-light shadow">
      <h3 class="text-primary navbar-brand">Beauty for ashes</h3>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#toggle">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="toggle">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-2">
            <router-link class="nav-link text-info" to="/signup">Signup</router-link>
          </li>
          <li class="nav-item mr-2">
            <router-link class="nav-link text-info" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <section class="bg-white py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <h1>Find Your inspiration</h1>
            <p
              class="py-4"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nesciunt!</p>
            <router-link class="p-3 border rounded-4 btn btn-danger" to="/signup">Get started</router-link>
          </div>
        </div>
      </div>
    </section>
    <div class="image pt-5">
      <img
        class="image-fluid"
        src="https://joelokojie.org/wp-content/uploads/2020/02/Beauty-for-ashes-1.jpg"
      />

      <div class="pt-5 container">
        <h2 class="text-info">Naturally Beauty</h2>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio voluptatum magni et.
          Fugit
          <span
            class="text-primary"
          >eaque id fuga possimus maxime ipsam! Dolor autem facere voluptates, debitis</span> harum ut tempore incidunt quos assumenda.
        </p>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-6 my-2">
                <div class="card shadow">
                  <img
                    width="100%"
                    src="https://thumbs.dreamstime.com/b/golden-woman-beauty-fashion-model-girl-golden-make-up-hair-jewellery-black-background-80922935.jpg"
                  />
                </div>
              </div>
              <div class="col-md-6 my-2">
                <div class="card shadow">
                  <img
                    width="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSjFLeka8SOOp5lf64pcOgtsiOaMmauPMUA&usqp=CAU"
                  />
                </div>
              </div>
              <div class="col-md-6 my-2">
                <div class="card shadow">
                  <img
                    width="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtw_nGr6EYzHOSUUuf9wl9lWKiD_1_-XCrA&usqp=CAU"
                  />
                </div>
              </div>
              <div class="col-md-6 my-2">
                <div class="card shadow">
                  <img
                    width="100%"
                    src="https://thumbs.dreamstime.com/b/golden-woman-beauty-fashion-model-girl-golden-make-up-hair-jewellery-black-background-80922935.jpg"
                  />
                </div>
              </div>
              <div class="col-md-6 my-2">
                <div class="card shadow">
                  <img
                    width="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOfNqxnvxs7C6Vpd2v6X4_SZKoZBXdFGuaA&usqp=CAU"
                  />
                </div>
              </div>
              <div class="col-md-6 my-2">
                <div class="card shadow p-3">
                  <h4 class="text-info">HAIR AND BEAUTY</h4>
                  <p
                    class="text-justify"
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, recusandae assumenda eaque itaque tenetur omnis? Excepturi aspernatur vel animi consectetur architecto explicabo vero. Veniam repudiandae recusandae excepturi eius saepe ipsam magni odit reprehenderit rem sapiente. Quis iusto provident nesciunt libero!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
/* .image-fluid {
  width: 100%;
} */

.image img {
  padding-top: 20px;
  height: 300px;
  width: 100%;
  object-fit: cover;
  margin: 0 auto;
}

.d-grid {
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  gap: 10px;
}
.col {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>