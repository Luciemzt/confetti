const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
        Options: [String], 
        quantity: Number, 
        date: date, 
        place_id : { type: mongoose.Schema.Types.ObjectId, 
          ref: "Place" },
});

module.exports = mongoose.model("Booking", BookingSchema);

