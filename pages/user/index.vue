<template>
  <section>
    <h3 class="info-title">Moje ogłoszenia:</h3>
    <section class="cars-list">
      <app-short-car-info v-for="(car, index) in myCars" :key="index" :mycar="car"></app-short-car-info>
    </section>
  </section>
</template>

<script>
import AppShortCarInfo from "@/components/Cars/CarInfo/short";

export default {
	middleware: ["check-auth", "notauthenticated"],
	components: {
		AppShortCarInfo
	},
	head() {
		return {
			title: "Moje konto"
		};
	},
	data() {
		return {
			myCars: []
		};
	},
	created() {
		this.$axios
			.post("/api/cars/", {user: this.$store.state.auth.user})
			.then(response => {
				this.myCars = response.data.filter(car => {
					return !car.isDeleted;
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
};
</script>
<style>
.cars-list {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
@media screen and (max-width: 720px) {
	.cars-list {
		flex-direction: column;
	}	
}
</style>

