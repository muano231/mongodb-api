const Restaurant = require("../models/Restaurant");

// GET ALL
exports.getRestaurants = async function () {
  try {
    const restaurants = await Restaurant.find({});
    return restaurants;
  } catch (err) {
    console.log(err);
  }
};

// GET BY ID
exports.getRestaurant = async function (req) {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurantID);
    return restaurant;
  } catch (err) {
    console.log(err);
  }
};

// POST
exports.addRestaurant = async function (req) {
  try {
    const restaurant = await Restaurant.create({
      address: {
        bulding: req.body.address.bulding,
        coord: req.body.address.coord,
        street: req.body.address.street,
        zipcode: req.body.address.zipcode,
      },
      borough: req.body.borough,
      cuisine: req.body.cuisine,
      grades: req.body.grades,
      name: req.body.name,
      restaurant_id: req.body.restaurant_id,
    });
    console.log(req.body);
    return restaurant;
  } catch (err) {
    console.log(err);
  }
};

// EDIT
exports.editRestaurant = async function (req) {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.restaurantID,
      {
        address: {
          bulding: req.body.address.bulding,
          coord: req.body.address.coord,
          street: req.body.address.street,
          zipcode: req.body.address.zipcode,
        },
        borough: req.body.borough,
        cuisine: req.body.cuisine,
        grades: req.body.grades,
        name: req.body.name,
        restaurant_id: req.body.restaurant_id,
      },
      { new: true }
    );
    return restaurant;
  } catch (err) {
    console.log(err);
  }
};

// DELETE
exports.deleteRestaurant = async function (req) {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(
      req.params.restaurantID
    );
    return restaurant;
  } catch (err) {
    console.log(err);
  }
};
