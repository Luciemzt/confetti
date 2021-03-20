const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    options: {
        beverages: [String],
        foods: [String],
        customOptions: String,
      },
    place_id : { type: mongoose.Schema.Types.ObjectId, 
        ref: "Place" },
});

module.exports = mongoose.model("Booking", BookingSchema);
