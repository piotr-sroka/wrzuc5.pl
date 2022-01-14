<template>
  <article class="car">
    <div class="car-info">
      <nuxt-link class="car-info--link" :to="'/cars/' + mycar._id">
        <img class="car-thumb" :src="mycar.images[0].path" alt="" v-if="mycar.images.length">
        <span class="car-brand">{{mycar.brand}} {{mycar.model}}</span>
        <span class="car-title">{{mycar.title}}</span>
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
			this.$axios
				.get("/api/cars/edit/" + this.mycar._id)
				.then(response => {
					if (!response.data.error) {
						this.$store.dispatch("checkOwner", response.config);
					}
				})
				.catch(err => {
					console.log(err);
				});
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
	margin: 0 10px;
	transition: background-color 0.2s linear;
}
.car:hover {
	background-color: rgba(44, 62, 80, 0.1);
}
.car-info .car-info--link {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.car-info {
	font-size: 0.8em;
	color: #34495e;
}
.car-info--link {
	color: #34495e;
}
.car-title,
.car-brand {
	padding: 12px 8px 0 8px;
}
.car-title {
	max-width: 100%;
	height: 34px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.car-brand {
	font-weight: bold;
	font-size: 1.2em;
}
.action-buttons {
	margin-top: 22px;
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

@media screen and (max-width: 720px) {
	.car {
		width: 100%;
		max-width: 100%;
		display: flex;
		margin-left: 0;
		justify-content: space-between;
	}
	.car-thumb {
		height: 88px;
	}
	.car:nth-child(odd) {
		background-color: #e8e8e8;
	}
	.action-buttons {
		margin-top: 0;
		margin-left: 20px;
		display: block;
	}
	.action-button {
		width: 100%;
		margin-bottom: 20px;
	}
}
</style>
