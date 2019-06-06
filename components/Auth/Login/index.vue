<template>
  <section class="container">
    <article class="form" v-if="!islogged">
      <h2>Log in</h2>
      <input class="form-item" type="email" v-model="email" placeholder="email">
      <input class="form-item" type="password" v-model="password" placeholder="password">
      <button class="form-item btn" @click="login">Log in</button>
      <div class="form-error" v-if="errorMessage">
        <hr>
        <p>{{errorMessage}}</p>
      </div>
    </article>
    <h3 v-if="islogged">Hello, {{loggedUser}}</h3>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      islogged: false,
      loggedUser: ""
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        this.errorMessage = "Please fill in all fields";
        setTimeout(this.clearErrorMessage, 4500);
        return;
      }
      let user = { email: this.email, password: this.password };
      this.$axios
        .post("/api/login/", user)
        .then(response => {
          if (response.data.errorMessage) {
            this.errorMessage = response.data.errorMessage;
            setTimeout(this.clearErrorMessage, 4500);
            return;
          }
          this.islogged = true;
          this.loggedUser = response.data.loggedUser;
        })
        .catch(err => {
          console.log(err);
        });
    },
    clearErrorMessage() {
      this.errorMessage = "";
    }
  }
};
</script>

<style>
.form {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto;
  width: 300px;
  height: 400px;
}
.form-item {
  margin-top: 22px;
  padding: 8px;
}
.form-item.btn {
  background-color: #002f3d;
  border: none;
  outline-color: transparent;
  color: #fff;
  cursor: pointer;
}
.form-error {
  margin-top: 24px;
  color: #ee0011;
}
.form-error hr {
  margin-bottom: 10px;
}
</style>
