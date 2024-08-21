const express = require("express");
const authenticate = require("../middleware/authanticate");
const {
  createdOrder,
  ordersHistory,
  findOrdersById,
} = require("../controller/order_Controller");

const router = express.Router();

router.post("/", authenticate, createdOrder);
router.get("/user", authenticate, ordersHistory);
router.get("/:id", authenticate, findOrdersById);

module.exports = router;
