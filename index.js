const express = require("express");
require("dotenv").config();
// const router = require("./routes");
const router = require("./routes/restaurant.routes");
const mongoose = require("mongoose");

const mongodb = process.env.MONGODB_URI;
const port = process.env.PORT;

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

database.on("error", console.error.bind(console, "connection error:"));
database.on("open", () => {
  console.log("Connected to database");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
