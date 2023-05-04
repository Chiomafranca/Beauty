<template>
  <div class="form">
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
          <li class="nav-item mr-2">
            <router-link class="nav-link text-info" to="/login"></router-link>
          </li>
        </ul>
      </div>
    </nav>
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none pt-5 d-md-block text-center">
            <img
              width="80%"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkIeLLTdcWpTB-5oSSiAfpaIQS0TV8dmldw&usqp=CAU"
            />
          </div>
          <div class="col-md-7 text-left shadow p-4">
            <h3 class="py-3 text-center">SIGNUP PAGE</h3>

            <form class="form-controls" @submit.prevent="Addform()">
              <label for="firstname" class="text-left">Lastname</label>

              <label for="email">Email</label>
              <input
                type="email"
                placeholder="@chichigamil.com"
                v-model="email"
                class="form-control mb-3"
              />

              <label for="password">Password</label>
              <input
                type="password"
                placeholder="please enter your password"
                v-model="password"
                class="form-control mb-3"
              />
              <div v-for="(errors , index) in error" :key="index" class="text-info">{{ errors }}</div>

              <div class="text-center mt-3">
                <button class="btn btn-info btn-lg">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailpass: []
    };
  },
  methods: {
    sub() {
      if (this.email && this.password) {
        this.emailpass.push(this.email, this.password);
        (this.email = ""), (this.password = "");
      }
    }
  }
};
</script>

<style scoped>
.form {
  width: 100%;
}

.form input {
  width: 100%;
  border: none;
  outline: invert;
  box-shadow: 1px 1px 1px 1px cadetblue;
}
.Login {
  padding-bottom: 20px;
}
form button {
  width: 50%;
}
.image-fluid img {
  width: 100%;
  height: 95%;
  object-fit: cover;
}
</style>
