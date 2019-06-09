const pkg = require("./package");
const bodyParser = require("body-parser");
const env = require("dotenv").config();

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "5.pl",
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: pkg.description }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL: "http://localhost:3000/"
  },

  env: env.parsed,

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  serverMiddleware: [bodyParser.json(), "~/api"]
};
