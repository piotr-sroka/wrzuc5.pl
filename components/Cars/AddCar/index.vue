<template>
  <section class="container">
    <form class="form">
      <div class="form-group">
        <div class="form-group--column info-text">
          <app-select-with-search-input
            v-model="brand"
            :selectTitle="brand"
            :selectItems="brands"
            itemToShow="brand"
          ></app-select-with-search-input>
          <span class="info-message form-message-error" v-if="errors.brand !=='' ">{{errors.brand}}</span>

          <app-select-with-search-input
            v-if="brand != 'Marka samochodu' && models.length && isReRendered"
            v-model="model"
            :selectTitle="model"
            :selectItems="models"
            itemToShow="model"
          ></app-select-with-search-input>
          <span
            class="info-message form-message-error"
            v-if="errors.model !=='' && brand != 'Marka samochodu'"
          >{{errors.model}}</span>

          <app-select-with-search-input
            v-if="versions.length && isReRendered"
            v-model="version"
            :selectTitle="version"
            :selectItems="versions"
            itemToShow="version"
          ></app-select-with-search-input>
          <span
            class="info-message form-message-error"
            v-if="errors.version !=='' && versions.length "
          >{{errors.version}}</span>

          <app-select-with-search-input
            v-if="productionsYears.length && isReRendered"
            v-model="yearOfProd"
            :selectTitle="yearOfProd"
            :selectItems="productionsYears"
            itemToShow="yearOfProd"
          ></app-select-with-search-input>
          <span class="info-message form-message-error" v-if="errors.yearOfProd !== ''">{{errors.yearOfProd}}</span>

          <div class="form-group">
            <input
              class="form-input mileage-input"
              type="text"
              placeholder="Przebieg"
              v-model="mileage"
              id="mileage"
            />
            <label for="mileage" class="mileage-input--label"></label>
          </div>
          <span class="info-message form-message-error" v-if="errors.mileage !=='' ">{{errors.mileage}}</span>

          <div class="form-group">
            <input class="form-input" type="text" placeholder="VIN" v-model="vin" />
          </div>
          
          <app-select-with-search-input
            v-if="fuelTypes.length && isReRendered"
            v-model="fuel"
            :selectTitle="fuel"
            :selectItems="fuelTypes"
            itemToShow="fuelType"
          ></app-select-with-search-input>
          <span class="info-message form-message-error" v-if="errors.fuel !== ''">{{errors.fuel}}</span>

          <div class="form-group">
            <input class="form-input" type="text" placeholder="Tytuł Ogłoszenia" v-model="title" />
          </div>
          <span class="info-message form-message-error" v-if="errors.title !=='' ">{{errors.title}}</span>

          <div class="form-group">
            <input class="form-input" type="text" placeholder="Opis" v-model="description" />
          </div>
          <span class="info-message form-message-error" v-if="errors.description !=='' ">{{errors.description}}</span>

          <div class="form-group">
            <input class="form-input" type="text" placeholder="Kod silnika" v-model="engineCode" />
          </div>

          <div class="form-group">
            <input
              class="form-input price-input"
              type="text"
              placeholder="Cena"
              v-model="price"
              id="price"
            />
            <label for="price" class="price-input--label"></label>
          </div>
          <span class="info-message form-message-error" v-if="errors.price !=='' ">{{errors.price}}</span>

          <app-select-with-search-input
            v-if="colors.length && isReRendered"
						v-model="color"
            :selectTitle="color"
            :selectItems="colors"
            itemToShow="colorName"
          ></app-select-with-search-input>
          <span class="info-message form-message-error" v-if="errors.color !=='' && colors.length ">{{errors.color}}</span>

          <app-select-with-search-input
            v-if="equipment.length && isReRendered"
            selectTitle="Wyposażenie"
            :selectItems="equipment"
            itemToShow="equipmentName"
            @input="onEquipmentInput"
          ></app-select-with-search-input>
          <span class="info-message form-message-error" v-if="errors.equipment !=='' && equipment.length ">{{errors.equipment}}</span>
          <div v-if="carEquipment.length">
            <app-tag-lish-item v-for="(item, index) in carEquipment" :key="index" :item="item" @removeTagLishItem="onTagLishItemRemoveClick"></app-tag-lish-item>
          </div>
        </div>

        <div class="form-group--column info-files">
          <div
            class="drop-files-area"
            :class="isDragOver ? 'dragOver' : ''"
            @dragover.prevent.stop="onDragOver"
            @dragleave.prevent.stop="onDragLeave"
            @drop.prevent.stop="onDrop"
          >
            <input id="drop-input" class="drop-input" type="file" @change="onFileSelect" multiple accept="image/x-png, image/jpeg, image/png" />
            <label class="drop-input--label" for="drop-input">Dodaj zdjęcia</label>
          </div>
          <div class="images-thumbs">
            <app-image-thumb
              v-for="(image, index) in images"
              :key="index"
              :image="image.thumb"
              @click.native="removeImage(image)"
            ></app-image-thumb>
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
import AppSelectWithSearchInput from "@/components/UI/SelectWithSearchInput";
import AppTagLishItem from "@/components/UI/TagLishItem";
import path from "path";

