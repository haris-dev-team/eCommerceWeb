const {
  getUserProfileByToken,
  getAllUser,
} = require("../services/user_Services");

const getUserProfile = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(404)
        .json({ message: "Authorization header not found!" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(404).json({ message: "Token Not Found!" });
    }

    // Get the user profile by token
    const user = await getUserProfileByToken(token);
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }

    const { password, ...users } = user._doc;

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error.message); // Log the error for debugging
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
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
