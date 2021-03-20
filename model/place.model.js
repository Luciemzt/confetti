const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    name: String,
    description: String,
    adress: String,
    type: String,
    imageURL: String,
});

module.exports = mongoose.model("Place", PlaceSchema);
