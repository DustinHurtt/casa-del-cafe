const mongoose = require('mongoose');

const Food = require('../models/Food.models')

let newFoods = [
    {
    name: "Jhon" ,
    category: "Smith",
    description: "Miami",
    ingredients: 33136,
    calories: "Pizza",
    price: "Morning Person"
  },
  {
    name: "Jhon" ,
    category: "Smith",
    description: "Miami",
    ingredients: 33136,
    calories: "Pizza",
    price: "Morning Person"
  },
  {
    name: "Jhon" ,
    category: "Smith",
    description: "Miami",
    ingredients: 33136,
    calories: "Pizza",
    price: "Morning Person"
  },
  {
    name: "Jhon" ,
    category: "Smith",
    description: "Miami",
    ingredients: 33136,
    calories: "Pizza",
    price: "Morning Person"
  },
  {
    name: "Jhon" ,
    category: "Smith",
    description: "Miami",
    ingredients: 33136,
    calories: "Pizza",
    price: "Morning Person"
  }
  ]

const Coffee = require('../models/coffee.models')

let newCoffees = [
    {
    country: "Jhon" ,
    roast: "Smith",
    description: "Miami",
    price: 33136,

  },
  {
    country: "Jhon" ,
    roast: "Smith",
    description: "Miami",
    price: 33136,
  },
  {
    country: "Jhon" ,
    roast: "Smith",
    description: "Miami",
    price: 33136,
  },
  {
    country: "Jhon" ,
    roast: "Smith",
    description: "Miami",
    price: 33136,
  },
  {
    country: "Jhon" ,
    roast: "Smith",
    description: "Miami",
    price: 33136,
  }
  ]

  

const Drinks = require('../models/drinks.models')

let newDrinks = [
    {
    name: "Jhon" ,
    temperature: "Smith",
    description: "Miami",
    price: 33136,
  },
  {
    name: "Jhon" ,
    temperature: "Smith",
    description: "Miami",
    price: 33136,
  },
  {
    name: "Jhon" ,
    temperature: "Smith",
    description: "Miami",
    price: 33136,
  },
  {
    name: "Jhon" ,
    temperature: "Smith",
    description: "Miami",
    price: 33136,
  },
  {
    name: "Jhon" ,
    temperature: "Smith",
    description: "Miami",
    price: 33136,
  }
  ]

mongoose
  .connect('mongodb://localhost/CasaDelCafe') 
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

User.create(newUsers)
.then(function(results){
    console.log("Users Saved", results)
    mongoose.connection.close()
})
.catch (function(error){
    console.log("Something went wrong", error.message)
    mongoose.connection.close()
})