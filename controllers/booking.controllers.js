const Booking = require("../model/booking.model")

exports.getUserBooking = async(req, res) => {
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
        return res.status(400).json({ message: "error when getting the places" })
    }
}

exports.getPlace = async(req, res) => {
    try {
        const {placeId} = req.params
        const place = await Place.findById(placeId).lean()
        res.status(200).json(place)
    } catch (error) {
        return res.status(400).json({ message: "error when getting the place" })
    }
}
