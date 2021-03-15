const mongoose = require("mongoose");
const Place = require("../model/place.model");
const { places } = require("./data");
const connectDb = require("../config/db.config");

async function seedDb() {
  try {
    await connectDb();
    await Place.create(places);
    const closedDb = await mongoose.connection.close();
    console.log("close", closedDb);
  } catch (err) {
    return res.status(400).json({ message: "error when connecting to DB" })
  }
}

seedDb();