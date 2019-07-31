<template>
  <header class="header sticky">
    <nav class="main-navigation" ref="mainNav">
      <nuxt-link class="nav-top-item nav-home" to="/">Wrzuć 5.</nuxt-link>
      <nuxt-link v-if="$store.state.auth.isLoggedIn" to="/cars/add-car">
        <span class="nav-top-item show-above-720">Dodaj ogłoszenie</span>
        <span class="nav-top-item plus-icon show-below-720"></span>
      </nuxt-link>
      <nuxt-link v-if="!$store.state.auth.isLoggedIn" to="/auth/login">
        <span class="nav-top-item">Zaloguj się</span>
      </nuxt-link>
      <nuxt-link v-if="!$store.state.auth.isLoggedIn" to="/auth/signup">
        <span class="nav-top-item">Zarejestruj się</span>
      </nuxt-link>
      <div
        class="nav-top-dropdown"
        :class="navTopToggled ? 'toggle' : ''"
        v-if="$store.state.auth.isLoggedIn"
      >
        <button class="nav-top-item" @click="toggleUserDropdown" v-on-clickaway="hideDropdown">
          <span class="show-above-720">Moje konto</span>
          <span class="dropdown-arrow show-above-720"></span>
          <span class="user-icon show-below-720"></span>
        </button>
        <ul class="nav-top-dropdown-list" v-if="navTopToggled">
          <li>
            <nuxt-link class="nav-top-item" to="/user">Profil</nuxt-link>
          </li>
          <li class="nav-top-divider"></li>
          <li>
            <nuxt-link class="nav-top-item" to="/auth/logout" @click.native="navTopToggled = false">Wyloguj</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { directive as onClickaway } from "vue-clickaway";
import Stickyfill from 'stickyfill';

export default {
  directives: {
    onClickaway: onClickaway
  },
  middleware: ["check-auth"],
  data() {
    return {
      navTopToggled: false
    };
  },
  methods: {
    toggleUserDropdown(e) {
      this.navTopToggled = !this.navTopToggled;
    },
    hideDropdown: function() {
      this.navTopToggled = false;
	  }
  },
  mounted() {
    Stickyfill().add(this.$refs.mainNav);
  }
};
</script>
<style>
.header {
  width: 100%;
  background-color: #1a2229;
}
.main-navigation {
  width: 100%;
  max-width: 1280px;
  display: flex;
  border-radius: 0 0 6px 6px;
  margin: 0 auto;
}
.nav-home {
  margin-right: auto;
}
.nav-top-item {
  cursor: pointer;
  background-color: transparent;
  outline-color: transparent;
  border: none;
  font-family: inherit;
  padding: 16px 24px;
  font-size: 1em;
  color: #ffffff;
  display: inline-block;
  line-height: 1em;
  vertical-align: middle;
  text-align: center;
  transition: all 0.2s ease-in-out;
}
.nav-top-item:hover {
  color: #2980B9;
}
.nav-top-dropdown {
  position: relative;
}
.nav-top-dropdown.toggle .nav-top-dropdown-list {
  pointer-events: all;
  opacity: 1;
}
.nav-top-dropdown-list {
  padding: 0;
  list-style-type: none;
  text-align: right;
  position: absolute;
  background-color: #1a2229;
  width: 100%;
  min-width: 140px;
  margin-top: 5px;
  border-radius: 5px;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  pointer-events: none;
  z-index: 9999;
  right: 5px;
}
.nav-top-divider {
  height: 2px;
  margin-left: 4px;
  margin-right: 4px;
  background-color: #34495e;
}
.dropdown-arrow {
  border-color: #1a2229;
  border-top-color: #ffffff;
  border-style: solid;
  border-bottom-style: none;
  display: inline-block;
  border-width: 8px 6px;
  margin-left: 12px;
  transition: all 0.2s ease-in-out;
}
.nav-top-item:hover .dropdown-arrow {
  border-top-color: #2980B9;
}
.nav-top-dropdown.toggle .dropdown-arrow {
  transform: rotate(180deg);
}
.plus-icon::before, .user-icon::before {
  font-family: "Flat-UI-Pro-Icons";
  content: "\e608";
  font-size: 1.2em;
  width: 40px;
  display: inline-block;
}
.plus-icon::before {
  content: "\e608";
}
.user-icon::before {
  content: "\e631";
}
.show-below-720 {
	display: none;
}
@media screen and (max-width: 480px) {
  /* .nav-home { */
    /* margin-right: 0; */
  /* } */
  .nav-top-item {
    padding: 14px 10px;
  }
	.show-above-720 {
		display: none;
	}
	.show-below-720 {
		display: block;
	}
}
</style>

