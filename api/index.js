import express from "express";
import mongoose from "mongoose";
import userSchema from './models/userSchema';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes/appRouter';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://poncki:Sarkos21@ds233737.mlab.com:33737/for_testing_only?authSource=for_testing_only&w=1', {useNewUrlParser: true});

module.exports = {
  path: "/api",
  handler: routes
};
