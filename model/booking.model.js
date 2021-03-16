const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    options: [String],
    place_id : String,
});

module.exports = mongoose.model("Booking", BookingSchema);
