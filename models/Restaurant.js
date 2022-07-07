const mongoose = require("mongoose");

const schema = mongoose.Schema({
  address: {
    bulding: String,
    coord: [],
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [],
  name: String,
  restaurant_id: String,
});

module.exports = mongoose.model("Restaurant", schema);
