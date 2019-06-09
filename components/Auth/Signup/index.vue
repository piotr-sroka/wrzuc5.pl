<template>
  <section class="container">
    <article class="form">
      <h2>Create new user</h2>
      <input class="form-item" type="email" v-model="email" placeholder="email">
      <input class="form-item" type="password" v-model="password" placeholder="password">
      <input
        class="form-item"
        type="password"
        v-model="confirmpassword"
        placeholder="confirm password"
      >
      <button class="form-item btn" @click="signup">Sign up</button>
      <div class="form-message" :class="{'form-message-error': info.error}" v-if="info.message">
        <hr>
        <p>{{info.message}}</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmpassword: "",
      info: {
        error: false,
        message: ""
      }
    };
  },
  methods: {
    signup() {
      if (!this.email || !this.password || !this.confirmpassword) {
        this.info.error = true;
        this.info.message = "Please fill in all fields";
        setTimeout(this.clearErrorMessage, 4500);
        return;
      }
      if (this.password !== this.confirmpassword) {
        this.info.error = true;
        this.info.message = "Passwords don't match";
        setTimeout(this.clearErrorMessage, 4500);
        return;
      }
      let user = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmpassword
      };
      this.$axios
        .post("/api/auth/signup/", user)
        .then(
          response => {
            if (response) {
              this.info.error = false;
              this.info.message = response.data.message;
              setTimeout(() => {
                this.$router.push("/login");
              }, 2000);
            }
          },
          error => {
            if (error) {
              this.info.error = true;
              this.info.message = error.response.data.errorMessage;
            }
          }
        )
        .catch(err => {
          console.log(err);
        });
    },
    clearErrorMessage() {
      this.info.error = false;
      this.info.message = "";
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
.form-message {
  margin-top: 24px;
  color: #1144ad;
}
.form-message.form-message-error {
  color: #ee0011;
}
.form-error hr {
  margin-bottom: 10px;
}
</style>
