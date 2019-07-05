<template>
  <section class="search-engine">
    <input type="text" placeholder="czego dziś szukasz?" class="search-input" id="search-input" />
    <label class="search-input--label" for="search-input"></label>
  </section>
</template>
<script>
export default {};
</script>

<style>
.search-engine {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  padding: 30px 14px;
}
.search-input::placeholder {
  color: #c2c2c2;
}
.search-input {
  padding: 12px;
  font-size: 1.4em;
  color: #2f4154;
  width: 100%;
  border-radius: 6px;
  outline-color: transparent;
  border: 1px solid #2f4154;
  padding-right: 40px;
  position: relative;
  transition: all 0.2s linear;
}
.search-input:focus {
  border: 1px solid #3498db;
}
.search-input:focus +
.search-input--label::before {
    color: #3498db;
}
.search-input--label {
  position: relative;
}
.search-input--label::before {
  display: inline-block;
  font-family: "Flat-UI-Pro-Icons";
  content: "\e630";
  position: absolute;
  width: 40px;
  height: 69px;
  font-size: 1.4em;
  line-height: 69px;
  vertical-align: middle;
  left: -40px;
  text-align: center;
  top: 0;
  bottom: 0;
  margin: auto 0;
  color: #2f4154;
  opacity: 0.7;
  transition: all 0.2s linear;
}
</style>

