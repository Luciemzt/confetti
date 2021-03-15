const { Router } = require("express");
const route = Router();
const { getBooking, editBooking, deleteBooking } = require(""../controllers/booking.controllers")

route
.post("/booking", getBooking) // creat & save a booking 
.put("/booking/:bookingId", editBooking) // edit Booking
.delete("/booking/:bookingId", deleteBooking) //delete booking 

module.exports = route

//POST	/api/booking
//POST	/api/booking	{place ID, options, description, title.. }	201	400	Create and saves a new booking in the DB
////PUT	/api/booking/:bookingId	{title, description, date, options}	200	400	Edits booking in the DB
///DELETE	/api/booking/:bookingId	{id}	201	400	Deletes project