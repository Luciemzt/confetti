const Booking = require("../model/booking.model");

exports.getBookings = async (req, res) => {
  try {
    const { userId } = req.session;
    const { placeId } = req.params;
    if (userId) {
      const user = await User.findById(userId).lean();
      const place = await Place.findById(placeId).lean();
      const isBooked = String(userId) === String(booking.booked);
      res.status(200).json(allBookings);

    }
  } catch (error) {
    return res.status(400).json({ message: "error while getting the bookings" });
  }
};

exports.getBooking = async (req, res) => {
  try {
    const { userId } = req.session;
    const { placeId } = req.params;
    if (userId) {
      const user = await User.findById(userId).lean();
      const place = await Place.findById(placeId).lean();
    }
    res.status(200).json();
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error while getting the bookings" });
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
    const createBooking = await Booking.create(req.body);
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
