const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    options: [string],
    place_id : String,
});

module.exports = mongoose.model("Booking", BookingSchema);
