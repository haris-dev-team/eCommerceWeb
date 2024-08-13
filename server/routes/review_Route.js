const express = require("express");
const authenticate = require("../middleware/authanticate");
const { createReviews, getAllReviews } = require("../controller/review_Controller");

const router = express.Router();

router.post("/create", authenticate, createReviews)
router.get("/product/:productId", authenticate, getAllReviews)





module.exports = router;
