<template>
  <div>
    <app-header></app-header>
    <transition name="fade">
      <section class="main">
        <nuxt />
      </section>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/Nav/Header";
import AppFooter from "@/components/Nav/Footer";
export default {
  components: {
    AppHeader,
    AppFooter
  },
  head() {
    return {
      title: "Moje konto"
    };
  }
};
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  /* max-width: 1300px; */
  margin: 0 auto;
  z-index: 1;
  background-color: #ecf0f2;
}
body {
  padding: 0 10px;
  margin-top: 48px;
  margin-bottom: 340px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.main {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 40px;
}
@media screen and (max-width: 720px) {
  body {
    padding: 0;
    margin-bottom: 500px;
    margin-top: 44px;
  }  
}
</style>
