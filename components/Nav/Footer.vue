<template>
  <footer class="footer">
    <section class="footer-container">
      <article class="footer-section footer-links">
        <h4 class="footer-section--title">wrzuc5.pl</h4>
        <p class="footer-links--link">Regulamin</p>
        <p class="footer-links--link">Polityka prywatności</p>
        <p class="footer-links--link">Cennik</p>
        <p class="footer-links--link">Najczęstsze pytania</p>
      </article>
      <span class="divider show-below-720"></span>
      <article class="footer-section footer-contact-form">
        <form class="form">
          <h4 class="footer-section--title">Skontaktuj się z nami</h4>
          <input type="text" placeholder="Twoje imię" class="form-input contact-form--input">
          <input type="email" placeholder="Twój email" class="form-input contact-form--input">
          <textarea type="text" placeholder="Wiadomość" class="form-input form-textarea contact-form--input"></textarea>
          <button class="form-button-submit" @click.prevent="submitContactForm">Wyślij</button>
        </form>
      </article>
    </section>
  </footer>
</template>

<script>
export default {
  methods: {
    submitContactForm() {
      console.log("Sending form...");
    }
  }
};
</script>

<style>
.footer {
	background-color: #1a2229;
	height: 340px;
	width: 100%;
	position: fixed;
  left: 0;
  bottom: 0;
	z-index: -1;
}

.footer-container {
  width: 100%;
  max-width: 1200px;
	border-radius: 6px 6px 0 0;
	bottom: 0;
	margin: 0 auto;
	color: #edeff1;
	font-size: 0.8em;
	font-weight: lighter;
  display: flex;
  justify-content: center;
}
.footer-section {
  padding: 40px;
  max-width: 320px;
}
.footer-links {
	text-align: right;
}
.footer-links--title {
	font-size: 1em;
}
.footer-links--link {
	padding: 5px;
	cursor: pointer;
	transition: color 0.2s linear;
}
.footer-links--link:hover {
	color: #2980b9;
}
.footer-section--title {
  padding: 5px;
  font-weight: normal;
}
.footer-contact-form {
  flex: 1;
}
.footer-contact-form .form {
  background-color: transparent;
  padding: 0;
}
.footer-contact-form .form .contact-form--input {
  font-size: 1em;
}
.footer-contact-form .form-textarea {
  resize: none;
  height: 80px;
}
.footer-contact-form .form-button-submit {
  border-color: #edeff1;
  color: #edeff1;
}
.footer-contact-form .form-button-submit:hover {
  background-color: #edeff1;
  color: #1a2229;
}
.footer .divider {
  background-color: #edeff1;
  width: Calc(100% - 40px);
}
@media screen and (max-width: 720px) {
  .footer {
    height: 520px;
  }
  .footer-container {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }  
  .footer-section {
    width: 100%;
    padding: 10px 40px;
  }
  .footer-links {
    text-align: left;
  }
	.footer .divider.show-below-720 {
		display: block;
	}
}
</style>
