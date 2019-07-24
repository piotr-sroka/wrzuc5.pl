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
    brands: [
      {brand: "Abarth", models: ["124", "500", "595", "Grande Punto"], visible: "visible"},
      {brand: "Acura", models: ["CL", "Integra", "Legend", "MDX", "NSX", "RDX", "RL", "RSX", "TL", "TSX", "VIGOR", "ZDX"], versions: {CL: ["C140 (1992-1998)", "C215 (1999-2006)", "C216 (2006-2013)"]}, visible: "visible"},
      {brand: "Aixam", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Alfa Romeo", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Alpine", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Aro", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Asia", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Aston Martin", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Audi", models: ["A1", "A2", "A3"], visible: "visible"},
      {brand: "Austin", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Autobianchi", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Baic", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Befard", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Bentley", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "BMW", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Bobcat", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Bolloré", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Brilliance", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Bugatti", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Buick", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Cadillac", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Casalini", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Caterham", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Chatenet", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Chevrolet", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Chrysler", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Citroën", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Comarth", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Cupra", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Dacia", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Daewoo", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Daihatsu", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "De Lorean", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "DFSK", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "DKW", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Dodge", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "DS Automobiles", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Eagle", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "FAW", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Ferrari", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Fiat", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Ford", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Galloper", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Gaspardo", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Gaz", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Geely", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "GMC", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Gonow", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Grecav", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "GWM", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Hammer", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Holden", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Honda", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Hummer", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Hyundai", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Infiniti", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Isuzu", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Iveco", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Jaguar", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Jeep", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "John Deere", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Kaipan", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Kia", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Kuhn", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Lada", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Lamborghini", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Lancia", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Land Rover", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Lexus", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Ligier", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Lincoln", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Lotus", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "LTI", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "LuAZ", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Mahindra", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Maruti", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Maserati", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Maybach", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Mazda", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "McLaren", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Mercedes-Benz", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Mercury", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "MG", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Microcar", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Mini", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Mitsubishi", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Morgan", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Moskwicz", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Nissan", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "NSU", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Nysa", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Oldsmobile", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Oltcit", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Opel", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Peugeot", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Piaggio", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Plymouth", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Polonez", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Pontiac", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Porsche", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Proton", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "RAM", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Rayton Fissore", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Renault", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Rolls-Royce", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Rover", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Saab", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Santana", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Saturn", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Scion", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Seat", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Shuanghuan", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Škoda", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Smart", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "SsangYong", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Subaru", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Suzuki", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Syrena", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Talbot", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Tarpan", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Tata", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Tatra", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Tavria", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Tesla", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Thumm", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Toyota", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Trabant", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Triumph", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "TVR", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Uaz", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Vauxhall", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Volkswagen", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Volvo", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "VTN", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Warszawa", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Wartburg", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Weismann", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Wołga", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Yugo", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Zaporożec", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Zastava", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Żuk", models: ["Model A", "Model B"], visible: "visible"},
      {brand: "Inny", models: [], visible: "visible"}
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
    gearboxTypes: [{gearboxType: "Automatyczna hydrauliczna"}, {gearboxType: "Automatyczna bezstopniowa"}, {gearboxType: "Automatyczna dwusprzęgłowa"}, {gearboxType: "Manualna"}, {gearboxType: "Półautomatycza"}]
  };
};
export const getters = {
  brands: state => {
    return state.brands;
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
  user: state => {
    return state.auth.user;
  },
  cars: state => {
    return state.cars;
  },
  colors: state => {
    return state.colors;
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
      token = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="))
        .split("=")[1];
      user = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("logged-user="))
        .split("=")[1];
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
  getCars({commit}) {
    this.$axios
      .get("/api/cars/")
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
  }
};
