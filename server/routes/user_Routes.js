const express = require("express");
const {
  getUserProfile,
  getAllUsers,
} = require("../controller/user_Controller");
const authenticate = require("../middleware/authanticate");

const router = express.Router();

router.get("/profile", getUserProfile);
router.get("/", getAllUsers);

module.exports = router;
