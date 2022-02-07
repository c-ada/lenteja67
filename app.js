var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gabriRouter = require('./routes/gabri')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var options = {
 swaggerDefinition: {
  info: {
   title: "heroku-test",
   version: "0.0.0",
   description: "jaja this is a test",
  },
 },
 apis: [path.join(__dirname, "/routes/*.js")],
};
var swaggerSpecs = swaggerJsdoc(options);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gabri', gabriRouter)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

module.exports = app;
