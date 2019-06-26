<template>
    <div></div>
  <!-- <div class="thumb-container" v-for="(image, index) in images" :key="index">
    <span class="progress-bar" v-if="image.isLoading"></span>
    <img class="thumb" :src="image.src" :alt="image.title" v-if="!image.isLoading">
  </div> -->
</template>
<script>
export default {
    props: ['image']
};
</script>
<style>
.thumb-container {
  position: relative;
  width: 90px;
  height: 90px;
}
.images-thumbs {
  display: flex;
  flex-wrap: wrap;
}
.thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 5px;
}
</style>


