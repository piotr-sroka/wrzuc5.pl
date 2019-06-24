<template>
  <section class="container">
    <app-search-engine></app-search-engine>
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
import AppSearchEngine from "@/components/SearchEngine";
export default {
	components: {
		AppSearchEngine
	},
	created() {
		this.$store.dispatch("getCars");
	}
};
</script>

<style scoped>
.container {
	align-items: flex-start;
}
</style>
