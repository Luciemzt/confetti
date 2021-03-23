const { Router } = require("express");
const route = Router();
const { getBookings, createBooking, editBooking, deleteBooking } = require("../controllers/booking.controllers")
route
//.get("/", getBooking) // save a booking 
.get("/", getBookings) // save a booking 
.post("/", createBooking) // create a booking 
.put("/:bookingId", editBooking) // edit Booking
.delete("/:bookingId", deleteBooking) //delete booking 
module.exports = route

//POST	/api/booking
//POST	/api/booking	{place ID, options, description, title.. }	201	400	Create and saves a new booking in the DB
////PUT	/api/booking/:bookingId	{title, description, date, options}	200	400	Edits booking in the DB
///DELETE	/api/booking/:bookingId	{id}	201	400	Deletes project