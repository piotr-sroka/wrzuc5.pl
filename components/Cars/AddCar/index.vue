<template>
  <section class="container">
		<form class="form">
			<div class="form-group info">
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="brands.length && isReRendered" v-model="brand" :selectTitle="brand" :selectItems="brands" itemToShow="brand"></app-select-with-search-input>
					<span class="info-message form-message-error" v-if="errors.brand !=='' ">{{ errors.brand }}</span>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="brand != 'Marka samochodu' && models.length && isReRendered" v-model="model" :selectTitle="model" :selectItems="models" itemToShow="model"></app-select-with-search-input>
					<span class="info-message form-message-error" v-if="errors.model !=='' && brand != 'Marka samochodu'">{{ errors.model }}</span>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="versions.length && isReRendered" v-model="version" :selectTitle="version" :selectItems="versions" itemToShow="version"></app-select-with-search-input>
					<span class="info-message form-message-error" v-if="errors.version !=='' && versions.length ">{{ errors.version }}</span>
				</div>
			</div>
			<div class="form-group info">
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-model="yearOfProd" :selectTitle="yearOfProd" :selectItems="productionsYears" itemToShow="yearOfProd"></app-select-with-search-input>
					<span class="info-message form-message-error" v-if="errors.yearOfProd !== ''">{{ errors.yearOfProd }}</span>
				</div>
				<div class="info-item">
					<div class="form-group">
						<input class="form-input mileage-input" type="text" placeholder="Przebieg" v-model="mileage" id="mileage" />
						<label for="mileage" class="mileage-input--label"></label>
					</div>
					<span class="info-message form-message-error" v-if="errors.mileage !=='' ">{{ errors.mileage }}</span>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="fuelTypes.length && isReRendered" v-model="fuel" :selectTitle="fuel" :selectItems="fuelTypes" itemToShow="fuelType"></app-select-with-search-input>
					<span class="info-message form-message-error" v-if="errors.fuel !== ''">{{ errors.fuel }}</span>
				</div>
			</div>
			<div class="form-group info">
				<div class="info-item">
					<div class="form-group">
						<input class="form-input price-input" type="text" placeholder="Cena" v-model="price" id="price" />
						<label for="price" class="price-input--label"></label>
					</div>
					<span class="info-message form-message-error" v-if="errors.price !=='' ">{{ errors.price }}</span>
				</div>
			</div>
			<div class="form-group info">
				<div class="info-item">
					<div class="form-group">
						<input class="form-input" type="text" placeholder="VIN" v-model="vin" />
					</div>
				</div>
				<div class="info-item">
					<div class="form-group">
						<input class="form-input" type="text" placeholder="Tytuł Ogłoszenia" v-model="title" />
					</div>
				</div>
				<div class="info-item full-width">
					<div class="form-group">
						<textarea class="form-input form-textarea" type="text" placeholder="Dodatkowy opis" v-model="description"></textarea>
					</div>
				</div>
				<div class="info-item">
					<div class="form-group">
						<input class="form-input" type="text" placeholder="Kod silnika" v-model="engineCode" />
					</div>
				</div>
				<div class="info-item">
					<div class="form-group">
						<input class="form-input capacity-input" type="text" placeholder="Pojemność skokowa" v-model="capacity" id="capacity" />
						<label for="capacity" class="capacity-input--label"></label>
					</div>
				</div>
				<div class="info-item">
					<div class="form-group">
						<input class="form-input power-input" type="text" placeholder="Moc" v-model="power" id="power" />
						<label for="power" class="power-input--label"></label>
					</div>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="gearboxTypes.length && isReRendered" v-model="gearbox" :selectTitle="gearbox" :selectItems="gearboxTypes" itemToShow="gearboxType"></app-select-with-search-input>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="driveTypes.length && isReRendered" v-model="drive" :selectTitle="drive" :selectItems="driveTypes" itemToShow="driveType"></app-select-with-search-input>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="countriesOfProd.length && isReRendered" v-model="countryOfProd" :selectTitle="countryOfProd" :selectItems="countriesOfProd" itemToShow="countryName"></app-select-with-search-input>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="doors.length && isReRendered" v-model="numOfDoors" :selectTitle="numOfDoors" :selectItems="doors" itemToShow="numOfDoors"></app-select-with-search-input>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="seats.length && isReRendered" v-model="numOfSeats" :selectTitle="numOfSeats" :selectItems="seats" itemToShow="numOfSeats"></app-select-with-search-input>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="colors.length && isReRendered" v-model="color" :selectTitle="color" :selectItems="colors" itemToShow="colorName"></app-select-with-search-input>
				</div>
				<div class="info-item">
					<div class="form-group">
						<no-ssr>
							<date-picker :lang="lang" v-model="firstRegistration"></date-picker>
						</no-ssr>
					</div>
				</div>
			</div>				
			<div class="form-group info">
				<div class="form-group info-item" v-for="(info, index) in additionalInfo" :key="index">
					<app-check-box :itemTitle="info.label" v-model="info.value" :checked.sync="info.value"></app-check-box>
				</div>
			</div>
			<div class="form-group info">
				<div class="info-item">
					<app-select-with-search-input :autoclose="false" v-if="equipment.length && isReRendered" selectTitle="Wyposażenie" :selectItems="equipment" itemToShow="equipmentName" @input="onEquipmentInput"></app-select-with-search-input>
				</div>
				<div v-if="carEquipment.length" class="info-item full-width">
					<app-tag-lish-item v-for="(item, index) in carEquipment" :key="index" :item="item" @removeTagLishItem="onTagLishItemRemoveClick"></app-tag-lish-item>
				</div>
			</div>

			<div class="form-group info">
				<div class="drop-files-area" :class="isDragOver ? 'dragOver' : ''" @dragover.prevent.stop="onDragOver" @dragleave.prevent.stop="onDragLeave" @drop.prevent.stop="onDrop">
					<input id="drop-input" class="drop-input" type="file" @change="onFileSelect" multiple accept="image/x-png, image/jpeg, image/png" />
					<label class="drop-input--label" for="drop-input">Dodaj zdjęcia</label>
				</div>
				<div class="images-thumbs">
					<app-image-thumb v-for="(image, index) in images" :key="index" :image="image.thumb" @click.native="editedCar ? addToRemove($event, image) : removeImage(image)"></app-image-thumb>
				</div>
			</div>
			<div class="form-group info">
				<div class="info-item info-item--contact">
					<div class="form-group">
						<input class="form-input username-input" type="text" placeholder="Twoje imię" v-model="username" id="username" />
						<label for="username" class="username-input--label"></label>
					</div>
				</div>
				<div class="info-item info-item--contact">
					<div class="form-group">
						<input class="form-input email-input" type="email" placeholder="Twój email" v-model="email" id="email" />
						<label for="email" class="email-input--label"></label>
					</div>
					<span class="info-message form-message-error" v-if="errors.email">{{ errors.email }}</span>
				</div>
				<div class="info-item info-item--contact">
					<div class="form-group">
						<input class="form-input phone-input" type="tel" placeholder="Twój numer telefonu" v-model="phone" id="phone" />
						<label for="phone" class="phone-input--label"></label>
					</div>
				</div>
				<div class="info-item info-item--contact">
					<div class="form-group">
						<input class="form-input location-input" type="text" placeholder="Twoja lokalizacja" v-model="location" id="location" @input="findPlace" />
						<label for="location" class="location-input--label"></label>
					</div>
					<span class="info-message form-message-error" v-if="errors.location">{{ errors.location }}</span>
					<div data-simplebar class="select-scrolled places" v-if="places.length && isLocationOpened">
						<div>
							<p class="place" v-for="(place, index) in places" :key="index" @click="selectLocation(place)">
								<span class="place-name">{{place.name}}</span>
								<span class="place-description">{{place.description}}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<button class="form-button-submit" @click.prevent="addCar">{{editedCar ? "Zapisz ogłoszenie" : "Dodaj ogłoszenie"}}</button>
		</form>
	</section>
