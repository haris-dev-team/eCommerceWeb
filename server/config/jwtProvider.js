const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
  return token;
};

const getUserIdFromToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decoded JWT:", decoded);
    if (!decoded.userId) {
      throw new Error("User ID is missing in the token");
    }
    return decoded.userId;
  } catch (error) {
    throw new Error("Invalid or expired token: " + error.message);
  }
};

module.exports = { generateToken, getUserIdFromToken };
