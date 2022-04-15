var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const Coffee = require("./models/coffee.models");
const Drinks = require("./models/drinks.models");
const Food = require("./models/food.models");

const mongoose = require ('mongoose') ;

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get("/", function (req, res, next) {
  res.render("home-landing", { title: "Casa del Cafe" });
});

app.get('/about', function(req, res, next) {
  res.render('about');
});
app.get('/coffee', function(req, res, next) {
  res.render('coffee');
});
app.get('/food', function(req, res, next) {
  res.render('food');
});
app.get('/entertainment', function(req, res, next) {
  res.render('entertainment');
});
app.get('/contact', function(req, res, next) {
  res.render('contact');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.post("/coffee-create", function (req, res, next) {
  //This is just a function, with regular JS
  Coffee.create({
    country: req.body.country,
    roast: req.body.roast,
    description: req.body.description,
    price: req.body.price,
  })
    .then(function (createdCoffee) {
      //for redirect, this is hitting a url
      res.redirect("/coffee");
      // res.render("index");
    })
    .catch(function (error) {
      // res.render("index");
      res.redirect("/coffee");
    });

  // res.render("index", { title: "Express" });
});

app.post("/drinks-create", function (req, res, next) {
  //This is just a function, with regular JS
  Drinks.create({
    name: req.body.name,
    temperature: req.body.temperature,
    description: req.body.description,
    price: req.body.price,
  })
    .then(function (createdDrinks) {
      //for redirect, this is hitting a url
      res.redirect("/coffee");
      // res.render("index");
    })
    .catch(function (error) {
      // res.render("index");
      res.redirect("/coffee");
    });

  // res.render("index", { title: "Express" });
});

app.post("/food-create", function (req, res, next) {
  //This is just a function, with regular JS
  Food.create({
    name: req.body.country,
    category: req.body.roast,
    description: req.body.description,
    price: req.body.price,
    calories: req.body.calories,
    ingredients: req.body.ingredients,
  })
    .then(function (createdCoffee) {
      //for redirect, this is hitting a url
      res.redirect("/food");
      // res.render("index");
    })
    .catch(function (error) {
      // res.render("index");
      res.redirect("/food");
    });

  // res.render("index", { title: "Express" });
});

mongoose
  .connect('mongodb://localhost/CasaDelCafe')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

module.exports = app;
