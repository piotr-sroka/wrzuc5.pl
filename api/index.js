// const express = require("express");
// const path = require("path");
import express from "express";
import mongoose from "mongoose";
import userSchema from "./models/userSchema";
import carInfoSchema from "./models/carInfoSchema";
import imageSchema from "./models/imageSchema";
import bodyParser from "body-parser";
import path from "path";
import routes from "./routes/appRouter";

const app = express();

// app.use(express.static(__dirname + "/public"));
app.use("/uploaded-images", express.static(path.join(__dirname, "..", "uploaded-images")));
// app.use("uploaded-images", express.static(path.join(__dirname, "..", "uploaded-images")));

mongoose.Promise = global.Promise;

// mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

module.exports = {
  path: "/api",
  handler: routes,
};

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// })
