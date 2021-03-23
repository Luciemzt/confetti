const Booking = require("../model/booking.model");
const User = require("../model/user.model");

exports.getBookings = async (req, res) => {
  try {
    const { userId } = req.session;
    //const { placeId } = req.params;
    if (userId) {
      const allBookings = Booking.find({user_id:userId})
          res.status(200).json(allBookings);
    }
  } catch (error) {
    return res.status(400).json({ message: "error while getting the bookings" });
  }
};



exports.editBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const editBooking = await Booking.findByIdAndUpdate(bookingId, req.body);
    res.status(200).json(editBooking);
  } catch (error) {
    return res.status(400).json({ message: "error while editing bookings" });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const { options, quantity, date, placeId } = req.body
    const { userId } = req.session;
    console.log(`userId`, userId)
    const createBooking = await Booking.create({
      options,
      quantity: Number(quantity),
      date: new Date(date),
      user_id: userId,
      place_id: placeId
    });
    await User.findByIdAndUpdate(userId, {$push:{bookings:createBooking._id}})
    res.status(200).json(createBooking);
  } catch (error) {
    return res.status(400).json({ message: "error while creating bookings" });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    res.status(200).json(deletedBooking);
  } catch (error) {
    return res.status(400).json({ message: "error while deleting bookings" });
  }
};
