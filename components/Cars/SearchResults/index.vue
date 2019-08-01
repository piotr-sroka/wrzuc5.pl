<template>
    <section>
        <app-advanced-search-engine></app-advanced-search-engine>
        <article class="search-results" v-if="findedCars.length">
            <app-main-page-car-info v-for="(findedCar, index) in findedCars" :key="index" :car="findedCar"></app-main-page-car-info>
        </article>
    </section>
</template>

<script>
import {mapGetters} from "vuex";
import AppMainPageCarInfo from "@/components/Cars/CarInfo/mainpage";
import AppAdvancedSearchEngine from "@/components/UI/AdvancedSearchEngine";

export default {
	data() {
		return {};
    },
    components: {
        AppMainPageCarInfo,
        AppAdvancedSearchEngine
    },
	computed: {
		...mapGetters(["findedCars"])
	},
	mounted() {
		let searchPhrase = sessionStorage.getItem("search-phrase");
		if (searchPhrase) {
			this.$store.dispatch("getSearchedCars", searchPhrase);
		}
	}
};
</script>

<style>

</style>
