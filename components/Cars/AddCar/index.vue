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

				<input class="form-input" type="text" placeholder="Cena" v-model="price">
				<span class="info-message form-message-error" v-if="errors.price !=='' ">{{errors.price}}</span>
			</div>
			<div class="form-group--column info-files">
				<div class="drop-files-area" :class="isDragOver ? 'dragOver' : ''" @dragover.prevent.stop="onDragOver" @dragleave.prevent.stop="onDragLeave" @drop.prevent.stop="onDrop">
					<input id="drop-input" class="drop-input" type="file" @change="onFileSelect" multiple accept="image/x-png,image/jpeg,image/png">
					<label class="drop-input--label" for="drop-input">Dodaj zdjęcia</label>
				</div>
				<div class="images-thumbs">
					<app-image-thumb v-for="(image, index) in images" :key="index" :image="image.thumb" @click.native="removeImage(image)"></app-image-thumb>
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
import path from "path";

export default {
	components: {
		AppImageThumb
	},
	data() {
		return {
			brand: "",
			model: "",
			version: "",
			title: "",
			description: "",
			price: "",
			errors: {
				brand: "",
				model: "",
				version: "",
				title: "",
				description: "",
				price: ""
			},
			images: [],
			isDragOver: false,
			MAX_IMAGE_DIMENSION: 1024
		};
	},
	computed: {
		...mapGetters(["brands", "user"]),
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
		onDragOver() {
			this.isDragOver = true;
		},
		onDragLeave() {
			this.isDragOver = false;
		},
		onDrop(e) {
			this.isDragOver = false;
			this.checkFilesAndResize(e.target.files || e.dataTransfer.files);
		},
		addCar() {
			let newCar = {brand: this.brand, model: this.model, version: this.version, title: this.title, description: this.description, price: this.price, user: this.$store.state.auth.user, images: this.images};
			console.log(newCar);
			this.$axios
				.post("/api/cars/add-new-car/", newCar)
				.then(response => {
					if (response.data.errors) {
						console.log(response.data.errors);
						this.errors.brand = response.data.errors.brand ? response.data.errors.brand.message : "";
						this.errors.model = response.data.errors.model ? response.data.errors.model.message : "";
						this.errors.version = response.data.errors.version ? response.data.errors.version.message : "";
						this.errors.title = response.data.errors.title ? response.data.errors.title.message : "";
						this.errors.description = response.data.errors.description ? response.data.errors.description.message : "";
						this.errors.price = response.data.errors.price ? response.data.errors.price.message : "";
						return;
					}
					this.$router.push("/");
				})
				.catch(err => {
					console.log("ERROR", err);
				});
		},
		brandChanged() {
			this.model = "";
		},
		modelChanged() {
			this.version = "";
		},
		onFileSelect(e) {
			this.checkFilesAndResize(e.target.files);
		},
		checkFilesAndResize(files) {
			let filesArray = Array.from(files);
			filesArray.splice(20, filesArray.length - 5);
			Array.from(filesArray).forEach(file => {
				let canvas = document.createElement("CANVAS");
				let ctx = canvas.getContext("2d");
				let image = new Image();
				let newDimension = {width: this.MAX_IMAGE_DIMENSION, height: this.MAX_IMAGE_DIMENSION};
				image.onload = e => {
					let ratio = 1;
					if (image.width < image.height) {
						ratio = image.width / image.height;
						newDimension = {width: this.MAX_IMAGE_DIMENSION * ratio, height: this.MAX_IMAGE_DIMENSION};
					}
					if (image.width > image.height) {
						ratio = image.height / image.width;
						newDimension = {width: this.MAX_IMAGE_DIMENSION, height: this.MAX_IMAGE_DIMENSION * ratio};
					}
					canvas.width = newDimension.width;
					canvas.height = newDimension.height;
					ctx.drawImage(image, 0, 0, newDimension.width, newDimension.height);
					this.getSignedRequest({file: file, fileData: canvas.toDataURL(file.type)});
				};
				image.src = URL.createObjectURL(file);
			});
		},
		getSignedRequest(config) {
			let file = config.file;
			let fileData = config.fileData;
			let fileExt = path.extname(file.name);
			let fileName = path.basename(file.name, fileExt);
			let fileInfo = {fileName: fileName, fileExt: fileExt, fileType: file.type, directory: this.user};
			this.$axios
				.post("/api/images/upload/", fileInfo)
				.then(response => {
					let thumb = {src: "", title: "", isLoading: true};
					this.images.push({thumb: thumb, fileKey: response.data.key});
					this.uploadFile(fileData, fileName, response.data.signedRequest, response.data.url, thumb, file.type);
				})
				.catch(err => {
					console.log(err);
				});
		},
		uploadFile(fileData, fileName, signedRequest, url, thumb, type) {
			this.urltoFile(fileData, fileName).then(file => {
				this.$axios.put(signedRequest, file).then(res => {
					thumb.src = url;
					thumb.title = res.config.data.name;
					thumb.isLoading = false;
				});
			});
		},
		removeImage(image) {
			let urlInfo = {key: image.fileKey, url: image.thumb.src};
			this.$axios
				.post("/api/images/remove/", urlInfo)
				.then(response => {
					if (response.statusText === "OK") {
						this.images.splice(this.images.indexOf(image), 1);
					}
				})
				.catch(err => {
					console.log(err);
				});
		},
		urltoFile(url, filename, mimeType) {
			mimeType = mimeType || (url.match(/^data:([^;]+);/) || "")[1];
			return fetch(url)
				.then(function(res) {
					return res.arrayBuffer();
				})
				.then(function(buf) {
					return new File([buf], filename, {type: mimeType});
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
.drop-files-area.dragOver {
	opacity: 0.6;
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


