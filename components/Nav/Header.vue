<template>
  <nav class="main-navigation">
    <nuxt-link class="nav-top-item nav-home" to="/">Wrzuć 5.</nuxt-link>
    <nuxt-link class="nav-top-item" v-if="$store.state.auth.isLoggedIn" to="/cars/add-car">Dodaj ogłoszenie</nuxt-link>
    <nuxt-link class="nav-top-item" v-if="!$store.state.auth.isLoggedIn" to="/auth/login">Zaloguj się</nuxt-link>
    <nuxt-link class="nav-top-item" v-if="!$store.state.auth.isLoggedIn" to="/auth/signup">Zarejestruj się</nuxt-link>
    <div class="nav-top-dropdown" :class="navTopToggled ? 'toggle' : ''" v-if="$store.state.auth.isLoggedIn">
      <button class="nav-top-item" @click="toggleUserDropdown" v-on-clickaway="hideDropdown">Moje konto<span class="dropdown-arrow"></span></button>
      <ul class="nav-top-dropdown-list" v-if="navTopToggled">
        <li>
          <nuxt-link class="nav-top-item" to="/user">Profil</nuxt-link>
        </li>
        <li class="nav-top-divider"></li>
        <li>
          <nuxt-link class="nav-top-item" to="/auth/logout">Wyloguj</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { directive as onClickaway } from 'vue-clickaway';

export default {
  directives: {
    onClickaway: onClickaway,
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
  }
};
</script>
<style>
.main-navigation {
	background-color: #2f4154;
	display: flex;
	border-radius: 0 0 5px 5px;
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
	color: #1abc9c;
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
	background-color: #34495e;
	width: 100%;
	margin-top: 5px;
	border-radius: 5px;
	transition: opacity 0.2s ease-in-out;
	opacity: 0;
	pointer-events: none;
}
.nav-top-divider {
	height: 2px;
	margin-left: 4px;
	margin-right: 4px;
	background-color: #2f4154;
}
.dropdown-arrow {
	border-color: #34495e;
	border-top-color: #ffffff;
	border-style: solid;
	border-bottom-style: none;
	display: inline-block;
	border-width: 8px 6px;
	margin-left: 12px;
	transition: all 0.2s ease-in-out;
}
.nav-top-item:hover .dropdown-arrow {
	border-top-color: #1abc9c;
}
.nav-top-dropdown.toggle .dropdown-arrow {
	transform: rotate(180deg);
}
</style>

