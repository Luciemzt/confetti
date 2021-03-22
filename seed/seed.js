const mongoose = require("mongoose");
const Place = require("../model/place.model");
const Booking = require("../model/booking.model");
const { places } = require("./data");
const { bookings } = require("./bookingData");
const connectDb = require("../config/db.config");

async function seedDb() {
  try {
    await connectDb();
    const createdPlaces = await Place.create(places);
    const createdbooking = await Booking.create(bookings);
    const closedDb = await mongoose.connection.close();
    console.log("createdPlaces", createdPlaces);
    console.log("createdbooking", createdbooking);
  } catch (err) {
    return res.status(400).json({ message: "error when connecting to DB" })
  }
}

seedDb();