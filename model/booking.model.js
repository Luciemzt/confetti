const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    name: String,
    description: String,
    date : String,
    options: [string],
    place : { type: mongoose.Schema.Types.ObjectId, ref: "Place" } ,
    user :  { type: mongoose.Schema.Types.ObjectId, ref: "User" } ,
});

module.exports = mongoose.model("Booking", BookingSchema);
