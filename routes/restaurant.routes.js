const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");

// GET ALL
router.get("/restaurants", restaurantController.getRestaurants);

// GET BY ID
router.get("/restaurants/:restaurantID", restaurantController.getRestaurant);

// POST
router.post("/restaurant", restaurantController.addRestaurant);

// EDIT
router.put("/restaurant/:restaurantID", restaurantController.editRestaurant);

// DELETE
router.delete(
  "/restaurant/:restaurantID",
  restaurantController.deleteRestaurant
);

module.exports = router;
