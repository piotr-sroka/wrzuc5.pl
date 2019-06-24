<template>
  <section class="container">
    <h2>Dodaj ogłoszenie</h2>
    <form>
        <input type="text" placeholder="Marka" v-model="brand">
        <span class="info-error" v-if="errors.brand !=='' ">{{errors.brand}}</span>
        <input type="text" placeholder="Model" v-model="model">
        <span class="info-error" v-if="errors.model !=='' ">{{errors.model}}</span>
        <input type="text" placeholder="Tytuł Ogłoszenia" v-model="title">
        <span class="info-error" v-if="errors.title !=='' ">{{errors.title}}</span>
        <input type="text" placeholder="Opis" v-model="description">
        <span class="info-error" v-if="errors.description !=='' ">{{errors.description}}</span>
        <hr>
        <button @click.prevent="addCar">Dodaj</button>
    </form>
  </section>
</template>
<script>
export default {
	data() {
		return {
			brand: "",
			model: "",
			title: "",
			description: "",
			errors: {
				brand: "",
				model: "",
				title: "",
				description: ""
			}
		};
	},
	methods: {
		addCar() {
            let newCar = {brand: this.brand, model: this.model, title: this.title, description: this.description, user: this.$store.state.auth.user};
			this.$axios
				.post("/api/cars/add-new-car/", newCar)
				.then(response => {
                    if (response.data.errors) {
                        this.errors.brand = response.data.errors.brand ? response.data.errors.brand.message : "";
                        this.errors.model = response.data.errors.model ? response.data.errors.model.message : "";
                        this.errors.title = response.data.errors.title ? response.data.errors.title.message : "";
                        this.errors.description = response.data.errors.description ? response.data.errors.description.message : "";
                        return;
                    }
                    this.$router.push("/");
				})
				.catch(err => {
					console.log("ERROR", err);
				});
		}
	}
};
</script>
<style scoped>
.container {
	margin-top: 80px;
	justify-content: flex-start;
	max-width: 340px;
	flex-direction: column;
	text-align: center;
}
.container > * {
	flex: 1 0 1;
	width: 100%;
	box-sizing: border-box;
	margin: 8px 0;
}
input {
	margin: 8px 0;
	display: block;
	padding: 10px;
	width: 100%;
	box-sizing: border-box;
}
.info-error {
    display: block;
    text-align: left;
    color: #ff0000;
    font-size: 12px;
    margin-bottom: 8px;
}
</style>


