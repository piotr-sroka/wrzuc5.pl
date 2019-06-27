<template>
  <article class="car">
    <div class="car-info">
      <nuxt-link class="car-info--link" :to="'/cars/' + mycar._id">
        <img class="car-thumb" :src="mycar.images[0].thumb.src" alt="" v-if="mycar.images.length">
        <span class="car-title">{{mycar.title}}</span>
        <span class="car-brand">{{mycar.brand}} {{mycar.model}}</span>
      </nuxt-link>
    </div>
    <div class="action-buttons">
      <button class="btn primary action-button button-edit" @click="editCar">Edytuj</button>
      <button class="btn danger action-button button-remove" @click="removeCar">Usuń</button>
    </div>
  </article>
</template>

<script>
export default {
	props: ["mycar"],
	methods: {
		removeCar() {
			this.$axios
				.delete("/api/cars/" + this.mycar._id)
				.then(response => {
					this.$router.go();
				})
				.catch(err => {
					console.log(err);
				});
		},
		editCar() {
			console.log("edit");
		}
	}
};
</script>

<style scoped>
.car {
	padding: 16px;
	background-color: #eff0f2;
	max-width: 240px;
  border-radius: 6px;
  margin: 0 20px;
}
.car-info .car-info--link {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.car-info {
  font-size: 1.2em;
  color: #34495e;
}
.car-info--link {
  color: #34495e;
}
.car-title, .car-brand {
  padding: 18px 12px 0 12px;
}
.car-title {
  font-weight: bold;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.car-brand {
  font-size: .8em;
}
.action-buttons {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}
.action-button {
  flex: 1;
}
.action-button.button-edit {
  margin-right: 10px;
}

.car-thumb {
	width: 208px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
}
</style>
