<template>
  <div class="col bg-light shadow pt-3">
    <div class="row justify-content-between">
      <div class="col-5 image-fluid">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkIeLLTdcWpTB-5oSSiAfpaIQS0TV8dmldw&usqp=CAU"
        />
      </div>
      <div class="col-5 form">
        <form @submit.prevent="sub" class="form-group col-md bg-light shadow p-5">
          <h3 class="text-primary mt-4">Login</h3>
          <label for="email">Email</label>
          <input type="email" required placeholder="please enter your email" v-model="email" />
          <br />
          <label for="password">Password</label>
          <input type="password" placeholder="please enter your password" v-model="password" />
          <br />
          <button class="btn btn-sm btn-primary mt-3">subimt</button>
          <br />
          <div v-for="(email, index ) in emailpass" :key="index">
            <h3 supass>{{ email }}</h3>
          </div>
        </form>
      </div>
    </div>
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
