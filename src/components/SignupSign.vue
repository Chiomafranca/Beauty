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
        </ul>
      </div>
    </nav>
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none pt-5 d-md-block text-center">
            <img width="70%" src="http://beautyincu.com/public/images/settings/5fd43cdbafd11.png" />
            <div>
              <router-link to="/" class="btn btn-md bg-info shadow mt-5">Go Back to Landing Page</router-link>
            </div>
          </div>
          <div class="col-md-7 text-left shadow p-4">
            <h3 class="py-3 text-center">SIGNUP PAGE</h3>

            <form class="form-controls" @submit.prevent="Addform()">
              <label for="firstname" class="text-left">Lastname</label>
              <input
                type="text"
                required
                placeholder="Enter your firstname"
                v-model="firstname"
                class="form-control mb-3"
              />

              <label for="lastname">lastname</label>
              <input
                type="text"
                placeholder="please enter your last name"
                v-model="lastname"
                class="form-control mb-3"
              />

              <label for="email">Email</label>
              <input
                type="email"
                placeholder="@chichigamil.com"
                v-model="email"
                class="form-control mb-3"
              />

              <label for="number">Number</label>
              <input
                type="number"
                placeholder="please enter your phone number"
                v-model="number"
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
                <button class="btn btn-info btn-lg">Register now</button>
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
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      password: "",
      // passwordError: "",
      error: []
    };
  },
  methods: {
    Addform() {
      if (this.firstname && this.lastname) {
        this.error.push(
          "FIRSTNAME:",
          this.firstname,
          "LASTNAME:",
          this.lastname,
          "EMAIL:",
          this.email,
          "NUMBER:",
          this.number,
          "PASSWORD:",
          this.password
        );
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.number = "";
        this.password = "";
      }
    }
    // Addform() {
    // (this.passwordError = this.password),
    //   length > 5 ? "" : "password must be at least  3 chars";
    // if (!this.passwordError) {
    //   console.log("firstname:", this.firstname);
    //   console.log("lastname:", this.lastname);
    //   console.log("email:", this.email);
    //   console.log("number:", this.number);
    //   console.log("password:", this.password);
    // }
    // }
  }
};
</script>

<style scoped>
input {
  border: none;
  outline: none;
  box-shadow: 1px 1px 1px 1px #d9d;
}
label {
  text-align: left !important;
}
</style>