const express = require("express");
const authenticate = require("../middleware/authanticate");
const {
  create_Checkout_Session,
} = require("../controller/Payment_Integration");

const router = express.Router();

router.post("/payment", create_Checkout_Session);

module.exports = router;
