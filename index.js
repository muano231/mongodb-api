const express = require("express");
const port = 3001;
const app = express();
const router = require("./routes");

const mongoose = require("mongoose");

const mongodb = "mongodb+srv://admin:admin@cluster0.p89rm.mongodb.net/chiens";
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
