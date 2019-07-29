<template>
  <section class="car-page">
    <app-gallery :images="carInfo.images" v-if="imagesLoaded && carInfo.images.length"></app-gallery>
    <h3 class="info-title">
      <span class="info-title--tag">{{carInfo.brand}}</span>
      <span class="info-title--tag">{{carInfo.model}}</span>
      <span class="info-title--tag">{{carInfo.version}}</span>
      <span class="info-title--tag title-tag--price">{{carInfo.price}} PLN</span>
    </h3>
    <span class="divider"></span>
    <p class="info-subtitle">Sprzedający</p>
    <article class="info-contact">
      <div class="info-contact--user">
        <p class="info-contact--item info-contact--username" v-if="carInfo.username">{{carInfo.username}}</p>
        <p class="info-contact--item info-contact--email" v-if="carInfo.email"><a :href="`mailto:${carInfo.email}`">{{carInfo.email}}</a></p>
        <p class="info-contact--item info-contact--phone" v-if="carInfo.phone">{{carInfo.phone}}</p>
        <p class="info-contact--item info-contact--location" v-if="carInfo.location">{{carInfo.location.name}}</p>
      </div>
      <div class="info-contact--map">
        <GmapMap :center="{lat:mapInfo.lat, lng:mapInfo.lng}" :zoom="15" map-type-id="terrain" style="width: 500px; height: 240px"></GmapMap>
      </div>
    </article>
    <span class="divider"></span>
    <p class="info-subtitle">Dane pojazdu</p>
    <article class="info-lists">
      <ul class="info-list info-technical">
        <li class="info-list--item" v-for="(item, index) in carInfoDetails.left" :key="index" v-if="item.infoValue">
          <span class="info-item--title">{{item.infoName}}</span>
          <span v-if="item.infoName === 'Pojemność skokowa'">{{item.infoValue}} cm<sup>3</sup></span>
          <span v-else-if="item.infoName === 'Przebieg'">{{item.infoValue}} km</span>
          <span v-else-if="item.infoName === 'Moc silnika'">{{item.infoValue}} KM</sup></span>
          <span v-else>{{item.infoValue}}</span> 
        </li>
      </ul>
      <ul class="info-list info-visual">
        <li class="info-list--item" v-for="(item, index) in carInfoDetails.right" :key="index" v-if="item.infoValue">
          <span class="info-item--title">{{item.infoName}}</span>
          <span>{{item.infoValue}}</span>
        </li>
      </ul>
    </article>
    <div v-if="carInfo.equipment && carInfo.equipment.length">
      <span class="divider divider-light"></span>
      <p class="info-subtitle">Wyposażenie</p>
      <article class="info-equipment">
        <span v-for="(item, index) in carInfo.equipment" :key="index" class="info-equipment--item readonly">{{item.equipmentName}}</span>
      </article>
    </div>
    <div v-if="carInfo.description">
      <span class="divider divider-light"></span>
      <p class="info-subtitle">Opis</p>
      <article class="info-description">{{carInfo.description}}</article>
    </div>
  </section>
</template>
<script>
import AppGallery from "@/components/Cars/CarInfo/Gallery";

