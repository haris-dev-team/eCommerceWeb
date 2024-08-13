const express = require("express");
const authenticate = require("../middleware/authanticate");
const { findUserCart, addItemToCart } = require("../controller/cart_Controller");

const router = express.Router();


router.get("/", authenticate, findUserCart)
router.put("/add", authenticate, addItemToCart)


module.exports = router
