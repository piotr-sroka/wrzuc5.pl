<template>
  <section class="container">
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
