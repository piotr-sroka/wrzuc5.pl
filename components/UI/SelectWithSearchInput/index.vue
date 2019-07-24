<template>
  <div v-on-clickaway="hideDropdown" class="select-container form-group">
    <button
      class="form-input select"
      :class="isSelectOpened ? 'opened': ''"
      @click.prevent="toggleSelect"
    >
      {{selectTitle}}
      <span class="dropdown-arrow"></span>
    </button>
    <div class="select-items" :class="isSelectOpened ? 'opened' : ''">
      <input type="text" class="form-input search" ref="searchInput" @input="findItems" :value="searchValue" />
      <div data-simplebar class="select-scrolled">
        <div>
          <p
            class="select-item"
            v-for="(item, index) in itemsToDisplay"
			:class="item.visible && item.visible === 'hidden' ? 'hidden' : ''"
            :key="index"
            :ref="'item-' + index"
            @click="selectItem(item[itemToShow] || item)"
            @mouseover="focusOnItem($event.target)"
            :data-item-index="index"
            :data-item-value="item[itemToShow] || item"
          >{{item[itemToShow] || item}}</p>
        </div>
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
	directives: {
		onClickaway: onClickaway
	},
	data() {
		return {
			isSelectOpened: false,
			searchValue: "",
			itemsToDisplay: [],
			focusedItem: null,
			focusedItemIndex: -1,
			isArrowKeyDown: false,
			scrollTop: 50
		};
	},
	methods: {
		toggleSelect() {
			// console.log(this.selectItems);
			this.isSelectOpened = !this.isSelectOpened;
			setTimeout(() => {
				if (this.isSelectOpened) this.$refs.searchInput.focus();
			}, 200);
		},
		hideDropdown() {
			this.isSelectOpened = false;
			this.focusedItem = null;
			try {
				document.querySelector(".select-item.hover").classList.remove("hover");
			} catch (e) {}
		},
		selectItem(value) {
			this.$root.$emit("selectChanged", this.itemToShow);
			this.$emit("input", value, this.selectTitle);
			this.findItems();
			setTimeout(this.hideDropdown, 50);
		},
		findItems(e) {
			if (!e || !e.target.value.length) {
				this.searchValue = "";
				this.itemsToDisplay = this.selectItems;
				return;
			}
			this.searchValue = e.target.value;
			this.itemsToDisplay = this.selectItems.filter(el => {
				let theEl = el[this.itemToShow] || el;
				return (
					theEl
						.toString()
						.toLowerCase()
						.indexOf(e.target.value.toLowerCase()) > -1
				);
			});
		},
		tryToChangeSelectPosition(keyCode) {
			if (keyCode === 38) {
				this.focusedItemIndex--;
				if (this.focusedItemIndex < 0) {
					this.focusedItemIndex = this.itemsToDisplay.length - 1;
				}
			}
			if (keyCode === 40) {
				this.focusedItemIndex++;
				if (this.focusedItemIndex > this.itemsToDisplay.length - 1) {
					this.focusedItemIndex = 0;
				}
			}
			this.focusedItem = this.$refs[`item-${this.focusedItemIndex}`][0];
			this.focusOnItem(this.focusedItem);
			document.querySelector(".simplebar-content-wrapper").scrollTop = this.focusedItem.offsetTop;
		},
		focusOnItem(el) {
			this.focusedItemIndex = el.dataset.itemIndex;
			try {
				document.querySelector(".select-item.hover").classList.remove("hover");
			} catch (e) {}
			el.classList.add("hover");
		},
		onDocumentKeyUp(e) {
			if (e.keyCode === 27) {
				this.hideDropdown();
			}
			if (this.isArrowKeyDown) {
				if (e.keyCode === 38 || e.keyCode === 40) {
					if (this.isSelectOpened) {
						this.tryToChangeSelectPosition(e.keyCode);
					}
				}
				this.isArrowKeyDown = false;
			}
		},
		onDocumentKeyDown(e) {
			if (!this.isArrowKeyDown && (e.keyCode === 38 || e.keyCode === 40)) {
				this.isArrowKeyDown = true;
				setTimeout(() => {
					this.onDocumentKeyUp(e);
				}, 50);
			}
			if (this.isSelectOpened && e.keyCode === 13) {
				if (this.focusedItem) {
					this.focusedItem.click();
				}
			}
		}
	},
	created() {
		this.itemsToDisplay = this.selectItems;
	},
	mounted() {
		document.addEventListener("keyup", this.onDocumentKeyUp);
		document.addEventListener("keydown", this.onDocumentKeyDown);
	},
	beforeDestroy() {
		document.removeEventListener("keyup", this.onDocumentKeyUp);
		document.removeEventListener("keydown", this.onDocumentKeyDown);
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
	-webkit-box-shadow: inset 0 0 0px 9999px #2C3E50;
	border: 2px solid #2C3E50;
	display: flex;
	align-items: center;
}
.select .dropdown-arrow {
	border-color: #2C3E50;
	border-top-color: #ffffff;
	margin-left: auto;
}
.select.opened .dropdown-arrow {
	-webkit-transform: rotate(180deg);
	transform: rotate(180deg);
}
.select-scrolled {
	max-height: 170px;
}
.simplebar-scrollbar:before {
	background: #2C3E50;
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
	padding-bottom: 10px;
	z-index: 999;
	margin-top: 50px;
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
.select-item.hover {
	background-color: #2C3E50;
	color: #ffffff;
}
.form-input.search {
	border: 2px solid #2C3E50;
	font-size: 0.8em;
	padding: 6px;
	margin: 10px;
	width: calc(100% - 20px);
}
</style>
