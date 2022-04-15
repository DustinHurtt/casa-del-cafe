const {Schema, model} = require('mongoose')

const foodSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Breakfast", "Lunch", "Salads", "Soups", "Desserts"]
    },
    description: {
        type: String
    },
    ingredients: {
        type: String
    },
    calories: {
        type: Number
    },
    price: {
        type: Number,
        required: true
    }

}, {
    timeseries: true,
    timestamps: true
})

const Food =  model("Food", foodSchema)

module.exports = Food