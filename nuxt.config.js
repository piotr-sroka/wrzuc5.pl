const pkg = require("./package");
const bodyParser = require("body-parser");
const env = require("dotenv").config();
const path = require("path");
const serveStatic = require("serve-static");

module.exports = {
  head: {
    htmlAttrs: {
      lang: "pl",
    },
    title: "wrzuc5.pl",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      {
        name: "google-site-verification",
        content: "8SRdc8W60miQcIKkDS-T0Tp2Da8TanZdRh69k1R7Xo4",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3498db" },

  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/datepicker", ssr: false },
    { src: "~/plugins/vue2-google-maps", ssr: false },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "http://ps-dev.ovh/"
        : "http://localhost:3000/",
  },

  // env: env.parsed,
  env: {
    GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [/^vue2-google-maps($|\/)/],
    extend(config, ctx) {},
  },
  vendor: ["vue2-google-maps"],
  serverMiddleware: [
    bodyParser.json(),
    "~/api",
    {
      path: "/uploaded-images",
      handler: serveStatic(path.join(__dirname, "uploaded-images")),
    },
  ],
  telemetry: false,
};
