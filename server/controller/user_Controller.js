const {
  getUserProfileByToken,
  getAllUser,
} = require("../services/user_Services");

const getUserProfile = async (req, res) => {
  try {
    const jwt = req.headers.authorization?.split(" ")[1];
    if (!jwt) {
      return res.status(404).json({ message: "Token Not Found!" });
    }
    const user = await getUserProfileByToken(jwt);
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUser();
    return res.status(200).json({ message: users, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

module.exports = { getUserProfile, getAllUsers };
