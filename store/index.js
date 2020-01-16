import Cookie from "js-cookie";
import jwt from "jsonwebtoken";

export const state = () => {
  return {
    auth: {
      isLoggedIn: false,
      user: null,
      token: null
    },
    cars: [],
    carToEdit: null,
    searchPhrase: "",
    findedCard: [],
    searching: false,
    brands: [
      {brand: "Abarth", models: ["124", "500", "595", "Grande Punto"]},
      {brand: "Acura", models: ["CL", "Integra", "Legend", "MDX", "NSX", "RDX", "RL", "RSX", "TL", "TSX", "VIGOR", "ZDX"], versions: {CL: ["C140 (1992-1998)", "C215 (1999-2006)", "C216 (2006-2013)"]}},
      {brand: "Aixam", models: ["Model A", "Model B"]},
      {brand: "Alfa Romeo", models: ["Model A", "Model B"]},
      {brand: "Alpine", models: ["Model A", "Model B"]},
      {brand: "Aro", models: ["Model A", "Model B"]},
      {brand: "Asia", models: ["Model A", "Model B"]},
      {brand: "Aston Martin", models: ["Model A", "Model B"]},
      {brand: "Audi", models: ["A1", "A2", "A3"], versions: {A3: ["8L (1996-2003)", "8P (2003-2012)", "8V (2012-)"]}},
      {brand: "Austin", models: ["Model A", "Model B"]},
      {brand: "Autobianchi", models: ["Model A", "Model B"]},
      {brand: "Baic", models: ["Model A", "Model B"]},
      {brand: "Befard", models: ["Model A", "Model B"]},
      {brand: "Bentley", models: ["Model A", "Model B"]},
      {brand: "BMW", models: ["Model A", "Model B"]},
      {brand: "Bobcat", models: ["Model A", "Model B"]},
      {brand: "Bolloré", models: ["Model A", "Model B"]},
      {brand: "Brilliance", models: ["Model A", "Model B"]},
      {brand: "Bugatti", models: ["Model A", "Model B"]},
      {brand: "Buick", models: ["Model A", "Model B"]},
      {brand: "Cadillac", models: ["Model A", "Model B"]},
      {brand: "Casalini", models: ["Model A", "Model B"]},
      {brand: "Caterham", models: ["Model A", "Model B"]},
      {brand: "Chatenet", models: ["Model A", "Model B"]},
      {brand: "Chevrolet", models: ["Model A", "Model B"]},
      {brand: "Chrysler", models: ["Model A", "Model B"]},
      {brand: "Citroën", models: ["Model A", "Model B"]},
      {brand: "Comarth", models: ["Model A", "Model B"]},
      {brand: "Cupra", models: ["Model A", "Model B"]},
      {brand: "Dacia", models: ["Model A", "Model B"]},
      {brand: "Daewoo", models: ["Model A", "Model B"]},
      {brand: "Daihatsu", models: ["Model A", "Model B"]},
      {brand: "De Lorean", models: ["Model A", "Model B"]},
      {brand: "DFSK", models: ["Model A", "Model B"]},
      {brand: "DKW", models: ["Model A", "Model B"]},
      {brand: "Dodge", models: ["Model A", "Model B"]},
      {brand: "DS Automobiles", models: ["Model A", "Model B"]},
      {brand: "Eagle", models: ["Model A", "Model B"]},
      {brand: "FAW", models: ["Model A", "Model B"]},
      {brand: "Ferrari", models: ["Model A", "Model B"]},
      {brand: "Fiat", models: ["Model A", "Model B"]},
      {brand: "Ford", models: ["Focus", "Fiesta", "Ka", "Mondeo"]},
      {brand: "Galloper", models: ["Model A", "Model B"]},
      {brand: "Gaspardo", models: ["Model A", "Model B"]},
      {brand: "Gaz", models: ["Model A", "Model B"]},
      {brand: "Geely", models: ["Model A", "Model B"]},
      {brand: "GMC", models: ["Model A", "Model B"]},
      {brand: "Gonow", models: ["Model A", "Model B"]},
      {brand: "Grecav", models: ["Model A", "Model B"]},
      {brand: "GWM", models: ["Model A", "Model B"]},
      {brand: "Hammer", models: ["Model A", "Model B"]},
      {brand: "Holden", models: ["Model A", "Model B"]},
      {brand: "Honda", models: ["Model A", "Model B"]},
      {brand: "Hummer", models: ["Model A", "Model B"]},
      {brand: "Hyundai", models: ["Model A", "Model B"]},
      {brand: "Infiniti", models: ["Model A", "Model B"]},
      {brand: "Isuzu", models: ["Model A", "Model B"]},
      {brand: "Iveco", models: ["Model A", "Model B"]},
      {brand: "Jaguar", models: ["Model A", "Model B"]},
      {brand: "Jeep", models: ["Model A", "Model B"]},
      {brand: "John Deere", models: ["Model A", "Model B"]},
      {brand: "Kaipan", models: ["Model A", "Model B"]},
      {brand: "Kia", models: ["Model A", "Model B"]},
      {brand: "Kuhn", models: ["Model A", "Model B"]},
      {brand: "Lada", models: ["Model A", "Model B"]},
      {brand: "Lamborghini", models: ["Model A", "Model B"]},
      {brand: "Lancia", models: ["Model A", "Model B"]},
      {brand: "Land Rover", models: ["Model A", "Model B"]},
      {brand: "Lexus", models: ["Model A", "Model B"]},
      {brand: "Ligier", models: ["Model A", "Model B"]},
      {brand: "Lincoln", models: ["Model A", "Model B"]},
      {brand: "Lotus", models: ["Model A", "Model B"]},
      {brand: "LTI", models: ["Model A", "Model B"]},
      {brand: "LuAZ", models: ["Model A", "Model B"]},
      {brand: "Mahindra", models: ["Model A", "Model B"]},
      {brand: "Maruti", models: ["Model A", "Model B"]},
      {brand: "Maserati", models: ["Model A", "Model B"]},
      {brand: "Maybach", models: ["Model A", "Model B"]},
      {brand: "Mazda", models: ["Model A", "Model B"]},
      {brand: "McLaren", models: ["Model A", "Model B"]},
      {brand: "Mercedes-Benz", models: ["Model A", "Model B"]},
      {brand: "Mercury", models: ["Model A", "Model B"]},
      {brand: "MG", models: ["Model A", "Model B"]},
      {brand: "Microcar", models: ["Model A", "Model B"]},
      {brand: "Mini", models: ["Model A", "Model B"]},
      {brand: "Mitsubishi", models: ["Model A", "Model B"]},
      {brand: "Morgan", models: ["Model A", "Model B"]},
      {brand: "Moskwicz", models: ["Model A", "Model B"]},
      {brand: "Nissan", models: ["Model A", "Model B"]},
      {brand: "NSU", models: ["Model A", "Model B"]},
      {brand: "Nysa", models: ["Model A", "Model B"]},
      {brand: "Oldsmobile", models: ["Model A", "Model B"]},
      {brand: "Oltcit", models: ["Model A", "Model B"]},
      {brand: "Opel", models: ["Model A", "Model B"]},
      {brand: "Peugeot", models: ["Model A", "Model B"]},
      {brand: "Piaggio", models: ["Model A", "Model B"]},
      {brand: "Plymouth", models: ["Model A", "Model B"]},
      {brand: "Polonez", models: ["Model A", "Model B"]},
      {brand: "Pontiac", models: ["Model A", "Model B"]},
      {brand: "Porsche", models: ["Model A", "Model B"]},
      {brand: "Proton", models: ["Model A", "Model B"]},
      {brand: "RAM", models: ["Model A", "Model B"]},
      {brand: "Rayton Fissore", models: ["Model A", "Model B"]},
      {brand: "Renault", models: ["Model A", "Model B"]},
      {brand: "Rolls-Royce", models: ["Model A", "Model B"]},
      {brand: "Rover", models: ["Model A", "Model B"]},
      {brand: "Saab", models: ["Model A", "Model B"]},
      {brand: "Santana", models: ["Model A", "Model B"]},
      {brand: "Saturn", models: ["Model A", "Model B"]},
      {brand: "Scion", models: ["Model A", "Model B"]},
      {brand: "Seat", models: ["Model A", "Model B"]},
      {brand: "Shuanghuan", models: ["Model A", "Model B"]},
      {brand: "Škoda", models: ["Model A", "Model B"]},
      {brand: "Smart", models: ["Model A", "Model B"]},
      {brand: "SsangYong", models: ["Model A", "Model B"]},
      {brand: "Subaru", models: ["Model A", "Model B"]},
      {brand: "Suzuki", models: ["Model A", "Model B"]},
      {brand: "Syrena", models: ["Model A", "Model B"]},
      {brand: "Talbot", models: ["Model A", "Model B"]},
      {brand: "Tarpan", models: ["Model A", "Model B"]},
      {brand: "Tata", models: ["Model A", "Model B"]},
      {brand: "Tatra", models: ["Model A", "Model B"]},
      {brand: "Tavria", models: ["Model A", "Model B"]},
      {brand: "Tesla", models: ["Model A", "Model B"]},
      {brand: "Thumm", models: ["Model A", "Model B"]},
      {brand: "Toyota", models: ["Model A", "Model B"]},
      {brand: "Trabant", models: ["Model A", "Model B"]},
      {brand: "Triumph", models: ["Model A", "Model B"]},
      {brand: "TVR", models: ["Model A", "Model B"]},
      {brand: "Uaz", models: ["Model A", "Model B"]},
      {brand: "Vauxhall", models: ["Model A", "Model B"]},
      {brand: "Volkswagen", models: ["Model A", "Model B"]},
      {brand: "Volvo", models: ["Model A", "Model B"]},
      {brand: "VTN", models: ["Model A", "Model B"]},
      {brand: "Warszawa", models: ["Model A", "Model B"]},
      {brand: "Wartburg", models: ["Model A", "Model B"]},
      {brand: "Weismann", models: ["Model A", "Model B"]},
      {brand: "Wołga", models: ["Model A", "Model B"]},
      {brand: "Yugo", models: ["Model A", "Model B"]},
      {brand: "Zaporożec", models: ["Model A", "Model B"]},
      {brand: "Zastava", models: ["Model A", "Model B"]},
      {brand: "Żuk", models: ["Model A", "Model B"]},
      {brand: "Inny", models: []}
    ],
    categories: [
      {categoryName: "Miejskie"},
      {categoryName: "Małe"},
      {categoryName: "Kompaktowe"},
      {categoryName: "Rodzinne"},
      {categoryName: "Luksusowe"},
      {categoryName: "Sportowe"},
      {categoryName: "Terenowe"},
      {categoryName: "Kabriolety"},
      {categoryName: "Vany"},
    ],
    equipment: [
      {equipmentName: "ABS", visible: "visible"},
      {equipmentName: "CD", visible: "visible"},
      {equipmentName: "Centralny zamek", visible: "visible"},
      {equipmentName: "Elektryczne szyby przednie", visible: "visible"},
      {equipmentName: "Elektrycznie ustawiane lusterka", visible: "visible"},
      {equipmentName: "Immobilizer", visible: "visible"},
      {equipmentName: "Poduszka powietrzna kierowcy", visible: "visible"},
      {equipmentName: "Poduszka powietrzna pasażera", visible: "visible"},
      {equipmentName: "Radio fabryczne", visible: "visible"},
      {equipmentName: "Wspomaganie kierownicy", visible: "visible"},
      {equipmentName: "Alarm", visible: "visible"},
      {equipmentName: "Alufelgi", visible: "visible"},
      {equipmentName: "ASR (kontrola trakcji)", visible: "visible"},
      {equipmentName: "Asystent parkowania", visible: "visible"},
      {equipmentName: "Asystent pasa ruchu", visible: "visible"},
      {equipmentName: "Bluetooth", visible: "visible"},
      {equipmentName: "Czujnik deszczu", visible: "visible"},
      {equipmentName: "Czujnik martwego pola", visible: "visible"},
      {equipmentName: "Czujnik zmierzchu", visible: "visible"},
      {equipmentName: "Czujniki parkowania przednie", visible: "visible"},
      {equipmentName: "Czujniki parkowania tylne", visible: "visible"},
      {equipmentName: "Dach panoramiczny", visible: "visible"},
      {equipmentName: "Elektrochromatyczne lusterka boczne", visible: "visible"},
      {equipmentName: "Elektrochromatyczne lusterko wsteczne", visible: "visible"},
      {equipmentName: "Elektryczne szyby tylne", visible: "visible"},
      {equipmentName: "Elektrycznie ustawiane fotele", visible: "visible"},
      {equipmentName: "ESP (stabilizacja toru jazdy)", visible: "visible"},
      {equipmentName: "Gniazdo AUX", visible: "visible"},
      {equipmentName: "Gniazdo SD", visible: "visible"},
      {equipmentName: "Gniazdo USB", visible: "visible"},
      {equipmentName: "Hak", visible: "visible"},
      {equipmentName: "HUD (wyświetlacz przezierny)", visible: "visible"},
      {equipmentName: "Isofix", visible: "visible"},
      {equipmentName: "Kamera cofania", visible: "visible"},
      {equipmentName: "Klimatyzacja automatyczna", visible: "visible"},
      {equipmentName: "Klimatyzacja czterostrefowa", visible: "visible"},
      {equipmentName: "Klimatyzacja dwustrefowa", visible: "visible"},
      {equipmentName: "Klimatyzacja manualna", visible: "visible"},
      {equipmentName: "Komputer pokładowy", visible: "visible"},
      {equipmentName: "Kurtyny powietrzne", visible: "visible"},
      {equipmentName: "Łopatki zmiany biegów", visible: "visible"},
      {equipmentName: "MP3", visible: "visible"},
      {equipmentName: "Nawigacja GPS", visible: "visible"},
      {equipmentName: "Odtwarzacz DVD", visible: "visible"},
      {equipmentName: "Ogranicznik prędkości", visible: "visible"},
      {equipmentName: "Ogrzewanie postojowe", visible: "visible"},
      {equipmentName: "Podgrzewana przednia szyba", visible: "visible"},
      {equipmentName: "Podgrzewane lusterka boczne", visible: "visible"},
      {equipmentName: "Podgrzewane przednie siedzenia", visible: "visible"},
      {equipmentName: "Podgrzewane tylne siedzenia", visible: "visible"},
      {equipmentName: "Poduszka powietrzna chroniąca kolana", visible: "visible"},
      {equipmentName: "Poduszki boczne przednie", visible: "visible"},
      {equipmentName: "Poduszki boczne tylne", visible: "visible"},
      {equipmentName: "Przyciemniane szyby", visible: "visible"},
      {equipmentName: "Radio niefabryczne", visible: "visible"},
      {equipmentName: "Regulowane zawieszenie", visible: "visible"},
      {equipmentName: "Relingi dachowe", visible: "visible"},
      {equipmentName: "System Start-Stop", visible: "visible"},
      {equipmentName: "Szyberdach", visible: "visible"},
      {equipmentName: "Światła do jazdy dziennej", visible: "visible"},
      {equipmentName: "Światła LED", visible: "visible"},
      {equipmentName: "Światła przeciwmgielne", visible: "visible"},
      {equipmentName: "Światła Xenonowe", visible: "visible"},
      {equipmentName: "Tapicerka skórzana", visible: "visible"},
      {equipmentName: "Tapicerka welurowa", visible: "visible"},
      {equipmentName: "Tempomat", visible: "visible"},
      {equipmentName: "Tempomat aktywny", visible: "visible"},
      {equipmentName: "Tuner TV", visible: "visible"},
      {equipmentName: "Wielofunkcyjna kierownica", visible: "visible"},
      {equipmentName: "Zmieniarka CD", visible: "visible"}
    ],
    fuelTypes: [{fuelType: "Benzyna"}, {fuelType: "Benzyna + LPG"}, {fuelType: "Benzyna + CNG"}, {fuelType: "Diesel"}, {fuelType: "Hybryda"}, {fuelType: "Elektryczny"}, {fuelType: "Etanol"}, {fuelType: "Wodór"}],
    colors: [{colorName: "Beżowy"}, {colorName: "Biały"}, {colorName: "Brązowy"}, {colorName: "Czarny"}, {colorName: "Czerwony"}, {colorName: "Niebieski"}, {colorName: "Srebrny"}, {colorName: "Szary"}, {colorName: "Zielony"}, {colorName: "Złoty"}, {colorName: "Żółty"}, {colorName: "Inny"}],
    gearboxTypes: [{gearboxType: "Automatyczna hydrauliczna"}, {gearboxType: "Automatyczna bezstopniowa"}, {gearboxType: "Automatyczna dwusprzęgłowa"}, {gearboxType: "Manualna"}, {gearboxType: "Półautomatycza"}],
    driveTypes: [{driveType: "4x4"}, {driveType: "Na przednie koła"}, {driveType: "Na tylne koła"}],
    countriesOfProd: [
      {countryName: "Austria"},
      {countryName: "Belgia"},
      {countryName: "Białoruś"},
      {countryName: "Bułgaria"},
      {countryName: "Chorwacja"},
      {countryName: "Czechy"},
      {countryName: "Dania"},
      {countryName: "Estonia"},
      {countryName: "Finlandia"},
      {countryName: "Francja"},
      {countryName: "Grecja"},
      {countryName: "Hiszpania"},
      {countryName: "Holandia"},
      {countryName: "Irlandia"},
      {countryName: "Islandia"},
      {countryName: "Kanada"},
      {countryName: "Liechtenstein"},
      {countryName: "Litwa"},
      {countryName: "Luksemburg"},
      {countryName: "Łotwa"},
      {countryName: "Monako"},
      {countryName: "Niemcy"},
      {countryName: "Norwegia"},
      {countryName: "Polska"},
      {countryName: "Rosja"},
      {countryName: "Rumunia"},
      {countryName: "Słowacja"},
      {countryName: "Słowenia"},
      {countryName: "Stany Zjednoczone"},
      {countryName: "Szwajcaria"},
      {countryName: "Szwecja"},
      {countryName: "Turcja"},
      {countryName: "Ukraina"},
      {countryName: "Węgry"},
      {countryName: "Wielka Brytania"},
      {countryName: "Włochy"},
      {countryName: "Inny"}
    ]
  };
};
export const getters = {
  brands: state => {
    return state.brands;
  },
  categories: state => {
    return state.categories;
  },
  equipment: state => {
    return state.equipment;
  },
  fuelTypes: state => {
    return state.fuelTypes;
  },
  gearboxTypes: state => {
    return state.gearboxTypes;
  },
  countriesOfProd: state => {
    return state.countriesOfProd;
  },
  driveTypes: state => {
    return state.driveTypes;
  },
  user: state => {
    return state.auth.user;
  },
  cars: state => {
    return state.cars;
  },
  colors: state => {
    return state.colors;
  },
  carToEdit: state => {
    return state.carToEdit;
  },
  searchPhrase: state => {
    return state.searchPhrase;
  },
  findedCars: state => {
    return state.findedCard;
  },
  searching: state => {
    return state.searching;
  }
};
export const mutations = {
  setAuth(state, authData) {
    this.state.auth = authData;
  },
  logout(state) {
    this.state.auth.isLoggedIn = false;
    this.state.auth.user = null;
    this.state.auth.token = null;
  },
  getCars(state, cars) {
    this.state.cars = cars;
  },
  hideEquipmentItem(state, itemToHide) {
    if (itemToHide.visible) {
      itemToHide.visible = "hidden";
    }
  },
  unhideEquipmentItem(state, itemToUnhide) {
    if (itemToUnhide.visible) {
      itemToUnhide.visible = "visible";
    }
  },
  editCar(state, carToEdit) {
    if (carToEdit) {
      this.state.carToEdit = carToEdit;
      this.$router.push("/cars/edit/" + carToEdit._id);
    }
  },
  setSearchPhrase(state, searchPhrase) {
    this.state.searchPhrase = searchPhrase;
  },
  getSearchedCars(state, findedCars) {
    this.state.findedCard = findedCars;
  },
  clearSearchResults(state) {
    this.state.findedCard = [];
  },
  searchingStarted(state) {
    this.state.searching = true;
  },
  searchingStopped(state) {
    this.state.searching = false;
  }
};
export const actions = {
  setAuth({commit}, req) {
    commit("setAuth", {isLoggedIn: true, user: req.loggedUser.id, token: req.token});
    localStorage.setItem("logged-user", req.loggedUser.id);
    localStorage.setItem("jwt", req.token);
    Cookie.set("logged-user", req.loggedUser.id);
    Cookie.set("jwt", req.token);
  },
  initAuth({commit}, req) {
    let token;
    let user;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      try {
        token = req.headers.cookie
          .split(";")
          .find(c => c.trim().startsWith("jwt="))
          .split("=")[1];
        user = req.headers.cookie
          .split(";")
          .find(c => c.trim().startsWith("logged-user="))
          .split("=")[1];
      } catch (err) {
        return;
      }
    } else {
      user = localStorage.getItem("logged-user");
      token = localStorage.getItem("jwt");
    }
    if (!token || !user) {
      commit("logout");
      return;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        // console.log(err.message);
        return;
      }
      // console.log(decoded);
      commit("setAuth", {isLoggedIn: true, user: user, token: token});
    });
  },
  logout({commit}) {
    localStorage.removeItem("logged-user");
    localStorage.removeItem("jwt");
    Cookie.remove("logged-user");
    Cookie.remove("jwt");
    commit("logout");
  },
  getCars({commit}, limit) {
    if (!limit) {
      let limit = 50;
    }
    this.$axios
      .get("/api/cars/?limit=" + limit)
      .then(response => {
        commit("getCars", response.data);
      })
      .catch(err => {
        console.log("ERROR");
      });
  },
  hideEquipmentItem({commit}, itemToHide) {
    commit("hideEquipmentItem", itemToHide);
  },
  unhideEquipmentItem({commit}, itemToUnhide) {
    commit("unhideEquipmentItem", itemToUnhide);
  },
  checkOwner({commit}, req) {
    if (req) {
      let carId = req.url.split("/").pop();
      this.$axios
        .get("/api/cars/edit/" + carId)
        .then(response => {
          if (response.data.error) {
            commit("editCar", null);
            this.$router.push("/");
            return;
          }
          commit("editCar", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  clearSearchResults({commit}) {
    commit("clearSearchResults");
  },
  setSearchPhrase({commit}, searchPhrase) {
    commit("setSearchPhrase", searchPhrase);
    let searchStorage = {type: searchPhrase.type, phrase: searchPhrase.phrase};
    sessionStorage.setItem("search-phrase", JSON.stringify(searchStorage));
    Cookie.set("search-phrase", JSON.stringify(searchStorage));
  },
  getSearchedCars({commit}, searchQuery) {
    let query = {
      limit: 10,
      page: 1,
      type: searchQuery.type,
      search: searchQuery.phrase,
      fields: {strings: ["brand", "model", "version", "fuel", "gearbox", "drive", "title", "description", "countryOfProd", "color", "engineCode", "username", "email", "phone"], numbers: ["price"]}
    };
    if (Cookie.get("search-phrase")) {
      let cookieSearch = JSON.parse(Cookie.get("search-phrase"));
      query.type = cookieSearch.type;
      query.search = cookieSearch.phrase;
    }
    commit("searchingStarted");    
    this.$axios
      .post("/api/cars/search/", query)
      .then(response => {
        commit("getSearchedCars", response.data);
        commit("searchingStopped");
      })
      .catch(err => {
        console.log(err);
      });
  }
};
