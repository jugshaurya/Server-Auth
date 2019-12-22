const express = require("express");
const app = express();
const morgan = require("morgan");
const mainRouter = require("./routes/mainRouter");
const mongoose = require("mongoose");
const passportJWTAuth = require("./passport/passport");
require("dotenv").config();

// db connection
mongoose.set("useCreateIndex", true);
mongoose.connect("mongodb://localhost/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("combined"));
}

// routers
app.use("/", mainRouter);

//protected Resources
app.post("/profile", passportJWTAuth, (req, res) => {
  res.send("Profile Accesed");
});
// error middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Server Error, Something Wrong");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
