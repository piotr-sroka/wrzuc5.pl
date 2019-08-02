<template>
  <section class="search-box">
    <article class="search-engine">
      <input type="text" placeholder="czego dziś szukasz?" class="search-input" id="search-input" v-model="searchPhrase" @keyup.enter.prevent="search" />
      <label class="search-input--label" for="search-input" @click.prevent="search"></label>
      <nuxt-link class="search-advanced" to="/cars/search" @click.native="clearSearchPhrase">Wyszukiwanie zaawansowane</nuxt-link>
    </article>
    <span class="info-message form-message-error" v-if="searchError">{{searchError}}</span>
  </section>
</template>
<script>
export default {
  data() {
    return {
      searchPhrase: "",
      searchError: ""
    }
  },
  methods: {
    clearSearchPhrase() {
      sessionStorage.removeItem("search-phrase");
      this.$store.dispatch("clearSearchResults");
    },
    search() {
      this.$store.dispatch("clearSearchResults");
      this.$store.dispatch("setSearchPhrase", {type: "simple", phrase: this.searchPhrase});
      if (this.searchPhrase.length > 2) {
        this.$router.push("/cars/search");
      } else {
        this.searchError = "Szukana fraza jest zbyt krótka. Podaj minimum 3 znaki."
      }
    }
  }
};
</script>

<style>
.search-engine, .search-box .info-message {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  padding: 20px 14px;
  align-items: center;
}
.search-box .info-message {
  padding: 0 14px;
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
  color: #1a2229;
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

