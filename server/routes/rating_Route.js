const express = require("express");
const authenticate = require("../middleware/authanticate");
const {
  createRatings,
  getAllRatings,
} = require("../controller/rating_Controller");

const router = express.Router();

router.post("/create", authenticate, createRatings);
router.put("/product/:productId", authenticate, getAllRatings);

module.exports = router;
