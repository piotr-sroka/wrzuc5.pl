<template>
  <section class="container">
    <ul>
      <li v-for="car in this.$store.cars" v-bind:cars>
        car.brand
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
