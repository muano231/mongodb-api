const express = require("express");
const Dog = require("./models/Dog");
const Restaurant = require("./models/Restaurant");

const router = express.Router();

router.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.find();
  res.send(restaurants);
});

router.post("/restaurant", async (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    color: req.body.color,
    race: req.body.race,
  });
  await restaurant.save();
  res.send(restaurant);
});

router.get("/restaurants/:restaurantID", async (req, res) => {
  console.log(req.params.restaurantID);
  const id = Number(req.params.restaurantID);
  const restaurant = await Restaurant.find(
    (restaurant) => restaurant.restaurant.id === id
  );
  if (!restaurant) {
    res.status(404).send("Restaurant not found");
  }
  res.send(restaurant);
});

module.exports = router;
