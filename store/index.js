import Cookie from "js-cookie";
import jwt from "jsonwebtoken";

export const state = () => {
  return {
    auth: {
      isLoggedIn: false,
      user: null,
      token: null
    }
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
  }
};
export const actions = {
  nuxtServerInit({ commit }, { req }) {},
  setAuth({ commit }, req) {
    commit("setAuth", { isLoggedIn: true, user: req.loggedUser.id, token: req.token });
    localStorage.setItem("logged-user", req.loggedUser.id);
    localStorage.setItem("auth-token", req.token);
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
      token = localStorage.getItem("auth-token");
      user = localStorage.getItem("logged-user");
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
    localStorage.removeItem("auth-token");
    localStorage.removeItem("logged-user");
    commit("logout");
  }
};
