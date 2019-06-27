<template>
  <img class="gallery-thumb" :src="image.src" :alt="image.title">
</template>

<script>
export default {
  props: ["image"]
};
</script>

<style>
.gallery-thumb {
    border: 1px solid #fff;
    box-sizing: border-box;
    min-width: 80px;
    /* max-width: 200px; */
    flex: 1 1 10%;
    height: 80px;
    object-fit: cover;
    transition: opacity .2s linear;
    cursor: pointer;
}
.gallery-thumb:hover {
    opacity: .8;
}
</style>
