<template>
  <section class="car-page" v-if="isReRendered">
    <app-gallery :images="carInfo.images" v-if="imagesLoaded && carInfo.images.length"></app-gallery>
    <h3 class="info-title">
      <span class="info-title--tag">{{carInfo.brand}}</span>
      <span class="info-title--tag">{{carInfo.model}}</span>
      <span class="info-title--tag">{{carInfo.version}}</span>
      <span class="info-title--tag title-tag--price">{{carInfo.price}} PLN</span>
    </h3>
    <span class="divider" v-if="carInfo.email"></span>
    <p class="info-subtitle" v-if="carInfo.email">Sprzedający</p>
    <article class="info-contact" v-if="carInfo.email">
      <div class="info-contact--user">
        <p class="info-contact--item info-contact--username" v-if="carInfo.username">{{carInfo.username}}</p>
        <p class="info-contact--item info-contact--email" v-if="carInfo.email"><a :href="`mailto:${carInfo.email}`">{{carInfo.email}}</a></p>
        <p class="info-contact--item info-contact--phone" v-if="carInfo.phone">{{carInfo.phone}}</p>
        <p class="info-contact--item info-contact--location" v-if="carInfo.location">{{carInfo.location.description}}</p>
      </div>
      <div class="info-contact--map" v-if="carInfo.location">
        <GmapMap :center="{lat:mapInfo.lat, lng:mapInfo.lng}" :zoom="15" map-type-id="terrain" style="width: 500px; height: 240px" :options="{
					mapTypeControl: false,
					scaleControl: false,
					styles: mapStyles
				}">
					<GmapMarker :position="{lat:mapInfo.lat, lng:mapInfo.lng}" />
				</GmapMap>
      </div>
    </article>
    <span class="divider"></span>
    <p class="info-subtitle">Dane pojazdu</p>
    <article class="info-lists">
      <ul class="info-list info-technical">
        <li class="info-list--item" v-for="(item, index) in carInfoDetails.left" :key="index">
          <span class="info-item--title">{{item.infoName}}</span>
          <span v-if="item.infoName === 'Pojemność skokowa'">{{item.infoValue}} cm<sup>3</sup></span>
          <span v-else-if="item.infoName === 'Przebieg'">{{item.infoValue}} km</span>
          <span v-else-if="item.infoName === 'Moc silnika'">{{item.infoValue}} KM</span>
          <span v-else>{{item.infoValue}}</span> 
        </li>
      </ul>
      <ul class="info-list info-visual">
        <li class="info-list--item" v-for="(item, index) in carInfoDetails.right" :key="index">
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
import GmapMarker from "vue2-google-maps/src/components/marker";

