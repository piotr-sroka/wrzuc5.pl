<template>
  <section class="search-engine">
    <input type="text" placeholder="czego dziś szukasz?" class="search-input" id="search-input" />
    <label class="search-input--label" for="search-input"></label>
    <a class="search-advanced">Wyszukiwanie zaawansowane</a>
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
  padding: 20px 14px;
  align-items: center;
}
.search-input::placeholder {
  color: #c2c2c2;
}
.search-input {
  padding: 8px;
  font-size: 1.2em;
  color: #1a2229;
  width: 100%;
  border-radius: 6px;
  outline-color: transparent;
  border: 2px solid #ffffff;
  padding-right: 40px;
  position: relative;
  transition: all 0.2s linear;
}
.search-input:focus {
  border: 2px solid #1a2229;
}
.search-input:focus +
.search-input--label::before {
    color: #1a2229;
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
  color: #BDC3C7;
  opacity: 0.7;
  transition: all 0.2s linear;
}
.search-engine .search-advanced {
  margin-top: 0;
  margin-left: 20px;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  font-size: .85em;
}

.search-engine .search-advanced::after {
  font-family: 'Flat-UI-Pro-Icons';
  content: "\e607";
  line-height: 20px;
  vertical-align: middle;
  font-size: .8em;
  position: absolute;
  right: -15px;
  transition: right .2s linear;
}
.search-engine .search-advanced:hover::after {
  right: -20px;
}

@media screen and (max-width: 720px) {
  .search-engine {
    flex-wrap: wrap;
  }
  .search-engine .search-advanced {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>

