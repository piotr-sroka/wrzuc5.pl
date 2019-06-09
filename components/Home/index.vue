<template>
  <section class="container">
    <nuxt-link v-if="!$store.state.auth.isLoggedIn" to="/login">Log in</nuxt-link>
    <nuxt-link v-if="!$store.state.auth.isLoggedIn" to="/signup">Sign up</nuxt-link>
    <nuxt-link v-if="$store.state.auth.isLoggedIn" to="/secret">Secret</nuxt-link>
    <nuxt-link v-if="$store.state.auth.isLoggedIn" to="/logout">Logout</nuxt-link>
  </section>
</template>

<script>
export default {
  middleware: ["check-auth"]
};
</script>

<style>
</style>
