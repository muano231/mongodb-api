const restaurantService = require("../services/restaurant.service");

// GET ALL
exports.getRestaurants = async function (req, res) {
  try {
    const restaurants = await restaurantService.getRestaurants();
    return res.send(restaurants);
  } catch (err) {
    console.log("err : ", err);
  }
};

// GET BY ID
exports.getRestaurant = async function (req, res) {
  try {
    const restaurant = await restaurantService.getRestaurant(req);
    return res.send(restaurant);
  } catch (err) {
    console.log("err : ", err);
  }
};

// POST
exports.addRestaurant = async function (req, res) {
  try {
    const restaurant = await restaurantService.addRestaurant(req);
    return res.send(restaurant);
  } catch (err) {
    console.log("err : ", err);
  }
};

// EDIT
exports.editRestaurant = async function (req, res) {
  try {
    const restaurant = await restaurantService.editRestaurant(req);
    return res.send(restaurant);
  } catch (err) {
    console.log("err : ", err);
  }
};

// DELETE
exports.deleteRestaurant = async function (req, res) {
  try {
    const restaurant = await restaurantService.deleteRestaurant(req);
    return res.send(restaurant);
  } catch (err) {
    console.log("err : ", err);
  }
};
