<template>
  <section class="container">
    <app-search-engine></app-search-engine>
    <div class="cars-list">
      <h3 class="list-title">Najnowsze ogłoszenia</h3>
      <app-main-page-car-info v-for="(car, index) in this.cars" :key="index" :car="car"></app-main-page-car-info>
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
    this.$store.dispatch("getCars", 5);
  }
};
</script>

<style scoped>
  .container {
    align-items: flex-start;
    max-width: 1238px;
  }
  .list-title {
    display: block;
    width: 100%;
    text-align: left;
    padding: 20px 0;
  }
  @media screen and (max-width: 720px) {
    .cars-list {
      padding: 0 14px;
    }    
  }
</style>
