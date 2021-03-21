const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
        Option: String, 
    place_id : { type: mongoose.Schema.Types.ObjectId, 
        ref: "Place" },
});

module.exports = mongoose.model("Booking", BookingSchema);
