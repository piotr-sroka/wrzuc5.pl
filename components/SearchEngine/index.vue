<template>
  <section class="search-engine">
      <!-- <input type="text" placeholder="czego dziś szukasz?" class="search-input"> -->
      <input type="text" placeholder="czego dziś szukasz?" class="search-input">
  </section>
</template>
<script>
export default {
  
}
</script>

<style>
    .search-engine {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        padding: 40px 20px;
    }
    .search-input::placeholder {
        color: #c2c2c2;
    }
    .search-input {
        padding: 15px;
        font-size: 2em;
        color: #2f4154;
        width: 100%;
        border-radius: 8px;
        outline-color: transparent;
        border: 1px solid #2f4154;
        padding-right: 50px;
        position: relative;
    }
    .search-input::before {
        display: block;
        font-family: 'Flat-UI-Pro-Icons';
        content: "\e630";
        position: absolute;
        width: 20px;
        height: 20px;
    }
</style>

