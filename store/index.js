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
      {brand: "Abarth", models: ["124", "500", "595", "Grande Punto"]},
      {brand: "Acura", models: ["CL", "Integra", "Legend", "MDX", "NSX", "RDX", "RL", "RSX", "TL", "TSX", "VIGOR", "ZDX"], versions: {CL: ["C140 (1992-1998)", "C215 (1999-2006)", "C216 (2006-2013)"]}},
      {brand: "Aixam", models: ["Model A", "Model B"]},
      {brand: "Alfa Romeo", models: ["Model A", "Model B"]},
      {brand: "Alpine", models: ["Model A", "Model B"]},
      {brand: "Aro", models: ["Model A", "Model B"]},
      {brand: "Asia", models: ["Model A", "Model B"]},
      {brand: "Aston Martin", models: ["Model A", "Model B"]},
      {brand: "Audi", models: ["A1", "A2", "A3"]},
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
      {brand: "Ford", models: ["Model A", "Model B"]},
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
    ]
  };
};
export const getters = {
  brands: state => {
    return state.brands;
  },
  user: state => {
    return state.auth.user;
  },
  cars: state => {
    return state.cars;
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
  }
};