export default {
	components: {
		AppGallery,
		GmapMarker
	},
	head() {
		return {
			title: this.pageName
		};
	},
	data() {
		return {
			isReRendered: true,
			carInfo: {},
			imagesLoaded: false,
			pageName: "",
			mapInfo: {
				lat: 10,
				lng: 10
			},
			months: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"],
			mapStyles: [
				{
					elementType: "geometry",
					stylers: [
						{
							color: "#ebe3cd"
						}
					]
				},
				{
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#523735"
						}
					]
				},
				{
					elementType: "labels.text.stroke",
					stylers: [
						{
							color: "#f5f1e6"
						}
					]
				},
				{
					featureType: "administrative",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#c9b2a6"
						}
					]
				},
				{
					featureType: "administrative.land_parcel",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#dcd2be"
						}
					]
				},
				{
					featureType: "administrative.land_parcel",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#ae9e90"
						}
					]
				},
				{
					featureType: "landscape.natural",
					elementType: "geometry",
					stylers: [
						{
							color: "#dfd2ae"
						}
					]
				},
				{
					featureType: "poi",
					elementType: "geometry",
					stylers: [
						{
							color: "#dfd2ae"
						}
					]
				},
				{
					featureType: "poi",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#93817c"
						}
					]
				},
				{
					featureType: "poi.park",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#a5b076"
						}
					]
				},
				{
					featureType: "poi.park",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#447530"
						}
					]
				},
				{
					featureType: "road",
					elementType: "geometry",
					stylers: [
						{
							color: "#f5f1e6"
						}
					]
				},
				{
					featureType: "road.arterial",
					elementType: "geometry",
					stylers: [
						{
							color: "#fdfcf8"
						}
					]
				},
				{
					featureType: "road.highway",
					elementType: "geometry",
					stylers: [
						{
							color: "#f8c967"
						}
					]
				},
				{
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#e9bc62"
						}
					]
				},
				{
					featureType: "road.highway.controlled_access",
					elementType: "geometry",
					stylers: [
						{
							color: "#e98d58"
						}
					]
				},
				{
					featureType: "road.highway.controlled_access",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#db8555"
						}
					]
				},
				{
					featureType: "road.local",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#806b63"
						}
					]
				},
				{
					featureType: "transit.line",
					elementType: "geometry",
					stylers: [
						{
							color: "#dfd2ae"
						}
					]
				},
				{
					featureType: "transit.line",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#8f7d77"
						}
					]
				},
				{
					featureType: "transit.line",
					elementType: "labels.text.stroke",
					stylers: [
						{
							color: "#ebe3cd"
						}
					]
				},
				{
					featureType: "transit.station",
					elementType: "geometry",
					stylers: [
						{
							color: "#dfd2ae"
						}
					]
				},
				{
					featureType: "water",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#b9d3c2"
						}
					]
				},
				{
					featureType: "water",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#92998d"
						}
					]
				}
			]
		};
	},
	computed: {
		carInfoDetails() {
			let info = {left: [], right: []};
			if (this.carInfo.brand) info.left.push({infoName: "Marka samochodu", infoValue: this.carInfo.brand});
			if (this.carInfo.model) info.left.push({infoName: "Model samochodu", infoValue: this.carInfo.model});
			if (this.carInfo.version) info.left.push({infoName: "Wersja", infoValue: this.carInfo.version});
			if (this.carInfo.category) info.left.push({infoName: "Kategoria", infoValue: this.carInfo.category});
			if (this.carInfo.yearOfProd) info.left.push({infoName: "Rok produkcji", infoValue: this.carInfo.yearOfProd});
			if (this.carInfo.mileage) info.left.push({infoName: "Przebieg", infoValue: this.carInfo.mileage});
			if (this.carInfo.engineCode) info.left.push({infoName: "Kod silnika", infoValue: this.carInfo.engineCode});
			if (this.carInfo.capacity) info.left.push({infoName: "Pojemność skokowa", infoValue: this.carInfo.capacity});
			if (this.carInfo.power) info.left.push({infoName: "Moc silnika", infoValue: this.carInfo.power});
			if (this.carInfo.fuel) info.left.push({infoName: "Rodzaj paliwa", infoValue: this.carInfo.fuel});
			if (this.carInfo.gearbox) info.left.push({infoName: "Skrzynia biegów", infoValue: this.carInfo.gearbox});
			if (this.carInfo.drive) info.left.push({infoName: "Napęd", infoValue: this.carInfo.drive});

			if (this.carInfo.color) info.right.push({infoName: "Kolor", infoValue: this.carInfo.color});
			if (this.carInfo.numOfDoors) info.right.push({infoName: "Liczba drzwi", infoValue: this.carInfo.numOfDoors});
			if (this.carInfo.numOfSeats) info.right.push({infoName: "Liczba miejsc", infoValue: this.carInfo.numOfSeats});
			if (this.carInfo.countryOfProd) info.right.push({infoName: "Kraj pochodzenia", infoValue: this.carInfo.countryOfProd});
			if (this.carInfo.firstRegistration) info.right.push({infoName: "Pierwsza rejestracja", infoValue: this.formatDate(this.carInfo.firstRegistration)});
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
		formatDate(date) {
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
		this.isReRendered = false;
		this.$nextTick(() => {
			this.isReRendered = true;
		});
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
	padding: 16px 0;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
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
.info-contact--item a, .info-contact--item a:link, .info-contact--item a:active {
	color: inherit;
	transition: color .2s linear;
}
.info-contact--item a:hover, .info-contact--item a:link:hover, .info-contact--item a:active:hover {
	color: #2980b9;
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
@media screen and (max-width: 380px) {
	.info-title--tag.title-tag--price {
		width: 100%;
		text-align: right;
		margin-top: 12px;
	}
}
</style>
