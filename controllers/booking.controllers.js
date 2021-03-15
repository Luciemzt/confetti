const Booking = require("../model/booking.model")

exports.getBooking = async(req, res) => {
    try {
        const userId = req.session.currentUser;
        const {placeId} = req.params;
        if(userId){
            const user = await User.findById(userId).lean();
            const place = await Place.findById(placeId).lean();  
            const isBooked = String(userId) === String(booking.bowed);
        }
        res.status(200).json(allPlaces)
    } catch (error) {
        return res.status(400).json({ message: "error when getting the bookings" })
    }
}


exports.editBooking = async(req, res) => {
    try {
        const { bookingId } = req.params;
        const deletedBooking = await Booking.findByIdAndDelete(bookingId);
        res.status(200).json(deleteBooking)
    } catch (error) {
        return res.status(400).json({ message: "error when editing bookings" })
    }
}
/// edit booking 

//Delete booking 

exports.deleteBooking = async(req, res) => {
    try {
        const { bookingId } = req.params;
        const deletedBooking = await Booking.findByIdAndDelete(bookingId);
        res.status(200).json(deleteBooking)
    } catch (error) {
        return res.status(400).json({ message: "error when deleting bookings" })
    }
}