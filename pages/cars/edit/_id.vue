<template>
  <app-add-car v-if="carToEdit" :edited-car="carToEdit"></app-add-car>
</template>

<script>
import {mapGetters} from "vuex";

import AppAddCar from "@/components/Cars/AddCar";

export default {
	middleware: ["check-auth", "notauthenticated", "check-owner"],
	components: {
		AppAddCar
	},
	head() {
		return {
			title: "Edytuj ogłoszenie"
		};
	},
	computed: {
		...mapGetters(["carToEdit"])
	},
	mounted() {
		this.$store.dispatch("checkOwner", {url: this.$route.params.id});
	}
};
</script>

<style>

</style>
