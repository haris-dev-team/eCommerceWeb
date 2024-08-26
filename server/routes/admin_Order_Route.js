const express = require("express");
const authenticate = require("../middleware/authanticate");
const {
  getAllOrders,
  confirmOrder,
  shippOrder,
  deliverdOrder,
  cancelOrder,
  deletedOrder,
} = require("../controller/admin_Controller");

const router = express.Router();

router.get("/", authenticate, getAllOrders);
router.put("/:orderId/confirmed", authenticate, confirmOrder);
router.put("/:orderId/ship", authenticate, shippOrder);
router.put("/:orderId/deliver", authenticate, deliverdOrder);
router.put("/:orderId/cancel", authenticate, cancelOrder);
router.delete("/:orderId/delete", authenticate, deletedOrder);
module.exports = router;
