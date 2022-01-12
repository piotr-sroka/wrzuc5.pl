<template>
  <section class="container container-search-engine">
    <form class="form">
      <div class="form-group info">
        <div class="info-item">
          <app-select-with-search-input
            :autoclose="true"
            v-if="brands.length && isReRendered"
            v-model="brand"
            :selectTitle="brand"
            :selectItems="brands"
            itemToShow="brand"
          ></app-select-with-search-input>
        </div>
        <div class="info-item">
          <app-select-with-search-input
            :autoclose="true"
            v-if="brand != 'Marka samochodu' && models.length && isReRendered"
            v-model="model"
            :selectTitle="model"
            :selectItems="models"
            itemToShow="model"
          ></app-select-with-search-input>
        </div>
        <div class="info-item">
          <app-select-with-search-input
            :autoclose="true"
            v-if="versions.length && isReRendered"
            v-model="version"
            :selectTitle="version"
            :selectItems="versions"
            itemToShow="version"
          ></app-select-with-search-input>
        </div>
        <div class="info-item">
          <app-select-with-search-input
            :autoclose="false"
            v-if="countriesOfProd.length && isReRendered"
            v-model="countryOfProd"
            selectTitle="Kraj pochodzenia"
            :selectItems="countriesOfProd"
            itemToShow="countryName"
            :multiselect="true"
          ></app-select-with-search-input>
        </div>
      </div>
      <div class="form-group info">
        <div class="info-item">
          <app-select-with-search-input
            :autoclose="true"
            v-if="categories.length && isReRendered"
            v-model="category"
            :selectTitle="category"
            :selectItems="categories"
            itemToShow="categoryName"
          ></app-select-with-search-input>
        </div>
      </div>
      <div class="form-group info">
        <div class="info-item">
          <div class="form-group">
            <input
              class="form-input price-input"
              type="text"
              placeholder="Cena od"
              v-model="priceFrom"
              id="priceFrom"
            />
            <label for="priceFrom" class="price-input--label"></label>
          </div>
        </div>
        <div class="info-item">
          <div class="form-group">
            <input
              class="form-input price-input"
              type="text"
              placeholder="Cena do"
              v-model="priceTo"
              id="priceTo"
            />
            <label for="priceTo" class="price-input--label"></label>
          </div>
        </div>
        <div class="info-item">
          <app-select-with-search-input
            :autoclose="true"
            v-model="yearOfProdFrom"
            :selectTitle="yearOfProdFrom"
            :selectItems="productionsYears"
            itemToShow="yearOfProd"
          ></app-select-with-search-input>
        </div>
        <div class="info-item">
          <app-select-with-search-input
            :autoclose="true"
            v-model="yearOfProdTo"
            :selectTitle="yearOfProdTo"
            :selectItems="productionsYears"
            itemToShow="yearOfProd"
          ></app-select-with-search-input>
        </div>
      </div>
      <div class="form-group info">
        <div class="info-item">
          <div class="form-group">
            <input
              class="form-input mileage-input"
              type="text"
              placeholder="Przebieg od"
              v-model="mileageFrom"
              id="mileageFrom"
            />
            <label for="mileageFrom" class="mileage-input--label"></label>
          </div>
        </div>
        <div class="info-item">
          <div class="form-group">
            <input
              class="form-input mileage-input"
              type="text"
              placeholder="Przebieg do"
              v-model="mileageTo"
              id="mileageTo"
            />
            <label for="mileageTo" class="mileage-input--label"></label>
          </div>
        </div>
        <div class="info-item">
          <div class="form-group">
            <input
              class="form-input capacity-input"
              type="text"
              placeholder="Pojemność skokowa od"
              v-model="capacityFrom"
              id="capacityFrom"
            />
            <label for="capacityFrom" class="capacity-input--label"></label>
          </div>
        </div>
        <div class="info-item">
          <div class="form-group">
            <input
              class="form-input capacity-input"
              type="text"
              placeholder="Pojemność skokowa do"
              v-model="capacityTo"
              id="capacityTo"
            />
            <label for="capacityTo" class="capacity-input--label"></label>
          </div>
        </div>
      </div>
      <div class="form-group info">
        <div class="info-item">
          <div class="form-group">
            <input
              class="form-input power-input"
              type="text"
              placeholder="Moc od"
              v-model="powerFrom"
              id="powerFrom"
            />
            <label for="powerFrom" class="power-input--label"></label>
          </div>
        </div>
        <div class="info-item">
          <div class="form-group">
            <input
              class="form-input power-input"
              type="text"
              placeholder="Moc do"
              v-model="powerTo"
              id="powerTo"
            />
            <label for="powerTo" class="power-input--label"></label>
          </div>
        </div>
        <div class="info-item">
          <app-select-with-search-input
            :autoclose="false"
            v-if="fuelTypes.length && isReRendered"
            v-model="fuel"
            selectTitle="Rodzaj paliwa"
            :selectItems="fuelTypes"
            itemToShow="fuelType"
            :multiselect="true"
          ></app-select-with-search-input>
        </div>
        <div class="info-item">
          <app-select-with-search-input
            :autoclose="false"
            v-if="colors.length && isReRendered"
            v-model="color"
            selectTitle="Kolor"
            :selectItems="colors"
            itemToShow="colorName"
            :multiselect="true"
          ></app-select-with-search-input>
        </div>
      </div>
      <button
        class="toggle-more-btn"
        @click.prevent="toggleMoreInfo"
        :class="moreInfoExpanded ? 'more-info-expanded' : ''"
      >
        <span v-if="moreInfoExpanded">Pokaż mniej</span>
        <span v-else>Pokaż więcej</span>
        <span class="dropdown-arrow"></span>
      </button>
      <div
        class="more-info-container"
        :class="moreInfoExpanded ? 'more-info-expanded' : ''"
      >
        <div class="form-group info">
          <div class="info-item">
            <app-select-with-search-input
              :autoclose="false"
              v-if="driveTypes.length && isReRendered"
              v-model="drive"
              selectTitle="Napęd"
              :selectItems="driveTypes"
              itemToShow="driveType"
              :multiselect="true"
            ></app-select-with-search-input>
          </div>
          <div class="info-item">
            <app-select-with-search-input
              :autoclose="false"
              v-if="gearboxTypes.length && isReRendered"
              v-model="gearbox"
              selectTitle="Skrzynia biegów"
              :selectItems="gearboxTypes"
              itemToShow="gearboxType"
              :multiselect="true"
            ></app-select-with-search-input>
          </div>
          <div class="info-item info-item--contact">
            <div class="form-group">
              <input
                class="form-input location-input"
                type="text"
                placeholder="Lokalizacja"
                v-model="location"
                id="location"
                @input="findPlace"
              />
              <label for="location" class="location-input--label"></label>
            </div>
            <div
              data-simplebar
              class="select-scrolled places"
              v-if="places.length && isLocationOpened"
            >
              <div>
                <p
                  class="place"
                  v-for="(place, index) in places"
                  :key="index"
                  @click="selectLocation(place)"
                >
                  <span class="place-name">{{ place.name }}</span>
                  <span class="place-description">{{ place.description }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="info-item"></div>
        </div>
        <div class="form-group info">
          <div class="info-item">
            <app-select-with-search-input
              :autoclose="true"
              v-if="doors.length && isReRendered"
              v-model="numOfDoorsFrom"
              :selectTitle="numOfDoorsFrom"
              :selectItems="doors"
              itemToShow="numOfDoors"
            ></app-select-with-search-input>
          </div>
          <div class="info-item">
            <app-select-with-search-input
              :autoclose="true"
              v-if="doors.length && isReRendered"
              v-model="numOfDoorsTo"
              :selectTitle="numOfDoorsTo"
              :selectItems="doors"
              itemToShow="numOfDoors"
            ></app-select-with-search-input>
          </div>
          <div class="info-item">
            <app-select-with-search-input
              :autoclose="true"
              v-if="seats.length && isReRendered"
              v-model="numOfSeatsFrom"
              :selectTitle="numOfSeatsFrom"
              :selectItems="seats"
              itemToShow="numOfSeats"
            ></app-select-with-search-input>
          </div>
          <div class="info-item">
            <app-select-with-search-input
              :autoclose="true"
              v-if="seats.length && isReRendered"
              v-model="numOfSeatsTo"
              :selectTitle="numOfSeatsTo"
              :selectItems="seats"
              itemToShow="numOfSeats"
            ></app-select-with-search-input>
          </div>
        </div>
        <span class="divider"></span>
        <div class="form-group info flex-30">
          <div
            class="form-group info-item"
            v-for="(info, index) in additionalInfo"
            :key="index"
          >
            <app-check-box
              :itemTitle="info.label"
              v-model="info.value"
              :checked.sync="info.value"
            ></app-check-box>
          </div>
        </div>
        <span class="divider"></span>
        <div class="form-group info flex-20">
          <div
            class="form-group info-item"
            v-for="(item, index) in searchEquipment"
            :key="index"
          >
            <app-check-box
              :itemTitle="item.label"
              v-model="item.value"
              :checked.sync="item.value"
            ></app-check-box>
          </div>
        </div>
      </div>
      <button class="form-button-submit" @click.prevent="search">Szukaj</button>
    </form>
    <article class="search-filters" v-if="filters.length">
      <ul class="search-filter--list">
        <li
          class="info-equipment--item search-filter"
          v-for="(filter, index) in filters"
          :key="index"
        >
          {{ standardFieldsDefaultValues[filter] }}
          <button
            class="item-remove-btn"
            @click.prevent="removeFilter(filter)"
          ></button>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import AppSelectWithSearchInput from "@/components/UI/SelectWithSearchInput";
import AppTagLishItem from "@/components/UI/TagLishItem";
import AppCheckBox from "@/components/UI/CheckBox";
import OverlayScrollbars from "os-vue/overlay-scrollbars";
import debounce from "debounce";

export default {
  data() {
    return {
      isReRendered: true,
      brand: "Marka samochodu",
      model: "Model samochodu",
      version: "Wersja",
      category: "Kategoria",
      yearOfProdFrom: "Rok produkcji od",
      yearOfProdTo: "Rok produkcji do",
      productionsYears: [],
      fuel: "Rodzaj paliwa",
      gearbox: "Skrzynia biegów",
      drive: "Napęd",
      mileageFrom: "",
      mileageTo: "",
      vin: "",
      engineCode: "",
      capacityFrom: "",
      capacityTo: "",
      powerFrom: "",
      powerTo: "",
      title: "",
      description: "",
      priceFrom: "",
      priceTo: "",
      countryOfProd: "Kraj pochodzenia",
      firstRegistration: "",
      additionalInfo: {
        registerInPoland: {
          label: "Zarejestrowany w Polsce",
          value: false
        },
        firstOwner: {
          label: "Pierwszy właściciel",
          value: false
        },
        damaged: {
          label: "Uszkodzony",
          value: false
        },
        dpf: {
          label: "Filtr cząstek stałych (DPF)",
          value: false
        },
        noAccidents: {
          label: "Bezwypadkowy",
          value: false
        },
        servisedInAso: {
          label: "Serwisowany w ASO",
          value: false
        },
        registerAsAntique: {
          label: "Zarejestrowany jako zabytek",
          value: false
        },
        tunned: {
          label: "Tuningowany",
          value: false
        },
        homologated: {
          label: "Posiada homologację",
          value: false
        }
      },
      searchEquipment: [],
      numOfDoorsFrom: "Liczba drzwi od",
      numOfDoorsTo: "Liczba drzwi do",
      doors: [],
      numOfSeatsFrom: "Liczba miejsc od",
      numOfSeatsTo: "Liczba miejsc do",
      seats: [],
      color: "Kolor",
      username: "",
      email: "",
      phone: "",
      location: "",
      lang: {
        days: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "Sb"],
        pickers: [
          "następne 7 dni",
          "następne 30 dni",
          "poprzednie 7 dni",
          "poprzenie 30 dni"
        ],
        months: [
          "Styczeń",
          "Luty",
          "Marzec",
          "Kwiecień",
          "Maj",
          "Czerwiec",
          "Lipiec",
          "Sierpień",
          "Wrzesień",
          "Październik",
          "Listopad",
          "Grudzień"
        ],
        placeholder: {
          date: "Data pierwszej rejestracji",
          dateRange: "Wybierz przedział czasowy"
        }
      },
      moreInfoExpanded: false,
      isLocationOpened: false,
      places: [],
      selectedPlace: null,
      filters: [],
      standardFieldsDefaultValues: {
        brand: "Marka samochodu",
        model: "Model samochodu",
        category: "Kategoria",
        version: "Wersja",
        color: "Kolor",
        countryOfProd: "Kraj pochodzenia"
      }
    };
  },
  components: {
    AppSelectWithSearchInput,
    AppTagLishItem,
    AppCheckBox,
    OverlayScrollbars
  },
  computed: {
    ...mapGetters([
      "brands",
      "categories",
      "equipment",
      "fuelTypes",
      "gearboxTypes",
      "driveTypes",
      "countriesOfProd",
      "colors"
    ]),
    models() {
      let brandModels = [];
      if (this.brands.filter(brand => brand.brand === this.brand)[0]) {
        brandModels = this.brands.filter(brand => brand.brand === this.brand)[0]
          .models;
      }
      return brandModels;
    },
    versions() {
      let selectedBrand = this.brands.filter(
        brand => brand.brand === this.brand
      )[0];
      if (
        selectedBrand &&
        selectedBrand.versions &&
        selectedBrand.versions[this.model]
      ) {
        return selectedBrand.versions[this.model];
      }
      return [];
    }
  },
  methods: {
    toggleMoreInfo() {
      this.moreInfoExpanded = !this.moreInfoExpanded;
    },
    search() {
      let searchQuery = {};
      if (this.brand !== "Marka samochodu")
        searchQuery.brand = { $regex: this.brand, $options: "i" };
      if (this.model !== "Model samochodu")
        searchQuery.model = { $regex: this.model, $options: "i" };
      if (this.version !== "Wersja")
        searchQuery.version = { $regex: this.version, $options: "i" };
      if (this.category !== "Kategoria")
        searchQuery.category = { $regex: this.category, $options: "i" };

      let fromToQueries = [
        {
          itemsFrom: this.priceFrom,
          itemsTo: this.priceTo,
          fromDefault: "",
          toDefault: "",
          queryField: "price",
          valMin: 0,
          valMax: 999999999999999999
        },
        {
          itemsFrom: this.yearOfProdFrom,
          itemsTo: this.yearOfProdTo,
          fromDefault: "Rok produkcji od",
          toDefault: "Rok produkcji do",
          queryField: "yearOfProd",
          valMin: 1900,
          valMax: new Date().getFullYear()
        },
        {
          itemsFrom: this.mileageFrom,
          itemsTo: this.mileageTo,
          fromDefault: "",
          toDefault: "",
          queryField: "mileage",
          valMin: 0,
          valMax: 999999999999999999
        },
        {
          itemsFrom: this.capacityFrom,
          itemsTo: this.capacityTo,
          fromDefault: "",
          toDefault: "",
          queryField: "capacity",
          valMin: 0,
          valMax: 999999999999999999
        },
        {
          itemsFrom: this.powerFrom,
          itemsTo: this.powerTo,
          fromDefault: "",
          toDefault: "",
          queryField: "power",
          valMin: 0,
          valMax: 999999999999999999
        },
        {
          itemsFrom: this.numOfDoorsFrom,
          itemsTo: this.numOfDoorsTo,
          fromDefault: "Liczba drzwi od",
          toDefault: "Liczba drzwi do",
          queryField: "numOfDoors",
          valMin: 0,
          valMax: 999999999999999999
        },
        {
          itemsFrom: this.numOfSeatsFrom,
          itemsTo: this.numOfSeatsTo,
          fromDefault: "Liczba miejsc od",
          toDefault: "Liczba miejsc do",
          queryField: "numOfSeats",
          valMin: 0,
          valMax: 999999999999999999
        }
      ];
      this.checkFromToQuery(searchQuery, fromToQueries);
      let optionalQueries = [
        {
          items: this.countryOfProd,
          default: "Kraj pochodzenia",
          queryField: "countryOfProd"
        },
        { items: this.fuel, default: "Rodzaj paliwa", queryField: "fuel" },
        { items: this.color, default: "Kolor", queryField: "color" },
        { items: this.drive, default: "Napęd", queryField: "drive" },
        {
          items: this.gearbox,
          default: "Skrzynia biegów",
          queryField: "gearbox"
        }
      ];
      this.checkOptionalQuery(searchQuery, optionalQueries);

      let additionalQueries = [
        "registerInPoland",
        "firstOwner",
        "damaged",
        "dpf",
        "noAccidents",
        "servisedInAso",
        "registerAsAntique",
        "tunned",
        "homologated"
      ];
      this.checkAdditionalQuery(searchQuery, additionalQueries);

      if (this.location !== "")
        searchQuery["location.placeId"] = this.selectedPlace.placeId;

      let selectedSearchEquipment = [];
      this.searchEquipment.forEach(eqItem => {
        if (eqItem.value) {
          selectedSearchEquipment.push({
            equipmentName: eqItem.label,
            visible: "hidden"
          });
        }
      });
      if (selectedSearchEquipment.length)
        searchQuery.equipment = { $in: selectedSearchEquipment };

      let query = {
        type: "complex",
        phrase: searchQuery
      };
      this.$store.dispatch("clearSearchResults");
      this.$store.dispatch("setSearchPhrase", query);
      this.$store.dispatch("getSearchedCars", query);
    },
    checkAdditionalQuery(searchQuery, options) {
      options.forEach(option => {
        if (this.additionalInfo[option].value) searchQuery[option] = true;
      });
    },
    checkFromToQuery(searchQuery, options) {
      options.forEach(option => {
        let selectedFromToItems = [];
        if (
          option.itemsFrom !== option.fromDefault ||
          option.itemsTo !== option.toDefault
        ) {
          searchQuery[option.queryField] = {
            $gte:
              option.itemsFrom !== option.fromDefault
                ? option.itemsFrom
                : option.valMin,
            $lte:
              option.itemsTo !== option.toDefault
                ? option.itemsTo
                : option.valMax
          };
        }
      });
    },
    checkOptionalQuery(searchQuery, options) {
      options.forEach(option => {
        let selectedOptionalItems = [];
        if (option.items !== option.default) {
          option.items.forEach(item => {
            selectedOptionalItems.push(item);
          });
          if (selectedOptionalItems.length)
            searchQuery[option.queryField] = { $in: selectedOptionalItems };
        }
      });
    },
    findPlace(e) {
      this.$axios
        .post("/api/places/", { placeToFind: encodeURI(e.target.value) })
        .then(response => {
          this.places = [];
          response.data.predictions.forEach(place => {
            this.places.push({
              placeId: place.place_id,
              name: place.structured_formatting.main_text,
              description: place.description
            });
          });
          this.isLocationOpened = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    selectLocation(place) {
      this.location = place.description;
      this.isLocationOpened = false;
      this.selectedPlace = place;
    },
    removeFilter(filter) {
      if (this.filters.includes(filter)) {
        this.filters.splice(this.filters.indexOf(filter), 1);
        this[filter] = this.standardFieldsDefaultValues[filter];
      }
      if (filter === "brand") {
        this.removeFilter("model");
      }
      if (filter === "model") {
        this.removeFilter("version");
      }
      this.search();
    },
    checkFields(fieldName, val) {
      if (
        !this.filters.includes(fieldName) &&
        val != this.standardFieldsDefaultValues[fieldName]
      ) {
        this.filters.push(fieldName);
      }
      this.search();
    }
  },
  watch: {
    brand: function(val, oldVal) {
      this.checkFields("brand", val);
      this.removeFilter("model");
    },
    model: function(val) {
      this.checkFields("model", val);
      this.removeFilter("version");
    },
    version: function(val) {
      this.checkFields("version", val);
    },
    countryOfProd: function(val) {
      this.checkFields("countryOfProd", val);
    },
    category: function(val) {
      this.checkFields("category", val);
    },
    color: function(val) {
      this.checkFields("color", val);
    }
  },
  mounted() {
    this.$root.$on("selectChanged", data => {
      if (data === "brand" || data === "model" || data === "fuel") {
        this.isReRendered = false;
        this.$nextTick(() => {
          this.isReRendered = true;
        });
      }
      this.search();
    });
    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i > 1900; i--) {
      this.productionsYears.push({ yearOfProd: i });
    }
    for (let i = 0; i < 10; i++) {
      this.doors.push({ numOfDoors: i + 1 });
      this.seats.push({ numOfSeats: i + 1 });
    }

    this.equipment.forEach(equipmentItem => {
      this.searchEquipment.push({
        label: equipmentItem.equipmentName,
        value: false
      });
    });
    setTimeout(() => {
      let query;
      if (sessionStorage.getItem("search-phrase")) {
        query = JSON.parse(sessionStorage.getItem("search-phrase"));
      } else {
        query = {
          type: "complex",
          phrase: {}
        };
      }
      this.$store.dispatch("getSearchedCars", query);
    }, 500);
  },
  created() {
    this.search = debounce(this.search, 500);
  }
};
</script>

<style>
.toggle-more-btn {
  background-color: transparent;
  border: none;
  outline-color: transparent;
  color: #1a2229;
  cursor: pointer;
  margin: 12px 0;
  text-align: right;
  padding: 0;
  transition: color 0.2s linear;
}
.toggle-more-btn .dropdown-arrow {
  border-color: #ecf0f2;
  border-top-color: #1a2229;
  transition: all 0.2s linear;
}
.toggle-more-btn.more-info-expanded .dropdown-arrow {
  transform: rotate(180deg);
}
.toggle-more-btn:hover {
  color: #2980b9;
}
.toggle-more-btn:hover .dropdown-arrow {
  border-top-color: #2980b9;
}
.container-search-engine .info-item {
  width: 22%;
}
.container-search-engine .flex-30 .info-item {
  width: 30%;
}
.container-search-engine .flex-20 .info-item {
  width: 20%;
}
.more-info-container {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s linear;
}
.more-info-container.more-info-expanded {
  max-height: 1200px;
}
.container-search-engine .info-item.info-item--contact {
  width: 22%;
}
.container-search-engine .places {
  z-index: 9;
}
.search-filters {
  padding: 24px;
}

.search-filter--list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
}

.info-equipment--item.search-filter {
  padding: 8px 20px;
  list-style-type: none;
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 0.75em;
}

@media screen and (max-width: 480px) {
  .container-search-engine .info-item {
    width: 48%;
  }
  .container-search-engine .flex-20 .info-item {
    width: 50%;
  }
  .container-search-engine .flex-30 .info-item {
    width: 48%;
  }
  .more-info-container {
    transition: max-height 0.6s linear;
  }
  .more-info-container.more-info-expanded {
    max-height: 2000px;
  }
}
@media screen and (max-width: 374px) {
  .container-search-engine .info-item,
  .container-search-engine .flex-30 .info-item {
    width: 100%;
  }
  .more-info-container {
    transition: max-height 0.8s linear;
  }
  .more-info-container.more-info-expanded {
    max-height: 2400px;
  }
}
</style>
