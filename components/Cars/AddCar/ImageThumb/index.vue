<template>
  <div class="thumb-container" :class="image.isLoading ? '' : 'loaded'">
    <div class="progress-bar" v-if="image.isLoading">
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <img class="thumb" :src="image.src" :alt="image.title" v-if="!image.isLoading">
  </div>
</template>
<script>
export default {
	props: ["image"]
};
</script>
<style>
.thumb-container {
  position: relative;
  width: 10%;
  max-width: 10%;
  min-width: 90px;
  height: 10%;
  max-height: 10%;
  min-height: 90px;
}
.images-thumbs {
  width: 100%;
	display: flex;
	flex-wrap: wrap;
  justify-content: flex-start;
}
.thumb {
	width: 80px;
	height: 80px;
	object-fit: cover;
	margin: 5px;
}
.thumb-container.loaded:hover .thumb, .thumb-container.loaded.selected-to-remove .thumb {
  opacity: .4;
}
.thumb-container.loaded:hover::after, .thumb-container.loaded.selected-to-remove::after {
  content: "\e609";
  font-family: "Flat-UI-Pro-Icons";
  font-size: 2em;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c0392b;
  top: 0;
  left: 0;
  cursor: pointer;
}
@media screen and (max-width:600px) {
    .images-thumbs {
      justify-content: space-between;
    }
}
</style>


