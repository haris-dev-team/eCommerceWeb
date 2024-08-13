const { getUserIdFromToken } = require("../config/jwtProvider");
const { findUserById } = require("../services/user_Services");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(404).json({ success: true, msg: "token not Fonud..." });
    }
    const userId = getUserIdFromToken(token);
    const user = findUserById(userId);
    req.user = user;
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
  next();
};

module.exports = authenticate; //export the function
