<template>
    <article>
        <h4>{{carInfo.title}}</h4>
        <hr>
        <p>{{carInfo.brand}}</p>
        <p>{{carInfo.model}}</p>
        <p>{{carInfo.description}}</p>
    </article>
</template>
<script>
export default {
	data() {
		return {
			carInfo: {}
		};
	},
	created() {
		this.$axios
			.get("/api/cars/" + this.$route.params.id)
			.then(result => {
				this.carInfo = result.data;
			})
			.catch(err => {
				console.log(err);
			});
	}
};
</script>

