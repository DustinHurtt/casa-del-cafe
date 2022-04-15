const {Schema, model} = require('mongoose');

const drinksSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        enum: ["Hot", "Iced"]
    },
    description: {
        type: String
    },

    price: {
        type: Number,
        required: true
    }

}, {
    timeseries: true,
    timestamps: true
});

const Drinks =  model("Drinks", drinksSchema);

module.exports = Drinks
