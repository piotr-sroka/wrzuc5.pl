<template>
  <section class="container">
    <form class="form">
      <div class="form-group">
        <input class="form-input" type="email" v-model="email" placeholder="email" id="form-email">
        <label class="form-input-label form-email-label" for="form-email"></label>
      </div>
      <div class="form-group">
        <input class="form-input" type="password" v-model="password" placeholder="hasło" id="form-password">
        <label class="form-input-label form-password-label" for="form-password"></label>
      </div>
      <div class="form-group">
        <input
          class="form-input"
          type="password"
          v-model="confirmpassword"
          placeholder="potwierdź hasło" id="form-confirm-password"
        >
        <label class="form-input-label form-password-label" for="form-password"></label>
      </div>
      <button class="form-button-submit" @click.prevent="signup">Zarejestruj się</button>
			<span class="info-message" :class="{'form-message-error': info.error}" v-if="info.message">{{info.message}}</span>
    </form>
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
				this.info.message = "Proszę wypełnić wszystkie pola";
				setTimeout(this.clearErrorMessage, 4500);
				return;
			}
			if (this.password !== this.confirmpassword) {
				this.info.error = true;
				this.info.message = "Hasła muszą pasować";
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
								this.$router.push("/auth/login");
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

<style scoped>
.container {
	padding: 50px;
}
.form {
	margin: auto;
	width: 340px;
}
.form-input {
	padding-right: 32px;
}
.form-input:focus + .form-input-label::before {
  color: #1abc9c;
}
.form .form-group {
	display: flex;
}
.form-button-submit {
	max-width: 100%;
}
.form-email-label,
.form-password-label {
	position: relative;
}
.form-email-label::before,
.form-password-label::before {
	display: inline-block;
	font-family: "Flat-UI-Pro-Icons";
	position: absolute;
	width: 24px;
	height: 24px;
	font-size: 14px;
	line-height: 24px;
	vertical-align: middle;
	left: -30px;
	text-align: center;
	top: 0;
	bottom: 0;
	margin: auto 0;
	color: #2f4154;
	opacity: 0.7;
}
.form-email-label::before {
	content: "\e631";
}
.form-password-label::before {
	content: "\e633";
}
</style>
