const express = require("express");
const { getAllProduct, findProductsById } = require("../controller/product_Controller");
const authenticate = require("../middleware/authanticate");

const router = express.Router();


router.get("/",authenticate,getAllProduct)
router.get("/id/:id", authenticate, findProductsById)



module.exports = router
