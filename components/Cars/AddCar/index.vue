<template>
  <section>
    <h2>Dodaj ogłoszenie</h2>
    <form>
        <input type="text" placeholder="Marka" v-model="brand">
        <input type="text" placeholder="Model" v-model="model">
        <button @click="addCar">Dodaj</button>
    </form>
  </section>
</template>
<script>
export default {
    data() {
        return {
            brand: "",
            model: ""
        }
    },
    methods: {
        addCar() {
            let newCar = {brand:this.brand, model:this.model};
            this.$store.dispatch("addNewCar", newCar);
            this.$router.push("/");
        }
    }
};
</script>

