const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    name: String,
    description: String,
    adress: String,
    type: String, 
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Place", PlaceSchema);
