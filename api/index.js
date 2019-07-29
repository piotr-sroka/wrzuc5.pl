import express from "express";
import mongoose from "mongoose";
import userSchema from './models/userSchema';
import carInfoSchema from './models/carInfoSchema';
import imageSchema from './models/imageSchema';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes/appRouter';

const app = express();

app.use(express.static(__dirname + '/public'));

mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});

module.exports = {
  path: "/api",
  handler: routes
};
