const { getUserIdFromToken } = require("../config/jwtProvider");
const User = require("../models/user_Models");
const bcrypt = require("bcryptjs");
const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password, role } = userData;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("User already exist");
    }
    password = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    await user.save();

    console.log("created user", user);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId).exec();
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
  console.log("Token for user profile:", token);
  try {
    const userId = getUserIdFromToken(token);
    console.log("Looking for user with ID:", userId);

    const user = await findUserById(userId);
    if (!user) {
      console.log("No user found with this ID in the database");
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
