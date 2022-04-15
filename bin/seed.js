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
    name: "Americano" ,
    temperature: "Hot",
    description: "prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.",
    price: 5.99,
  },
  {
    name: "Capuccino" ,
    temperature: "Hot",
    description: "the perfect balance of espresso, steamed milk and foam",
    price: 5.50,
  },
  {
    name: "Latte" ,
    temperature: "Cold",
    description: " milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.",
    price: 5.50,
  },
  {
    name: "Mocha" ,
    temperature: "Cold",
    description: "is combined with a chocolate powder or syrup, followed by milk or cream. ",
    price: 6.50,
  },
  {
    name: "Espresso" ,
    temperature: "Hot",
    description: "a concentrated form of coffee served in small, strong shots ",
    price: 4.50,
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