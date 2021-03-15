const { Router } = require("express");
const route = Router();
const { getAllPlaces, getPlace } = require("../controllers/place.controllers")

route
.get("/place", getAllPlaces) // get all the places 
.get("/place/:placeId", getPlace) // get one place 
 

module.exports = route

//GET	/api/place			400	get all places
//GET	/api/place/:placeId	{id}			Get one specific place


