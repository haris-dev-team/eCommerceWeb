const { registerUser, login } = require("../../controller/user")

const router = require("express").Router()

router.post("/register", registerUser)
router.post("/login",login)

module.exports = router