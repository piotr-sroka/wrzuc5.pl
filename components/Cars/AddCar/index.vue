<template>
  <section class="container">
    <form class="form">
		<div class="form-group">
			<div class="form-group--column info-text">
				<select class="form-input" v-model="brand" @change="brandChanged">
					<option value="" disabled selected>Marka pojazdu</option>
					<option v-for="(brand, index) in brands" :value="brand.brand" :key="index">{{brand.brand}}</option>
					<option value="other">Inny</option>
				</select>
				<span class="info-message form-message-error" v-if="errors.brand !=='' ">{{errors.brand}}</span>

				<select class="form-input" v-model="model" :disabled="this.brand === '' || !this.models.length" @change="modelChanged">
					<option value="" disabled :selected="!this.models.length">Model pojazdu</option>
					<option v-for="(model, index) in this.models" :value="model" :key="index">{{model}}</option>
					<option value="other">Inny</option>
				</select>
				<span class="info-message form-message-error" v-if="errors.model !=='' ">{{errors.model}}</span>

				<select class="form-input" v-model="version" v-if="this.versions.length">
					<option value="" disabled :selected="!this.version.length">Wersja</option>
					<option v-for="(version, index) in this.versions" :value="version" :key="index">{{version}}</option>
				</select>
				<span class="info-message form-message-error" v-if="errors.version !=='' && this.versions.length ">{{errors.version}}</span>

				<input class="form-input" type="text" placeholder="Tytuł Ogłoszenia" v-model="title">
				<span class="info-message form-message-error" v-if="errors.title !=='' ">{{errors.title}}</span>

				<input class="form-input" type="text" placeholder="Opis" v-model="description">
				<span class="info-message form-message-error" v-if="errors.description !=='' ">{{errors.description}}</span>
			</div>
			<div class="form-group--column info-files">
				<div class="drop-files-area">
					<input id="drop-input" class="drop-input" type="file" @change="onFileSelect" multiple accept="image/x-png,image/jpeg">
					<label class="drop-input--label" for="drop-input">Dodaj zdjęcia</label>
				</div>
				<div class="images-thumbs">
					<div class="thumb-container" v-for="(image, index) in images" :key="index">
						<span class="progress-bar" v-if="image.isLoading"></span>
						<img class="thumb" :src="image.src" :alt="image.title" v-if="!image.isLoading">
					</div>
				</div>
			</div>
		</div>
        <button class="form-button-submit" @click.prevent="addCar">Dodaj ogłoszenie</button>
    </form>
  </section>
</template>
<script>
import {mapGetters} from "vuex";
import AppImageThumb from "@/components/Cars/AddCar/ImageThumb";

export default {
	data() {
		return {
			brand: "",
			model: "",
			version: "",
			title: "",
			description: "",
			errors: {
				brand: "",
				model: "",
				version: "",
				title: "",
				description: ""
			},
			images: []
		};
	},
	computed: {
		...mapGetters(["brands"]),
		models() {
			if (this.brands.filter(brand => brand.brand === this.brand)[0]) {
				return this.brands.filter(brand => brand.brand === this.brand)[0].models;
			}
			return [];
		},
		versions() {
			let selectedBrand = this.brands.filter(brand => brand.brand === this.brand)[0];
			if (selectedBrand && selectedBrand.versions && selectedBrand.versions[this.model]) {
				return selectedBrand.versions[this.model];
			}
			return [];
		}
	},
	methods: {
		addCar() {
			let newCar = {brand: this.brand, model: this.model, version: this.version, title: this.title, description: this.description, user: this.$store.state.auth.user};
			console.log(newCar);
			// this.$axios
			// 	.post("/api/cars/add-new-car/", newCar)
			// 	.then(response => {
			// 		if (response.data.errors) {
			// 			this.errors.brand = response.data.errors.brand ? response.data.errors.brand.message : "";
			// 			this.errors.model = response.data.errors.model ? response.data.errors.model.message : "";
			// 			this.errors.version = response.data.errors.version ? response.data.errors.version.message : "";
			// 			this.errors.title = response.data.errors.title ? response.data.errors.title.message : "";
			// 			this.errors.description = response.data.errors.description ? response.data.errors.description.message : "";
			// 			return;
			// 		}
			// 		this.$router.push("/");
			// 	})
			// 	.catch(err => {
			// 		console.log("ERROR", err);
			// 	});
		},
		brandChanged() {
			this.model = "";
		},
		modelChanged() {
			this.version = "";
		},
		onFileSelect(e) {
			let files = Array.from(e.target.files);
			files.forEach(file => {
				this.getSignedRequest(file);
			});
		},
		getSignedRequest(file) {
			let fileInfo = {fileName: file.name, fileType: file.type};
			this.$axios
				.post("/api/images/upload/", fileInfo)
				.then(response => {
					let thumb = {src:"", title:"", isLoading:true};
					this.images.push(thumb);
					this.uploadFile(file, response.data.signedRequest, response.data.url, thumb);
				})
				.catch(err => {
					console.log(err);
				});
		},
		uploadFile(file, signedRequest, url, thumb) {
			this.$axios.put(signedRequest, file).then(res => {
				thumb.src = url;
				thumb.title = res.config.data.name;
				thumb.isLoading = false;
			});
		}
	}
};
</script>
<style scoped>
.container {
	padding: 50px;
	margin: 0 auto;
	max-width: 900px;
}
.form .form-group {
	display: flex;
	justify-content: space-between;
}
.form .form-group .form-group--column {
	flex: 1;
}
.form-group--column.info-text {
	margin-right: 20px;
}
.drop-files-area {
	background-color: #bdc3c7;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
}
.drop-input {
	position: absolute;
	opacity: 0;
	left: -9999999px;
	top: -9999999px;
}
.drop-input--label {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.drop-input--label::before {
	font-family: "Flat-UI-Pro-Icons";
	content: "\e608";
	display: inline-block;
	width: 40px;
	height: 40px;
	font-size: 20px;
	line-height: 40px;
	vertical-align: middle;
	color: #2f4154;
	opacity: 0.7;
	text-align: center;
}
</style>


