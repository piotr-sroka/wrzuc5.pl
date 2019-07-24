<template>
  <section class="car-page">
    <app-gallery :images="carInfo.images" v-if="imagesLoaded"></app-gallery>
    <h3 class="info-title">
      <span class="info-title--tag">{{carInfo.brand}}</span>
      <span class="info-title--tag">{{carInfo.model}}</span>
      <span class="info-title--tag">{{carInfo.version}}</span>
      <span class="info-title--tag title-tag--price">{{carInfo.price}} PLN</span>
    </h3>
    <span class="divider"></span>
    <p class="info-subtitle">Dane pojazdu</p>
    <article class="info-lists">
      <ul class="info-list info-technical">
        <li class="info-list--item">
          <span class="info-item--title">Marka pojazdu</span>
          <span>{{carInfo.brand}}</span>
        </li>
        <li class="info-list--item">
          <span class="info-item--title">Model pojazdu</span>
          <span>{{carInfo.model}}</span>
        </li>
        <li class="info-list--item" v-if="carInfo.engineCode">
          <span class="info-item--title">Kod silnika</span>
          <span>{{carInfo.engineCode}}</span>
        </li>
        <li class="info-list--item" v-if="carInfo.fuel">
          <span class="info-item--title">Rodzaj paliwa</span>
          <span>{{carInfo.fuel}}</span>
        </li>
        <li class="info-list--item">
          <span class="info-item--title">Rok produkcji</span>
          <span>{{carInfo.yearOfProd}}</span>
        </li>
        <li class="info-list--item">
          <span class="info-item--title">Przebieg</span>
          <span>{{carInfo.mileage}} km</span>
        </li>
        <li class="info-list--item" v-if="carInfo.capacity">
          <span class="info-item--title">Pojemność silnika</span>
          <span>
            {{carInfo.capacity}} cm<sup>3</sup>
          </span>
        </li>
        <li class="info-list--item" v-if="carInfo.power">
          <span class="info-item--title">Moc silnika</span>
          <span>{{carInfo.power}}</span>
        </li>
        <li class="info-list--item">
          <span class="info-item--title">Skrzynia biegów</span>
          <span>Manualna</span>
        </li>
        <li class="info-list--item">
          <span class="info-item--title">Napęd</span>
          <span>Przedni</span>
        </li>
        <li class="info-list--item">
          <span class="info-item--title">Typ</span>
          <span>Sportback</span>
        </li>
      </ul>
      <ul class="info-list info-visual">
        <li class="info-list--item" v-if="carInfo.color">
          <span class="info-item--title">Kolor</span>
          <span>{{carInfo.color}}</span>
        </li>
        <li class="info-list--item">
          <span class="info-item--title">Liczba drzwi</span>
          <span>5</span>
        </li>
        <li class="info-list--item">
          <span class="info-item--title">Liczba miejsc</span>
          <span>5</span>
        </li>
        <li class="info-list--item">
          <span class="info-item--title">Kraj pochodzenia</span>
          <span>Szwajcaria</span>
        </li>
        <li class="info-list--item">
          <span class="info-item--title">Bezwypadkowy</span>
          <span>Tak</span>
        </li>
        <li class="info-list--item">
          <span class="info-item--title">Stan</span>
          <span>Używany</span>
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
			pageName: ""
		};
	},
	methods: {
		checkPageTitle() {
			if (document && document.title === "" && !this.carInfo.brand) {
        setTimeout(this.checkPageTitle, 100);
      } else {
        document.title = this.carInfo.title || `${this.carInfo.brand} ${this.carInfo.model} ${this.carInfo.version}`;
			}
		}
	},
	created() {
		this.$axios
			.get("/api/cars/" + this.$route.params.id)
			.then(result => {
				this.carInfo = result.data;
				this.imagesLoaded = true;
				this.pageName = this.carInfo.title || `${this.carInfo.brand} ${this.carInfo.model} ${this.carInfo.version}`;
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
}
</style>
