<template>
  <div class="col-lg">
    <div class="row pt-5 img p-5">
      <div class="col-5 w-100">
        <img class="w-100" src="http://beautyincu.com/public/images/settings/5fd43cdbafd11.png" />
        <router-link to="/" class="btn btn-md bg-info shadow mt-5">Go Back to Landing Page</router-link>
      </div>
      <div class="form col-5 bg-light shadow">
        <h3 class="pt-5 pm-5">SIGNUP PAGE</h3>

        <form class="form-group col-md" @submit.prevent="Addform()">
          <label for="firstname">Lastname</label>
          <input type="text" required placeholder="Enter your firstname" v-model="firstname" />
          <br />
          <label for="lastname">lastname</label>
          <input type="text" placeholder="please enter your last name" v-model="lastname" />
          <br />
          <label for="email">Email</label>
          <input type="email" placeholder="@chichigamil.com" v-model="email" />
          <br />
          <label for="number">Number</label>
          <input type="number" placeholder="please enter your phone number" v-model="number" />
          <br />
          <label for="password">Password</label>
          <input type="password" placeholder="please enter your password" v-model="password" />
          <div v-for="(errors , index) in error" :key="index" class="text-info">{{ errors }}</div>

          <button class="btn btn-info btn-md mt-3">click!</button>
        </form>
      </div>
    </div>
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
.img {
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
}
.form {
  width: 100%;
}
input {
  width: 100%;
}

.form-group input {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: none;
  outline: none;
  background: rgb(240, 237, 237);
  box-shadow: 1px 1px 1px 1px #d9d;
}
</style>