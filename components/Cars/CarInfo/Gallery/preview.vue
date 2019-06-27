<template>
    <img :src="image.src" :alt="image.title">
</template>

<script>
export default {
  props: ["image", "currentImage"]
};
</script>

<style>
</style>


