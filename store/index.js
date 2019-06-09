import Cookie from "js-cookie";
import jwt from "jsonwebtoken";

export const state = () => {
  return {
    auth: {
      isLoggedIn: false,
      user: null,
      token: null
    },
    cars: []
  };
};
export const mutations = {
  setAuth(state, authData) {
    this.state.auth = authData;
  },
  logout(state) {
    this.state.auth = {
      isLoggedIn: false,
      user: null,
      token: null
    };
  },
  addNewCar(state, newCar) {
    this.state.cars.push(newCar);
  },
  getCars(state, cars) {
    this.state.cars = cars;
  }
};
export const actions = {
  nuxtServerInit({ commit }, { req }) { },
  setAuth({ commit }, req) {
    commit("setAuth", { isLoggedIn: true, user: req.loggedUser.id, token: req.token });
    localStorage.setItem("logged-user", req.loggedUser.id);
    localStorage.setItem("jwt", req.token);
    Cookie.set("logged-user", req.loggedUser.id);
    Cookie.set("jwt", req.token);
  },
  initAuth({ commit }, req) {
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
      console.log("get cookies");
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
        console.log(err.message);
        return;
      }
      console.log(decoded);
      commit("setAuth", { isLoggedIn: true, user: user, token: token });
    });
  },
  logout({ commit }) {
    localStorage.removeItem("logged-user");
    localStorage.removeItem("jwt");
    Cookie.remove("logged-user");
    Cookie.remove("jwt");
    commit("logout");
  },
  getCars({ commit }) {
    this.$axios.get("/api/cars/").then(response => {
      commit("getCars", response.data);
    }).catch(err => {
      console.log("ERROR");
    });
  },
  addNewCar({ commit }, carInfo) {
    this.$axios.post("/api/cars/add-new-car/", carInfo).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    })
  }
};
