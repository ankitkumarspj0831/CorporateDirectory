const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");
const addEmployeeRoutes = require("./routes/addEmployee");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(feedRoutes);
app.use(addEmployeeRoutes);

mongoose
  .connect(
    "MONGODB_URI",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    console.log("Database connected suceessfully.");
    app.listen(8080);
  })
  .catch((err) => {
    console.log("Error connecting to the database.");
    console.log(err);
  });
