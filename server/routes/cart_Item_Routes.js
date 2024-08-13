const express = require("express");
const { updateCartItems, removedCartItem } = require("../controller/cart_Item_Controller");
const authenticate = require("../middleware/authanticate");

const router = express.Router();

router.put("/:id", authenticate, updateCartItems)
router.delete("/:id",authenticate,removedCartItem)




module.exports = router;
