<template>
    <section class="container container-search-engine">
		<form class="form">
			<div class="form-group info">
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="brands.length && isReRendered" v-model="brand" :selectTitle="brand" :selectItems="brands" itemToShow="brand"></app-select-with-search-input>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="brand != 'Marka samochodu' && models.length && isReRendered" v-model="model" :selectTitle="model" :selectItems="models" itemToShow="model"></app-select-with-search-input>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="versions.length && isReRendered" v-model="version" :selectTitle="version" :selectItems="versions" itemToShow="version"></app-select-with-search-input>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="countriesOfProd.length && isReRendered" v-model="countryOfProd" :selectTitle="countryOfProd" :selectItems="countriesOfProd" itemToShow="countryName"></app-select-with-search-input>
				</div>
			</div>
            <div class="form-group info">                
				<div class="info-item">
					<div class="form-group">
						<input class="form-input price-input" type="text" placeholder="Cena od" v-model="priceFrom" id="priceFrom" />
						<label for="priceFrom" class="price-input--label"></label>
					</div>
				</div>
				<div class="info-item">
					<div class="form-group">
						<input class="form-input price-input" type="text" placeholder="Cena do" v-model="priceTo" id="priceTo" />
						<label for="priceTo" class="price-input--label"></label>
					</div>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-model="yearOfProdFrom" :selectTitle="yearOfProdFrom" :selectItems="productionsYears" itemToShow="yearOfProd"></app-select-with-search-input>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-model="yearOfProdTo" :selectTitle="yearOfProdTo" :selectItems="productionsYears" itemToShow="yearOfProd"></app-select-with-search-input>
				</div>
            </div>
            <div class="form-group info">
				<div class="info-item">
					<div class="form-group">
						<input class="form-input mileage-input" type="text" placeholder="Przebieg od" v-model="mileageFrom" id="mileageFrom" />
						<label for="mileageFrom" class="mileage-input--label"></label>
					</div>
				</div>
				<div class="info-item">
					<div class="form-group">
						<input class="form-input mileage-input" type="text" placeholder="Przebieg do" v-model="mileageTo" id="mileageTo" />
						<label for="mileageTo" class="mileage-input--label"></label>
					</div>
				</div>
				<div class="info-item">
                    <div class="form-group">
                        <input class="form-input capacity-input" type="text" placeholder="Pojemność skokowa od" v-model="capacityFrom" id="capacityFrom" />
                        <label for="capacityFrom" class="capacity-input--label"></label>
                    </div>
				</div>
				<div class="info-item">
                    <div class="form-group">
                        <input class="form-input capacity-input" type="text" placeholder="Pojemność skokowa do" v-model="capacityTo" id="capacityTo" />
                        <label for="capacityTo" class="capacity-input--label"></label>
                    </div>
				</div>
			</div>
			<div class="form-group info">                
				<div class="info-item">
					<div class="form-group">
						<input class="form-input power-input" type="text" placeholder="Moc od" v-model="powerFrom" id="powerFrom" />
						<label for="powerFrom" class="power-input--label"></label>
					</div>
				</div>                
				<div class="info-item">
					<div class="form-group">
						<input class="form-input power-input" type="text" placeholder="Moc do" v-model="powerTo" id="powerTo" />
						<label for="powerTo" class="power-input--label"></label>
					</div>
				</div>
				<div class="info-item">
					<app-select-with-search-input :autoclose="true" v-if="fuelTypes.length && isReRendered" v-model="fuel" :selectTitle="fuel" :selectItems="fuelTypes" itemToShow="fuelType"></app-select-with-search-input>
				</div>
                <div class="info-item">
                    <app-select-with-search-input :autoclose="true" v-if="colors.length && isReRendered" v-model="color" :selectTitle="color" :selectItems="colors" itemToShow="colorName"></app-select-with-search-input>
                </div>
            </div>
            <button class="toggle-more-btn" @click.prevent="toggleMoreInfo" :class="moreInfoExpanded ? 'more-info-expanded': ''">
                <span v-if="moreInfoExpanded">Pokaż mniej</span>
                <span v-else>Pokaż więcej</span>
                <span class="dropdown-arrow"></span>
            </button>
            <div class="more-info-container" :class="moreInfoExpanded ? 'more-info-expanded': ''">
                <div class="form-group info">
                    <div class="info-item">
                        <app-select-with-search-input :autoclose="true" v-if="driveTypes.length && isReRendered" v-model="drive" :selectTitle="drive" :selectItems="driveTypes" itemToShow="driveType"></app-select-with-search-input>
                    </div>
                    <div class="info-item">
                        <app-select-with-search-input :autoclose="true" v-if="gearboxTypes.length && isReRendered" v-model="gearbox" :selectTitle="gearbox" :selectItems="gearboxTypes" itemToShow="gearboxType"></app-select-with-search-input>
                    </div>
                    <div class="info-item"></div>
                    <div class="info-item"></div>
                </div>            
                <div class="form-group info">
                    <div class="info-item">
                        <app-select-with-search-input :autoclose="true" v-if="doors.length && isReRendered" v-model="numOfDoorsFrom" :selectTitle="numOfDoorsFrom" :selectItems="doors" itemToShow="numOfDoors"></app-select-with-search-input>
                    </div>
                    <div class="info-item">
                        <app-select-with-search-input :autoclose="true" v-if="doors.length && isReRendered" v-model="numOfDoorsTo" :selectTitle="numOfDoorsTo" :selectItems="doors" itemToShow="numOfDoors"></app-select-with-search-input>
                    </div>
                    <div class="info-item">
                        <app-select-with-search-input :autoclose="true" v-if="seats.length && isReRendered" v-model="numOfSeatsFrom" :selectTitle="numOfSeatsFrom" :selectItems="seats" itemToShow="numOfSeats"></app-select-with-search-input>
                    </div>
                    <div class="info-item">
                        <app-select-with-search-input :autoclose="true" v-if="seats.length && isReRendered" v-model="numOfSeatsTo" :selectTitle="numOfSeatsTo" :selectItems="seats" itemToShow="numOfSeats"></app-select-with-search-input>
                    </div>
                </div>			
                <span class="divider"></span>
                <div class="form-group info flex-30">
                    <div class="form-group info-item" v-for="(info, index) in additionalInfo" :key="index">
                        <app-check-box :itemTitle="info.label" v-model="info.value" :checked.sync="info.value"></app-check-box>
                    </div>
                </div>
                <span class="divider"></span>
                <div class="form-group info flex-20">
                    <div class="form-group info-item" v-for="(item, index) in searchEquipment" :key="index">
                        <app-check-box :itemTitle="item.label" v-model="item.value" :checked.sync="item.value"></app-check-box>
                    </div>
                </div>
            </div>
			<button class="form-button-submit" @click.prevent="search">Szukaj</button>
		</form>
    </section>
