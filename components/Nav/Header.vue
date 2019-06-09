<template>
  <nav>
    <nuxt-link class="nav-top-item" to="/cars/add-car">Dodaj ogłoszenie</nuxt-link>
    <nuxt-link class="nav-top-item" v-if="!$store.state.auth.isLoggedIn" to="/auth/login">Zaloguj się</nuxt-link>
    <nuxt-link class="nav-top-item" v-if="!$store.state.auth.isLoggedIn" to="/auth/signup">Zarejestruj się</nuxt-link>
    <nuxt-link class="nav-top-item" v-if="$store.state.auth.isLoggedIn" to="/secret">Secret</nuxt-link>
    <nuxt-link class="nav-top-item" v-if="$store.state.auth.isLoggedIn" to="/auth/logout">Wyloguj</nuxt-link>
  </nav>
</template>
<script>
export default {
  middleware: ["check-auth"]
};
</script>
<style>
.nav-top-item {
  padding: 8px;
  font-size: 1.4em;
  color: #220011;
  background-color: #d6d6d6;
  min-width: 140px;
  display: inline-block;
  line-height: 1.4em;
  vertical-align: middle;
  text-align: center;
}
</style>

