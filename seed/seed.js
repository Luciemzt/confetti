const mongoose = require("mongoose");
const Place = require("../model/place.model");
const { places } = require("./data");
const connectDb = require("../config/index");

async function seedDb() {
  try {
    await connectDb();
    await Place.create(places);
    const closedDb = await mongoose.connection.close();
    console.log("close", closedDb);
  } catch (err) {
    console.error(err);
  }
}

seedDb();