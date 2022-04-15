var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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

app.get("/home", function (req, res, next) {
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

module.exports = app;
