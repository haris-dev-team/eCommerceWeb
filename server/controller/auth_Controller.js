const { generateToken } = require("../config/jwtProvider");
const { createUser, findUserByEmail } = require("../services/user_Services");
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
  try {
    const user = await createUser(req.body);
    console.log(user);
    const jwt = generateToken(user._id);

    return res
      .status(200)
      .json({ success: true, jwt, msg: "register Success!" });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }
    const jwt = generateToken(user._id);
    return res
      .status(200)
      .json({ success: true, jwt, message: "login Success!" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { register, login };
