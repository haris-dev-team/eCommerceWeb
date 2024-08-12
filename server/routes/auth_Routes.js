const express = require("express");
const { register, login } = require("../controller/auth_Controller");

const router = express.Router();

router.post("/signup", register);
router.post("/signin", login);

module.exports = router;
