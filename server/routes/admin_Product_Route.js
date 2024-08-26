const express = require("express");
const {
  createProducts,
  createMultipleProduct,
  deleteProducts,
  updateProducts,
} = require("../controller/product_Controller");
const authenticate = require("../middleware/authanticate");

const router = express.Router();

router.post("/", authenticate, createProducts);
router.post("/creates", authenticate, createMultipleProduct);
router.delete("/:id/delete", authenticate, deleteProducts);
router.put("/:id", authenticate, updateProducts);

module.exports = router;
