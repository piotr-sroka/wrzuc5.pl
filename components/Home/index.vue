<template>
  <section class="container">
      <div v-for="(car, index) in this.$store.state.cars" :key="index">
        <h3>{{car.title}}</h3>
        <p>{{car.brand}}</p>
        <p>{{car.model}}</p>
        <hr>
        <p>{{car.description}}</p>
        <hr>
        <p>Created {{car.createdTime.toLocaleString('pl-PL', { timeZone: 'UTC' })}} by {{car.createdBy}}</p>
      </div>
  </section>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getCars");
  }
};
</script>

<style scoped>
.container {
  margin-top: 80px;
  align-items: flex-start;
}
</style>
