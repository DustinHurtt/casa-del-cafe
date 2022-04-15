const mongoose = require('mongoose');

const Food = require('../models/food.models')

let newFoods = [
    {
    name: "Panini" ,
    category: "Lunch",
    description: "Grilled and pressed sandwich",
    ingredients: "bread, meat, cheese, vegetables",
    calories: 700,
    price: 8.99
  },
  {
    name: "Pastry" ,
    category: "Breakfast",
    description: "Buttery, flaky, and sweet",
    ingredients: "flour, butter, sugar, fruit",
    calories: 400,
    price: 5.99
  },
  {
    name: "Cobb Salad" ,
    category: "Lunch",
    description: "Hearty, fresh, and flavorful salad",
    ingredients: "lettuce, bacon, tomato, egg, bleu cheese",
    calories: 600,
    price: 7.99
  },
  {
    name: "Spaghetti Aglio e Olio" ,
    category: "Lunch",
    description: "Light and tasty pasta",
    ingredients: "pasta, olive oil, garlic, red pepper flakes, parmesan, ",
    calories: 650,
    price: 7.50
  },
  {
    name: "Fruit Tart" ,
    category: "Desserts",
    description: "A light and sweet dessert.",
    ingredients: "fruit, berries, flour, eggs, sugar",
    calories: 400,
    price: 5.99
  }
  ]

const Coffee = require('../models/coffee.models')

let newCoffees = [
    {
    country: "Colombian" ,
    roast: "Dark",
    description: "From the mountains of Colombia",
    price: 5.99,

  },
  {
    country: "Brazilian" ,
    roast: "Dark",
    description: "Therefore, medium-dark roast is preferred, as a dark roast can project an ashy, bitter flavor. Premium Brazil coffee is low in acidity, exhibits a nutty sweet flavor, and is often bittersweet with a chocolaty roast taste.",
    price: 6.50,
  },
  {
    country: "Nicaraguan" ,
    roast: "Dark",
    description: "The aroma has sweet caramel, citrus, and chocolate elements, while the coffee itself can have a very pleasant, balanced, and bittersweet flavor.",
    price: 7.50,
  },
  {
    country: "Ethiopian" ,
    roast: "Light",
    description: "Ethiopian beans as a whole are known for their winey quality and bright mouthfeels.",
    price: 6.99,
  },
  {
    country: "Costa Rican" ,
    roast: "Light",
    description: "In particular the best high-grown coffees of Costa Rica are distinguished, and notable for their good body and fruity and bright acidity with a clean and crisp taste.",
    price: 4.50,
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
    temperature: "Iced",
    description: " milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.",
    price: 5.50,
  },
  {
    name: "Mocha" ,
    temperature: "Iced",
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



Coffee.create(newCoffees)
.then(function(results){
    console.log("Coffees Saved", results)
    mongoose.connection.close()
})
.catch (function(error){
    console.log("Something went wrong", error.message)
    mongoose.connection.close()
})

Food.create(newFoods)
.then(function(results){
    console.log("Foods Saved", results)
    mongoose.connection.close()
})
.catch (function(error){
    console.log("Something went wrong", error.message)
    mongoose.connection.close()
})

Drinks.create(newDrinks)
.then(function(results){
    console.log("Drinks Saved", results)
    mongoose.connection.close()
})
.catch (function(error){
    console.log("Something went wrong", error.message)
    mongoose.connection.close()
})

mongoose
  .connect('mongodb://localhost/CasaDelCafe') 
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));