<template>
  <article>
      <nuxt-link :to="'/cars/' + mycar._id">{{mycar.brand}}</nuxt-link><button @click="removeCar">remove</button>
  </article>
</template>

<script>
export default {
    props: ["mycar"],
    methods: {
      removeCar() {
        this.$axios.delete("/api/cars/" + this.mycar._id).then(response => {
          this.$router.go();
        }).catch(err => {
          console.log(err);
        })
      }
    }
}
</script>

<style scoped>
  * {
    font-size: 1em;
  }
  article {
    margin-bottom: 24px;
  }
  a {
    display: inline-block;
    min-width: 110px;
    text-align: center;
    margin-right: 20px;
  }
  button {
    padding: 12px;
    background-color: #0088ee;
    border: none;
    outline-color: transparent;
    color: #ffffff;
    cursor: pointer;
  }
</style>
