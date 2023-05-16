const express = require('express');
const logger = require('morgan');
const { errorHandler, pageNotFound } = require('./src/middlewares');
const indexRouter = require('./src/routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger('development'));

// Routes
app.use(indexRouter);

app.use(errorHandler);
app.use(pageNotFound);

module.exports = app;