export default {
	components: {
		AppImageThumb,
		AppSelectWithSearchInput,
		AppTagLishItem
	},
	data() {
		return {
			brand: "Marka samochodu",
			model: "Model samochodu",
      version: "Wersja",
      yearOfProd: "Rok produkcji",
      fuel: "Rodzaj paliwa",
			productionsYears: [],
			mileage: "",
			vin: "",
			engineCode: "",
			title: "",
			description: "",
			price: "",
			color: "Kolor",
			carEquipment: [],
			errors: {
				brand: "",
				model: "",
        version: "",
        fuel: "",
				title: "",
				description: "",
        price: "",
        yearOfProd: "",
				mileage: "",
				equipment: ""
			},
			images: [],
			isDragOver: false,
			MAX_IMAGE_DIMENSION: 1024,
			isReRendered: true
		};
	},
	computed: {
		...mapGetters(["brands", "equipment", "fuelTypes", "colors", "user"]),
		models() {
			let brandModels = [];
			if (this.brands.filter(brand => brand.brand === this.brand)[0]) {
				brandModels = this.brands.filter(brand => brand.brand === this.brand)[0].models;
			}
			return brandModels;
		},
		versions() {
			let selectedBrand = this.brands.filter(brand => brand.brand === this.brand)[0];
			if (selectedBrand && selectedBrand.versions && selectedBrand.versions[this.model]) {
				return selectedBrand.versions[this.model];
			}
			return [];
    },
    yearsOfProd() {
      return this.productionsYears;
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
			let newCar = {
				brand: this.brand === "Marka samochodu" ? "" : this.brand,
				model: this.model === "Model samochodu" ? "" : this.model,
				version: this.version === "Wersja" ? "" : this.version,
				fuel: this.fuel === "Rodzaj paliwa" ? "" : this.fuel,
				title: this.title,
				description: this.description,
				engineCode: this.engineCode,
				price: this.price,
				mileage: this.mileage,
				yearOfProd: this.yearOfProd === "Rok produkcji" ? "" : this.yearOfProd,
				color: this.color === "Kolor" ? "" : this.color,
				equipment: this.carEquipment,
				user: this.$store.state.auth.user,
				images: this.images
			};
			console.log(newCar);
			this.$axios
				.post("/api/cars/add-new-car/", newCar)
				.then(response => {
					if (response.data.errors) {
						console.log(response.data.errors);
						this.errors.brand = response.data.errors.brand ? response.data.errors.brand.message : "";
						this.errors.model = response.data.errors.model ? response.data.errors.model.message : "";
						this.errors.version = response.data.errors.version ? response.data.errors.version.message : "";
						this.errors.fuel = response.data.errors.fuel ? response.data.errors.fuel.message : "";
						this.errors.title = response.data.errors.title ? response.data.errors.title.message : "";
						this.errors.description = response.data.errors.description ? response.data.errors.description.message : "";
						this.errors.price = response.data.errors.price ? response.data.errors.price.message : "";
						this.errors.mileage = response.data.errors.mileage ? response.data.errors.mileage.message : "";
						this.errors.yearOfProd = response.data.errors.yearOfProd ? response.data.errors.yearOfProd.message : "";
						this.errors.equipment = response.data.errors.equipment ? response.data.errors.equipment.message : "";
						return;
					}
					this.$router.push("/");
				})
				.catch(err => {
					console.log("ERROR", err);
				});
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
				let newDimension = {
					width: this.MAX_IMAGE_DIMENSION,
					height: this.MAX_IMAGE_DIMENSION
				};
				image.onload = e => {
					let ratio = 1;
					if (image.width < image.height) {
						ratio = image.width / image.height;
						newDimension = {
							width: this.MAX_IMAGE_DIMENSION * ratio,
							height: this.MAX_IMAGE_DIMENSION
						};
					}
					if (image.width > image.height) {
						ratio = image.height / image.width;
						newDimension = {
							width: this.MAX_IMAGE_DIMENSION,
							height: this.MAX_IMAGE_DIMENSION * ratio
						};
					}
					canvas.width = newDimension.width;
					canvas.height = newDimension.height;
					ctx.drawImage(image, 0, 0, newDimension.width, newDimension.height);
					this.getSignedRequest({
						file: file,
						fileData: canvas.toDataURL(file.type)
					});
				};
				image.src = URL.createObjectURL(file);
			});
		},
		getSignedRequest(config) {
			let file = config.file;
			let fileData = config.fileData;
			let fileExt = path.extname(file.name);
			let fileName = path.basename(file.name, fileExt);
			let fileInfo = {
				fileName: fileName,
				fileExt: fileExt,
				fileType: file.type,
				directory: this.user
			};
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
		},
		onEquipmentInput(value, selectTitle) {
			if (selectTitle === "Wyposażenie") {
				let elToHide = this.equipment.find(el => {
					return el.equipmentName === value;
				});
				this.carEquipment.push(elToHide);
				this.$store.dispatch("hideEquipmentItem", elToHide);
			}
		},
		onTagLishItemRemoveClick(el, equipmentItem) {
			this.carEquipment.splice(this.carEquipment.indexOf(equipmentItem), 1);
			this.$store.dispatch("unhideEquipmentItem", equipmentItem);
		}
	},
	mounted() {
		this.$root.$on("selectChanged", data => {
			if (data === "brand") {
				this.model = "Model samochodu";
			}
			if (data === "model") {
				this.version = "Wersja";
			}
			this.isReRendered = false;
			this.$nextTick(() => {
				this.isReRendered = true;
			});
    });
    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i > 1900; i--) {
      this.productionsYears.push({yearOfProd: i});
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
.price-input, .mileage-input {
	padding-right: 40px;
	position: relative;
}
.price-input--label, .mileage-input--label {
	position: relative;
}
.price-input--label::before, .mileage-input--label::before {
	content: "PLN";
	display: inline-block;
	position: absolute;
	width: 24px;
	height: 24px;
	font-size: 14px;
	line-height: 24px;
	vertical-align: middle;
	left: -35px;
	text-align: center;
	top: 0;
	bottom: 0;
	margin: auto 0;
	color: #2f4154;
	opacity: 0.7;
	transition: all 0.2s linear;
}
.mileage-input--label::before {
  content: "km"
}
</style>


