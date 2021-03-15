const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    name: String,
    description: String,
    adress: String,
    type: String,
    imageURL: {
        type: String,
        default:
          "https://bs.floristic.org/image/o/https://assets.afcdn.com/recipe/20180705/80346_w1024h1024c1cx1727cy777.webp",
      },
});

module.exports = mongoose.model("Place", PlaceSchema);
