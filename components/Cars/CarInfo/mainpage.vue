<template>
  <nuxt-link :to="carLink" class="car">
    <!-- <img class="thumb" :src="car.images[0].thumb.src" v-if="car.images.length" /> -->
    <img class="thumb" :src="car.images[0].path" v-if="car.images.length" />
    <div class="info">
      <div class="info-group group-left">
        <h3 class="info-header">
          <span class="info-brand">{{car.brand}}</span>
          <span class="info-model">{{car.model}}</span>
          <span class="info-version show-above-720">{{car.version}}</span>
		  		<span class="info-price show-below-720">{{car.price}} PLN</span>
        </h3>
        <p class="info-title show-above-720" v-if="car.title">{{car.title}}</p>
				<br class="show-above-720" v-if="!car.title">
				<br class="show-above-720" v-if="!car.location">
        <p class="info-title show-above-720 info-location" v-if="car.location">{{car.location.description}}</p>
        <p class="info-others">
          <span class="info-others--item" v-if="car.yearOfProd">{{car.yearOfProd}}</span>
          <span class="info-others--item show-above-720" v-if="car.fuel && car.fuel !== 'Wybierz rodzaj paliwa' ">{{car.fuel}}</span>
          <span class="info-others--item show-above-720" v-if="car.engineCode">{{car.engineCode}}</span>
          <span class="info-others--item" v-if="car.mileage">{{car.mileage}} km</span>
        </p>
      </div>
      <div class="info-group group-right show-above-720">
        <p class="info-price">{{car.price}} PLN</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
	props: ["car"],
	data() {
		return {
			carLink: "/cars/" + this.car._id
		};
	}
};
</script>

<style scoped>
.car {
	border-radius: 6px;
	display: flex;
	width: 100%;
	margin-bottom: 5px;
}
.car:nth-child(even) {
	background-color: #ebebeb;
}
.car:nth-child(odd) {
	background-color: #f5f5f5;
}
.car .info {
	padding: 16px;
	flex: 100%;
	display: flex;
	justify-content: space-between;
	color: #34495e;
	font-size: 1.2em;
}
.info-group {
	display: flex;
	flex-direction: column;
}
.info-brand {
	font-weight: bold;
}
.info-model,
.info-version {
	font-weight: lighter;
}
.info-title {
	color: #6d6d6d;
	font-size: 0.8em;
	margin-top: 6px;
}
.info-price {
	font-size: 1.4em;
	font-weight: bold;
	color: #e74c3c;
}
.info-others {
	margin-top: auto;
	font-size: 0.8em;
	color: #6d6d6d;
}
.info-others--item {
	margin-right: 8px;
}
.info-others--item::before, .info-location::before {
	font-family: "Flat-UI-Pro-Icons";
	content: "\e63e";
	margin-right: 5px;
	font-size: 0.8em;
}
.car .thumb {
	margin: 0;
	min-width: 260px;
	width: 260px;
	min-height: 180px;
	height: 180px;
	object-fit: cover;
	border-radius: 6px;
}
.info-location::before {
	content: "\e627";
}

@media screen and (max-width: 720px) {
	.car .thumb {
		width: 140px;
		min-width: 140px;
		min-height: 120px;
		height: 120px;
	}
	.show-above-720 {
		display: none;
	}
	.info-header {
		font-size: 0.9em;
	}
	.show-below-720 {
		display: block;
	}
	.info-price {
		font-size: 1.2em;
		padding-top: 8px;
	}
}
</style>
