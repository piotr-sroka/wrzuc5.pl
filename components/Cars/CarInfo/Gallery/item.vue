<template>
  <div class="gallery-thumb">
    <img :src="image.path" :alt="image.title" />
  </div>
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
  cursor: pointer;
  position: relative;
  display: flex;
}
.gallery-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery-thumb::before {
  display: block;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  transition: opacity 0.2s linear;
  opacity: 0;
}
.gallery-thumb:hover:before {
  opacity: 0.4;
}
</style>
