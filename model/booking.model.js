const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
        options: [String], 
        quantity: Number, 
        date: Date, 
        place_id : { type: mongoose.Schema.Types.ObjectId, 
          ref: "Place" },
        user_id : { type: mongoose.Schema.Types.ObjectId, 
            ref: "User" },
});

module.exports = mongoose.model("Booking", BookingSchema);