export default {
	components: {
		AppGallery
	},
	head() {
		return {
			title: this.pageName
		};
	},
	data() {
		return {
			carInfo: {},
			imagesLoaded: false,
      pageName: "",
      mapInfo: {
        lat: 10,
        lng: 10
      },
      months: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
		};
	},
	computed: {
		carInfoDetails() {
			let info = {left: [], right: []};
			info.left.push({infoName: "Marka samochodu", infoValue: this.carInfo.brand ? this.carInfo.brand : null});
			info.left.push({infoName: "Model samochodu", infoValue: this.carInfo.model ? this.carInfo.model : null});
			info.left.push({infoName: "Wersja", infoValue: this.carInfo.version ? this.carInfo.version : null});
			info.left.push({infoName: "Rok produkcji", infoValue: this.carInfo.yearOfProd ? this.carInfo.yearOfProd : null});
			info.left.push({infoName: "Przebieg", infoValue: this.carInfo.mileage ? this.carInfo.mileage : null});
			info.left.push({infoName: "Kod silnika", infoValue: this.carInfo.engineCode ? this.carInfo.engineCode : null});
			info.left.push({infoName: "Pojemność skokowa", infoValue: this.carInfo.capacity ? this.carInfo.capacity : null});
			info.left.push({infoName: "Moc silnika", infoValue: this.carInfo.power ? this.carInfo.power : null});
			info.left.push({infoName: "Rodzaj paliwa", infoValue: this.carInfo.fuel ? this.carInfo.fuel : null});
			info.left.push({infoName: "Skrzynia biegów", infoValue: this.carInfo.gearbox ? this.carInfo.gearbox : null});
			info.left.push({infoName: "Napęd", infoValue: this.carInfo.drive ? this.carInfo.drive : null});

			info.right.push({infoName: "Kolor", infoValue: this.carInfo.color ? this.carInfo.color : null});
			info.right.push({infoName: "Liczba drzwi", infoValue: this.carInfo.numOfDoors ? this.carInfo.numOfDoors : null});
			info.right.push({infoName: "Liczba miejsc", infoValue: this.carInfo.numOfSeats ? this.carInfo.numOfSeats : null});
			info.right.push({infoName: "Kraj pochodzenia", infoValue: this.carInfo.countryOfProd ? this.carInfo.countryOfProd : null});
			info.right.push({infoName: "Pierwsza rejestracja", infoValue: this.carInfo.firstRegistration ? this.formatDate(this.carInfo.firstRegistration) : null});
			info.right.push({infoName: "Zarejestrowany w Polsce", infoValue: this.carInfo.registerInPoland ? "Tak" : "Nie"});
			info.right.push({infoName: "Pierwszy właściciel", infoValue: this.carInfo.firstOwner ? "Tak" : "Nie"});
			info.right.push({infoName: "Uszkodzony", infoValue: this.carInfo.damaged ? "Tak" : "Nie"});
			info.right.push({infoName: "Bezwypadkowy", infoValue: this.carInfo.noAccidents ? "Tak" : "Nie"});
			info.right.push({infoName: "Serwisowany w ASO", infoValue: this.carInfo.servisedInAso ? "Tak" : "Nie"});
			info.right.push({infoName: "Filtr cząstek stałych (DPF)", infoValue: this.carInfo.dpf ? "Tak" : "Nie"});
			info.right.push({infoName: "Zarejestrowany jako zabytek", infoValue: this.carInfo.registerAsAntique ? "Tak" : "Nie"});
			info.right.push({infoName: "Tuningowany", infoValue: this.carInfo.tunned ? "Tak" : "Nie"});
			info.right.push({infoName: "Posiada homologację", infoValue: this.carInfo.homologated ? "Tak" : "Nie"});
			return info;
		}
	},
	methods: {
    formatDate(date){
      const newDate = new Date(date).toLocaleDateString();
      const day = +newDate.substring(0, newDate.indexOf("."));
      const month = this.months[+newDate.substring(newDate.indexOf(".") + 1, newDate.lastIndexOf(".")) - 1];
      const year = +newDate.substring(newDate.lastIndexOf(".") + 1);
      return `${day} ${month} ${year}`;
    },
		checkPageTitle() {
			if (document && document.title === "" && !this.carInfo.brand) {
				setTimeout(this.checkPageTitle, 100);
			} else {
				document.title = this.carInfo.title || `${this.carInfo.brand} ${this.carInfo.model} ${this.carInfo.version}`;
			}
		},
		loadSavedLocation() {
			const placeId = this.carInfo.location.placeId;
			this.$axios
				.post("/api/place/", {placeId: placeId})
				.then(result => {
          this.mapInfo.lat = result.data.result.geometry.location.lat;
          this.mapInfo.lng = result.data.result.geometry.location.lng;
				})
				.catch(err => {
					console.log(err);
				});
		}
	},
	created() {
		this.$axios
			.get("/api/cars/" + this.$route.params.id)
			.then(result => {
				this.carInfo = result.data;
				this.imagesLoaded = true;
				this.pageName = this.carInfo.title || `${this.carInfo.brand} ${this.carInfo.model} ${this.carInfo.version}`;
				if (this.carInfo.location) {
					this.loadSavedLocation();
				}
			})
			.catch(err => {
				console.log(err);
			});
	},
	mounted() {
		this.checkPageTitle();
	}
};
</script>

<style>
.car-page {
	padding-bottom: 40px;
}
.info-lists,
.info-equipment,
.info-description {
	padding: 0 12px;
	display: flex;
	justify-content: space-between;
	width: 80%;
	font-size: 0.9em;
}
.info-equipment {
	flex-wrap: wrap;
	justify-content: flex-start;
}
.info-equipment--item {
	padding: 8px 12px;
	border: 1px solid #2c3e50;
	border-radius: 6px;
	display: inline-block;
	margin-right: 8px;
	margin-bottom: 8px;
	font-size: 0.9em;
}
.info-title {
	margin: 16px 0;
	display: flex;
	align-items: center;
}
.info-subtitle {
	margin: 12px 0;
}
.info-title--tag {
	margin-right: 8px;
}
.title-tag--price {
	margin-left: auto;
	font-size: 1.4em;
	color: #e74c3c;
}
.info-list {
	list-style-type: none;
	margin: 0;
	padding: 0;
	flex: 1;
}
.info-list .info-list--item {
	display: flex;
	width: 80%;
	justify-content: space-between;
	font-size: 0.9em;
	margin: 4px 0;
}
.info-list .info-list--item span {
	flex: 1;
}
.info-item--title {
	color: #c2c2c2;
	padding-right: 10px;
}
.info-contact {
	padding: 0 10px;
	display: flex;
	flex-wrap: wrap;
	max-width: 900px;
}
.info-contact--item {
	margin: 4px 0;
}
.info-contact--username,
.info-contact--email,
.info-contact--phone,
.info-contact--location {
	font-size: 0.9em;
}
.info-contact--username::before,
.info-contact--email::before,
.info-contact--phone::before,
.info-contact--location::before {
	font-family: "Flat-UI-Pro-Icons";
	color: #1a2229;
	margin-right: 12px;
	opacity: 0.7;
}
.info-contact--username::before {
	content: "\e631";
}
.info-contact--email::before {
	content: "\e632";
}
.info-contact--phone::before {
	content: "\e621";
}
.info-contact--location::before {
	content: "\e627";
}
.info-contact--user {
	margin-right: 80px;
}
@media screen and (max-width: 960px) {
	.info-lists,
	.info-equipment,
	.info-description {
		width: 100%;
	}
}
@media screen and (max-width: 900px) {
	.info-contact--map {
		position: relative;
		width: 100%;
	}
	.vue-map-container {
		width: 100% !important;
		margin-top: 12px;
	}
}

@media screen and (max-width: 720px) {
	.info-equipment--item.readonly {
		padding: 4px 10px;
		margin-right: 4px;
		margin-top: 4px;
	}
	.info-list--item {
		flex-direction: column;
	}
	.info-title {
		margin: 4px 0;
	}
	.info-title,
	.info-subtitle {
		padding: 0 10px;
	}
}
</style>
