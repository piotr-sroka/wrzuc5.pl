const pkg = require("./package");
const bodyParser = require("body-parser");
const env = require("dotenv").config();

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "wrzuc5.pl",
    meta: [{charset: "utf-8"}, {name: "viewport", content: "width=device-width, initial-scale=1"}, {hid: "description", name: "description", content: pkg.description}],
    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {color: "#3498db"},

  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{src: "~/plugins/datepicker", ssr: false}, {src: "~/plugins/vue2-google-maps", ssr: true}],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL: process.env.NODE_ENV === "production" ? "https://wrzuc5.herokuapp.com/" : "http://localhost:3000/"
  },

  env: env.parsed,

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [/^vue2-google-maps($|\/)/],
    extend(config, ctx) {}
  },
  vendor: ["vue2-google-maps"],
  serverMiddleware: [bodyParser.json(), "~/api"]
};
