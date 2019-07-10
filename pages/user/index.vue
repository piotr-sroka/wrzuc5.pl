<template>
  <section>
    <h3>Moje ogłoszenia:</h3>
    <hr>
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
	padding: 40px 0;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
</style>

