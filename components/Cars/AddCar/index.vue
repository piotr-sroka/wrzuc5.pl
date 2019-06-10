<template>
  <section class="container">
    <h2>Dodaj ogłoszenie</h2>
    <form>
        <input type="text" placeholder="Marka" v-model="brand">
        <input type="text" placeholder="Model" v-model="model">
        <input type="text" placeholder="Tytuł Ogłoszenia" v-model="title">
        <input type="text" placeholder="Opis" v-model="description">
        <hr>
        <button @click="addCar">Dodaj</button>
    </form>
  </section>
</template>
<script>
export default {
    data() {
        return {
            brand: "",
            model: "",
            title: "",
            description: ""
        }
    },
    methods: {
        addCar() {
            let newCar = {brand:this.brand, model:this.model, title:this.title, description:this.description, user:this.$store.state.auth.user};
            this.$store.dispatch("addNewCar", newCar);
            this.$router.push("/");
        }
    }
};
</script>
<style scoped>
.container {
    margin-top: 80px;
    justify-content: flex-start;
    max-width: 340px;
    flex-direction: column;
    text-align: center;
}
.container > * {
    flex: 1 0 1;
    width: 100%;
    box-sizing: border-box;
    margin: 8px 0;
}
input {
    margin: 8px 0;
    display: block;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}
</style>


