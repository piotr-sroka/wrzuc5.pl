import Cookie from "js-cookie";

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
    state.auth = authData;
  }
};
export const actions = {
  nuxtServerInit({commit}, {req}) {
    //   console.log(localStorage);
    // console.log(req.body);
    // commit("setAuth", true);
  },
  setAuth({commit}, req) {
    commit("setAuth", {isLoggedIn: true, user: req.loggedUser.id, token: req.token});
    localStorage.setItem("logged-user", req.loggedUser.id);
    localStorage.setItem("auth-token", req.token);
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
        token = req.headers.cookie.split(";").find(c => c.trim().startsWith("jwt=")).split("=")[1];
        user = req.headers.cookie.split(";").find(c => c.trim().startsWith("logged-user=")).split("=")[1];
    } else {
        token = localStorage.getItem("auth-token");
        user = localStorage.getItem("logged-user");
    }
    if (!token || !user) return;
    commit("setAuth", {isLoggedIn: true, user: user, token: token});
  }
};