</template>

<script>
import {mapGetters} from "vuex";

import AppSelectWithSearchInput from "@/components/UI/SelectWithSearchInput";
import AppTagLishItem from "@/components/UI/TagLishItem";
import AppCheckBox from "@/components/UI/CheckBox";
import OverlayScrollbars from "os-vue/overlay-scrollbars";

export default {
	data() {
		return {
			isReRendered: true,
			brand: "Marka samochodu",
			model: "Model samochodu",
			version: "Wersja",
			yearOfProdFrom: "Rok produkcji od",
			yearOfProdTo: "Rok produkcji do",
			productionsYears: [],
			fuel: "Rodzaj paliwa",
			gearbox: "Skrzynia biegów",
			drive: "Napęd",
			mileageFrom: "",
			mileageTo: "",
			vin: "",
			engineCode: "",
			capacityFrom: "",
			capacityTo: "",
			powerFrom: "",
			powerTo: "",
			title: "",
			description: "",
			priceFrom: "",
			priceTo: "",
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
			searchEquipment: {},
			numOfDoorsFrom: "Liczba drzwi od",
			numOfDoorsTo: "Liczba drzwi do",
			doors: [],
			numOfSeatsFrom: "Liczba miejsc od",
			numOfSeatsTo: "Liczba miejsc do",
			seats: [],
			color: "Kolor",
			username: "",
			email: "",
			phone: "",
			location: "",
			lang: {
				days: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "Sb"],
				pickers: ["następne 7 dni", "następne 30 dni", "poprzednie 7 dni", "poprzenie 30 dni"],
				months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
				placeholder: {
					date: "Data pierwszej rejestracji",
					dateRange: "Wybierz przedział czasowy"
				}
			},
			moreInfoExpanded: false
		};
	},
	components: {
		AppSelectWithSearchInput,
		AppTagLishItem,
		AppCheckBox,
		OverlayScrollbars
	},
	computed: {
		...mapGetters(["brands", "equipment", "fuelTypes", "gearboxTypes", "driveTypes", "countriesOfProd", "colors"]),
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
		toggleMoreInfo() {
			this.moreInfoExpanded = !this.moreInfoExpanded;
		},
		search() {
			console.log("searching...");
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

		this.equipment.forEach(equipmentItem => {
			this.searchEquipment[equipmentItem.equipmentName] = {
				label: equipmentItem.equipmentName,
				value: false
			};
		});
	}
};
</script>

<style>
.toggle-more-btn {
	background-color: transparent;
	border: none;
	outline-color: transparent;
	color: #1a2229;
	cursor: pointer;
	margin: 12px 0;
	text-align: right;
	padding: 0;
	transition: color 0.2s linear;
}
.toggle-more-btn .dropdown-arrow {
	border-color: #ecf0f2;
	border-top-color: #1a2229;
	transition: all 0.2s linear;
}
.toggle-more-btn.more-info-expanded .dropdown-arrow {
	transform: rotate(180deg);
}
.toggle-more-btn:hover {
	color: #2980b9;
}
.toggle-more-btn:hover .dropdown-arrow {
	border-top-color: #2980b9;
}
.container-search-engine .info-item {
	width: 22%;
}
.container-search-engine .flex-30 .info-item {
	width: 30%;
}
.container-search-engine .flex-20 .info-item {
	width: 20%;
}
.more-info-container {
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.2s linear;
}
.more-info-container.more-info-expanded {
	max-height: 1200px;
}

@media screen and (max-width: 480px) {
	.container-search-engine .info-item {
		width: 48%;
	}
	.container-search-engine .flex-20 .info-item {
		width: 50%;
	}
	.container-search-engine .flex-30 .info-item {
		width: 48%;
	}
	.more-info-container {
		transition: max-height 0.6s linear;
	}
	.more-info-container.more-info-expanded {
		max-height: 2000px;
	}
}
@media screen and (max-width: 374px) {
	.container-search-engine .info-item,
	.container-search-engine .flex-30 .info-item {
		width: 100%;
	}
	.more-info-container {
		transition: max-height 0.8s linear;
	}
	.more-info-container.more-info-expanded {
		max-height: 2400px;
	}
}
</style>
