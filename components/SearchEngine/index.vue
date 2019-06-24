<template>
  <section class="search-engine">
      <input type="text" placeholder="czego dziś szukasz?" class="search-input" id="search-input"><label class="search-input--label" for="search-input"></label>
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
    .search-input--label {
        position: relative;
    }
    .search-input--label::before {
        display: inline-block;
        font-family: 'Flat-UI-Pro-Icons';
        content: "\e630";
        position: absolute;
        width: 40px;
        height: 69px;
        font-size: 30px;
        line-height: 69px;
        vertical-align: middle;
        left: -50px;
        text-align: center;
        top: 0;
        bottom: 0;
        margin: auto 0;
        color: #2f4154;
        opacity: .7;
    }
</style>

