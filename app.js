require("dotenv").config();
const express = require("express");
const app = express();

require("./config/db.config")(app);
require("./config/middleware.config")(app);
require("./config/session.config");

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const placeRoutes = require("./routes/place.routes");
app.use("/place", placeRoutes);

const bookingRoutes = require("./routes/booking.routes");
app.use("/booking", bookingRoutes);

app.listen(process.env.PORT, () => console.log("server running"));
