<template>
  <section class="container">
    <app-search-engine></app-search-engine>
    <div class="cars-list">
      <app-main-page-car-info v-if="!car.isDeleted" v-for="(car, index) in this.cars" :key="index" :car="car"></app-main-page-car-info>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import AppSearchEngine from "@/components/UI/MainSearchEngine";
import AppMainPageCarInfo from "@/components/Cars/CarInfo/mainpage";

export default {
  components: {
    AppSearchEngine,
    AppMainPageCarInfo
  },
  computed: {
    ...mapGetters(["cars"])
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
