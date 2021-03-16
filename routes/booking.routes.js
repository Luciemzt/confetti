const { Router } = require("express");
const route = Router();
const { getBookings, getBooking, createBooking, editBooking, deleteBooking } = require("../controllers/booking.controllers")

route
.get("/", getBooking) // save a booking 
.get("/booking", getBookings) // save a booking 
.post("/booking", createBooking) // create a booking 
.put("/booking/:bookingId", editBooking) // edit Booking
.delete("/booking/:bookingId", deleteBooking) //delete booking 

module.exports = route

//POST	/api/booking
//POST	/api/booking	{place ID, options, description, title.. }	201	400	Create and saves a new booking in the DB
////PUT	/api/booking/:bookingId	{title, description, date, options}	200	400	Edits booking in the DB
///DELETE	/api/booking/:bookingId	{id}	201	400	Deletes project