</template>
<script>
import {mapGetters} from "vuex";
import AppImageThumb from "@/components/Cars/AddCar/ImageThumb";
import AppSelectWithSearchInput from "@/components/UI/SelectWithSearchInput";
import AppTagLishItem from "@/components/UI/TagLishItem";
import AppCheckBox from "@/components/UI/CheckBox";
import path from "path";
import OverlayScrollbars from "os-vue/overlay-scrollbars";
import debounce from "debounce";

export default {
	props: ["edited-car", "isForSearch"],
	components: {
		AppImageThumb,
		AppSelectWithSearchInput,
		AppTagLishItem,
		AppCheckBox,
		OverlayScrollbars
	},
	data() {
		return {
			brand: "Marka samochodu",
			model: "Model samochodu",
			version: "Wersja",
			yearOfProd: "Rok produkcji",
			productionsYears: [],
			fuel: "Rodzaj paliwa",
			gearbox: "Skrzynia biegów",
			drive: "Napęd",
			mileage: "",
			vin: "",
			engineCode: "",
			capacity: "",
			power: "",
			title: "",
			description: "",
			price: "",
			countryOfProd: "Kraj pochodzenia",
			firstRegistration: "",
			additionalInfo: {
				registerInPoland: {
					label: "Zarejestrowany w Polsce",
					value: false
				},
				firstOwner: {
					label: "Pierwszy właściciel",
					value: false
				},
				damaged: {
					label: "Uszkodzony",
					value: false
				},
				dpf: {
					label: "Filtr cząstek stałych (DPF)",
					value: false
				},
				noAccidents: {
					label: "Bezwypadkowy",
					value: false
				},
				servisedInAso: {
					label: "Serwisowany w ASO",
					value: false
				},
				registerAsAntique: {
					label: "Zarejestrowany jako zabytek",
					value: false
				},
				tunned: {
					label: "Tuningowany",
					value: false
				},
				homologated: {
					label: "Posiada homologację",
					value: false
				}
			},
			numOfDoors: "Liczba drzwi",
			doors: [],
			numOfSeats: "Liczba miejsc",
			seats: [],
			color: "Kolor",
			carEquipment: [],
			username: "",
			email: "",
			phone: "",
			location: "",
			errors: {
				brand: "",
				model: "",
				version: "",
				fuel: "",
				price: "",
				yearOfProd: "",
				mileage: "",
				location: "",
				email: ""
			},
			images: [],
			isDragOver: false,
			MAX_IMAGE_DIMENSION: 1024,
			isReRendered: true,
			lang: {
				days: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "Sb"],
				pickers: ["następne 7 dni", "następne 30 dni", "poprzednie 7 dni", "poprzenie 30 dni"],
				months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
				placeholder: {
					date: "Data pierwszej rejestracji",
					dateRange: "Wybierz przedział czasowy"
				}
			},
			isLocationOpened: false,
			places: [],
			selectedPlace: null,
			imagesToRemove: []
		};
	},
	computed: {
		...mapGetters(["brands", "equipment", "fuelTypes", "gearboxTypes", "driveTypes", "countriesOfProd", "colors", "user"]),
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
				gearbox: this.gearbox === "Skrzynia biegów" ? "" : this.gearbox,
				countryOfProd: this.countryOfProd === "Kraj pochodzenia" ? "" : this.countryOfProd,
				firstRegistration: this.firstRegistration,
				registerInPoland: this.additionalInfo.registerInPoland.value,
				firstOwner: this.additionalInfo.firstOwner.value,
				damaged: this.additionalInfo.damaged.value,
				dpf: this.additionalInfo.dpf.value,
				noAccidents: this.additionalInfo.noAccidents.value,
				servisedInAso: this.additionalInfo.servisedInAso.value,
				registerAsAntique: this.additionalInfo.registerAsAntique.value,
				tunned: this.additionalInfo.tunned.value,
				homologated: this.additionalInfo.homologated.value,
				drive: this.drive === "Napęd" ? "" : this.drive,
				title: this.title,
				description: this.description,
				engineCode: this.engineCode,
				price: this.price,
				mileage: this.mileage,
				power: this.power,
				numOfDoors: this.numOfDoors === "Liczba drzwi" ? "" : this.numOfDoors,
				numOfSeats: this.numOfSeats === "Liczba miejsc" ? "" : this.numOfSeats,
				yearOfProd: this.yearOfProd === "Rok produkcji" ? "" : this.yearOfProd,
				color: this.color === "Kolor" ? "" : this.color,
				equipment: this.carEquipment,
				user: this.$store.state.auth.user,
				images: this.images,
				username: this.username,
				email: this.email,
				phone: this.phone,
				location: this.selectedPlace,
				imagesToRemove: this.imagesToRemove
			};
			console.log(newCar);
			let url = this.editedCar ? "/api/cars/edit/" + this.editedCar._id : "/api/cars/add-new-car/";
			this.$axios
				.post(url, newCar)
				.then(response => {
					if (response.data.errors) {
						console.log(response.data.errors);
						this.errors.brand = response.data.errors.brand ? response.data.errors.brand.message : "";
						this.errors.model = response.data.errors.model ? response.data.errors.model.message : "";
						this.errors.version = response.data.errors.version ? response.data.errors.version.message : "";
						this.errors.fuel = response.data.errors.fuel ? response.data.errors.fuel.message : "";
						this.errors.price = response.data.errors.price ? response.data.errors.price.message : "";
						this.errors.mileage = response.data.errors.mileage ? response.data.errors.mileage.message : "";
						this.errors.yearOfProd = response.data.errors.yearOfProd ? response.data.errors.yearOfProd.message : "";
						this.errors.location = response.data.errors.location ? response.data.errors.location.message : "";
						this.errors.email = response.data.errors.email ? response.data.errors.email.message : "";
						return;
					}
					if (this.editedCar) {
						this.$router.push("/cars/" + this.editedCar._id);
					} else {
						this.$router.push("/");
					}
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
		addToRemove(e, image) {
			e.target.classList.toggle("selected-to-remove");
			if (e.target.classList.contains("selected-to-remove")) {
				this.imagesToRemove.push(image);
			} else {
				this.imagesToRemove.splice(this.imagesToRemove.indexOf(image), 1);
			}
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
		},
		findPlace(e) {
			this.$axios
				.post("/api/places/", {placeToFind: encodeURI(e.target.value)})
				.then(response => {
					console.log(response);
					this.places = [];
					response.data.predictions.forEach(place => {
						this.places.push({placeId: place.place_id, name: place.structured_formatting.main_text, description: place.description});
					});
					this.isLocationOpened = true;
				})
				.catch(err => {
					console.log(err);
				});
		},
		selectLocation(place) {
			this.location = place.description;
			this.isLocationOpened = false;
			this.selectedPlace = place;
		},
		parseForEdit() {
			this.brand = this.editedCar.brand || this.brand;
			this.model = this.editedCar.model || this.model;
			this.version = this.editedCar.version || this.version;
			this.yearOfProd = this.editedCar.yearOfProd || this.yearOfProd;
			this.fuel = this.editedCar.fuel || this.fuel;
			this.gearbox = this.editedCar.gearbox || this.gearbox;
			this.drive = this.editedCar.drive || this.drive;
			this.mileage = this.editedCar.mileage || this.mileage;
			this.vin = this.editedCar.vin || this.vin;
			this.engineCode = this.editedCar.engineCode || this.engineCode;
			this.capacity = this.editedCar.capacity || this.capacity;
			this.power = this.editedCar.power || this.power;
			this.title = this.editedCar.title || this.title;
			this.description = this.editedCar.description || this.description;
			this.price = this.editedCar.price || this.price;
			this.countryOfProd = this.editedCar.countryOfProd || this.countryOfProd;
			this.firstRegistration = this.editedCar.firstRegistration || this.firstRegistration;
			this.numOfDoors = this.editedCar.numOfDoors || this.numOfDoors;
			this.numOfSeats = this.editedCar.numOfSeats || this.numOfSeats;
			this.color = this.editedCar.color || this.color;
			this.username = this.editedCar.username || this.username;
			this.email = this.editedCar.email || this.email;
			this.phone = this.editedCar.phone || this.phone;
			this.images = this.editedCar.images || this.images;
			if (this.editedCar.location) this.selectLocation(this.editedCar.location);
			this.additionalInfo.registerInPoland.value = this.editedCar.registerInPoland;
			this.additionalInfo.firstOwner.value = this.editedCar.firstOwner;
			this.additionalInfo.damaged.value = this.editedCar.damaged;
			this.additionalInfo.dpf.value = this.editedCar.dpf;
			this.additionalInfo.noAccidents.value = this.editedCar.noAccidents;
			this.additionalInfo.servisedInAso.value = this.editedCar.servisedInAso;
			this.additionalInfo.registerAsAntique.value = this.editedCar.registerAsAntique;
			this.additionalInfo.tunned.value = this.editedCar.tunned;
			this.additionalInfo.homologated.value = this.editedCar.homologated;
			this.editedCar.equipment.forEach(eqItem => {
				this.onEquipmentInput(eqItem.equipmentName, "Wyposażenie");
			});
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
			if (data === "brand" || data === "model" || data === "fuel") {
				this.isReRendered = false;
				this.$nextTick(() => {
					this.isReRendered = true;
				});
			}
		});
		let currentYear = new Date().getFullYear();
		for (let i = currentYear; i > 1900; i--) {
			this.productionsYears.push({yearOfProd: i});
		}
		for (let i = 0; i < 10; i++) {
			this.doors.push({numOfDoors: i + 1});
			this.seats.push({numOfSeats: i + 1});
		}
	},
	created() {
		this.findPlace = debounce(this.findPlace, 500);
		if (this.editedCar) {
			this.parseForEdit();
		}
	}
};
</script>
<style>
.container {
	margin: 0 auto;
	max-width: 900px;
}
.form .form-group {
	display: flex;
	justify-content: space-between;
}
.form-group.info {
	flex-wrap: wrap;
}
.info-item {
	width: 30%;
}
.info-item.full-width {
	width: 100%;
}
.info-item.info-item--contact {
	width: 49%;
	position: relative;
}
.form-textarea {
	height: 220px;
	resize: none;
}
.form .form-group .form-group--column {
	flex: 1;
}
.form-group--column.info-text {
	margin-right: 20px;
}
.drop-files-area {
	background-color: #bdc3c7;
	color: #2c3e50;
	width: 100%;
	height: 140px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	margin-top: 12px;
	transition: all 0.2s linear;
}
.drop-files-area.dragOver,
.drop-files-area:hover {
	background-color: #2c3e50;
	color: #edeff1;
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
.drop-input--label::before,
.username-input--label::before,
.email-input--label::before,
.phone-input--label::before,
.location-input--label::before {
	font-family: "Flat-UI-Pro-Icons";
}
.drop-input--label::before {
	content: "\e645";
	display: inline-block;
	width: 60px;
	height: 60px;
	font-size: 40px;
	line-height: 60px;
	vertical-align: middle;
	color: #2c3e50;
	opacity: 0.7;
	text-align: center;
	transition: all 0.2s linear;
}
.drop-files-area.dragOver .drop-input--label::before,
.drop-files-area:hover .drop-input--label::before {
	color: #edeff1;
}
.username-input,
.email-input,
.phone-input,
.location-input,
.price-input,
.mileage-input,
.capacity-input,
.power-input {
	padding-right: 40px;
	position: relative;
}
.username-input--label,
.email-input--label,
.phone-input--label,
.location-input--label,
.price-input--label,
.mileage-input--label,
.capacity-input--label,
.power-input--label {
	position: relative;
}
.username-input--label::before,
.email-input--label::before,
.phone-input--label::before,
.location-input--label::before,
.price-input--label::before,
.mileage-input--label::before,
.capacity-input--label::before,
.power-input--label::before {
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
	color: #1a2229;
	opacity: 0.7;
	transition: all 0.2s linear;
}
.form-input:focus + .username-input--label::before,
.form-input:focus + .email-input--label::before,
.form-input:focus + .phone-input--label::before,
.form-input:focus + .location-input--label::before,
.form-input:focus + .price-input--label::before,
.form-input:focus + .mileage-input--label::before,
.form-input:focus + .capacity-input--label::before,
.form-input:focus + .power-input--label::before {
	opacity: 1;
}
.price-input--label::before {
	content: "PLN";
}
.mileage-input--label::before {
	content: "km";
}
.capacity-input--label::before {
	content: "cm\00B3";
}
.power-input--label::before {
	content: "KM";
}
.username-input--label::before {
	content: "\e631";
}
.email-input--label::before {
	content: "\e632";
}
.phone-input--label::before {
	content: "\e621";
}
.location-input--label::before {
	content: "\e627";
}
.mx-datepicker {
	font: inherit;
	width: 100%;
}
.places {
	font-size: 0.9em;
	background-color: #ffffff;
	border-radius: 6px;
	position: absolute;
	width: 100%;
	top: 0;
	margin-top: 52px;
}
.place {
	cursor: pointer;
	line-height: 1.5em;
	padding: 4px 10px;
}
.place:hover {
	background-color: #2c3e50;
	color: #ffffff;
}
.place-name {
	font-size: 1em;
	font-weight: bold;
	display: block;
}
.place-description {
	font-size: 0.9em;
	display: block;
}

@media screen and (max-width: 480px) {
	.form {
		padding: 5px;
	}
	.info-item,
	.info-item.info-item--contact {
		width: 100%;
	}
}
</style>


