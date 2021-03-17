const Place = require("../model/place.model");

exports.getAllPlaces = async (req, res) => {
  try {
    const allPlaces = await Place.find().lean();
    res.status(200).json(allPlaces);
  } catch (error) {
    return res.status(400).json({ message: "error when getting the places" });
  }
};

exports.getPlace = async (req, res) => {
  try {
    const { placeId } = req.params;
    const place = await Place.findById(placeId).lean();
    res.status(200).json(place);
  } catch (error) {
    return res.status(400).json({ message: "error when getting the place" });
  }
};
