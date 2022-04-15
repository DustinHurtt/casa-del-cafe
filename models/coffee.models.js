const {Schema, model} = require('mongoose');

const coffeeSchema =  new Schema({
    country: {
        type: String,
        enum: ["Colombian", "Ethiopian", "Brazilian", "Nicaraguan", "Costa Rican"],
        required: true
    },
    roast: {
        type: String,
        enum: ["dark", "light"],
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }, 
})

const Coffee =  model("coffee", coffeeSchema)

module.exports = Coffee