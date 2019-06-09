<template>
  <section class="container">
    <ul>
      <li v-for="car in this.$store.cars">
        car
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getCars");
  }
};
</script>

<style>
</style>
