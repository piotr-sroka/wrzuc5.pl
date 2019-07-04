<template>
    <div v-on-clickaway="hideDropdown" class="select-container">
        <button class="form-input select" :class="isSelectOpened ? 'opened': ''" @click.prevent="isSelectOpened = !isSelectOpened">{{selectTitle}}<span class="dropdown-arrow"></span></button>
        <div class="select-items" :class="isSelectOpened ? 'opened' : ''">
            <input type="text" class="form-input search">
            <div data-simplebar class="select-scrolled">
                <p class="select-item" v-for="(item, index) in selectItems" :key="index" @click="selectItem(item[itemToShow])">{{item[itemToShow] || item}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import SimpleBar from "simplebar-vue";
import "simplebar/dist/simplebar.css";
import {directive as onClickaway} from "vue-clickaway";

export default {
	props: ["selectTitle", "selectItems", "itemToShow"],
	components: {
		SimpleBar
	},
	directives: {
		onClickaway: onClickaway
	},
	data() {
		return {
			isSelectOpened: false
		};
	},
	methods: {
		hideDropdown() {
			this.isSelectOpened = false;
		},
        selectItem(value) {
		    this.$emit("input", value);
            this.hideDropdown();
        }
	}
};
</script>

<style>
.select-container {
	position: relative;
}
.form-input.select {
	color: #ffffff;
	text-align: left;
	-webkit-box-shadow: inset 0 0 0px 9999px #1abc9c;
	border: 2px solid #1abc9c;
	display: flex;
	align-items: center;
}
.select .dropdown-arrow {
	border-color: #1abc9c;
	border-top-color: #ffffff;
	margin-left: auto;
}
.select.opened .dropdown-arrow {
	-webkit-transform: rotate(180deg);
	transform: rotate(180deg);
}
.select-scrolled {
	height: 170px;
}
.simplebar-scrollbar:before {
	background: #1abc9c;
}
.select-items {
	width: 100%;
	visibility: hidden;
	opacity: 0;
	position: absolute;
	background-color: #ffffff;
	border-radius: 6px;
	transition: all 0.2s linear;
    box-sizing: border-box;
    pointer-events: none;
}
.select.opened + .select-items {
	visibility: visible;
    opacity: 1;
    pointer-events: all;
}
.select-item {
	cursor: pointer;
	padding: 4px 10px;
}
.select-item:hover {
	background-color: #1abc9c;
	color: #ffffff;
}
.form-input.search {
	border: 2px solid #1abc9c;
	font-size: 0.8em;
	padding: 6px;
	margin: 10px;
	width: calc(100% - 20px);
}
</style>
