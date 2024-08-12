const { getUserIdFromToken } = require("../config/jwtProvider");
const User = require("../models/user_Models");
const bcrypt = require("bcryptjs");
const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("User already exist");
    }
    password = await bcrypt.hash(password, 10);

    const user = await User.create({ firstName, lastName, email, password });

    console.log("created user", user);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found with id");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found with email");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = getUserIdFromToken(token);

    const user = await findUserById(userId);

    if (!user) {
      throw new Error("User not found with id");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUser = async () => {
  try {
    const user = User.find();
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  findUserById,
  findUserByEmail,
  getUserProfileByToken,
  getAllUser,
  createUser,
};
