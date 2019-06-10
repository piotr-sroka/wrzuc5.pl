<template>
  <article>
      <nuxt-link :to="'/cars/' + mycar._id">{{mycar.brand}}</nuxt-link>
  </article>
</template>

<script>
export default {
    props: ["mycar"]
}
</script>

<style scoped>

</style>
