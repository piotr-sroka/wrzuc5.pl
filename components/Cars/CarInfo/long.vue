<template>
    <article>
		<app-gallery :images="carInfo.images" v-if="imagesLoaded"></app-gallery>
        <h4>{{carInfo.title}}</h4>
        <hr>
        <p>{{carInfo.brand}}</p>
        <p>{{carInfo.model}}</p>
        <p>{{carInfo.description}}</p>
    </article>
</template>
<script>
import AppGallery from "@/components/Cars/CarInfo/Gallery";

export default {
	components: {
		AppGallery
	},
	data() {
		return {
			carInfo: {},
			imagesLoaded: false
		};
	},
	created() {
		this.$axios
			.get("/api/cars/" + this.$route.params.id)
			.then(result => {
				this.carInfo = result.data;
				this.imagesLoaded = true;
			})
			.catch(err => {
				console.log(err);
			});
	}
};
</script>

