<template>
    <section class="search-page">
        <app-advanced-search-engine></app-advanced-search-engine>
        <div class="progress-bar" v-if="searching">
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        <article class="search-results" v-if="findedCars.length && !searching">
            <app-main-page-car-info v-for="(findedCar, index) in findedCars" :key="index" :car="findedCar"></app-main-page-car-info>
        </article>
        <h4 class="info-no-results" v-else>Brak wyników</h4>
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
		...mapGetters(["findedCars", "searching"])
	},
	mounted() {
		let searchPhrase = sessionStorage.getItem("search-phrase");
		if (searchPhrase) {
            let searchQuery = {
                type: searchPhrase.type,
                phrase: searchPhrase.phrase
            }
			this.$store.dispatch("getSearchedCars", searchQuery);
		}
	}
};
</script>

<style>
    .search-page .progress-bar {
        width: 60px;
        height: 60px;
        position: relative;
    }
    .info-no-results {
        max-width: 900px;
        padding: 24px;
        margin: 0 auto;
    }
</style>
