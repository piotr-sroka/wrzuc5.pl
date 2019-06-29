<template>
  <article class="car" @click="gotoCarPage">
    <img class="thumb" :src="car.images[0].thumb.src" alt />
    <div class="info">
      <div class="info-group group-left">
        <h3>
          <span class="info-brand">{{car.brand}}</span>
          <span class="info-model">{{car.model}}</span>
          <span class="info-version">{{car.version}}</span>
        </h3>
        <p class="info-title">{{car.title}}</p>
        <p class="info-others">
          <span class="info-others--item">2004</span>
          <span class="info-others--item">Diesel</span>
          <span class="info-others--item">1.9 TDI</span>
          <span class="info-others--item">199 000 km</span>
        </p>
      </div>
      <div class="info-group group-right">
        <p class="info-price">{{car.price}} PLN</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["car"],
  methods: {
    gotoCarPage() {
      this.$router.push("/cars/" + this.car._id);
    }
  }
};
</script>

<style scoped>
.car {
  padding: 16px;
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
.info-others--item::before {
  font-family: "Flat-UI-Pro-Icons";
  content: "\e63e";
  margin-right: 5px;
  font-size: 0.8em;
}
.car .thumb {
  min-width: 260px;
  width: 260px;
  min-height: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 20px;
}
</style>
