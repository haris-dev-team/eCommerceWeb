const CartItem = require("../models/cart_Item_Model");
const { findUserById } = require("./user_Services");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) {
      throw new Error("Item not found");
    }
    const user = await findUserById(item.userId);
    if (!user) {
      throw new Error("User not found");
    }
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.dicountedPrice = item.product.discountedPrice;
      const updateCartItem = await item.save();
      return updateCartItem;
    } else {
      throw new Error("You are not the owner of this item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeCartItem = async (userId, cartItemId) => {
  try {
    const cartItem = await findCartItemById(cartItemId);
    const user = await findUserById(userId);

    if (user._id.toString() == cartItem.userId.toString()) {
      await CartItem.findByIdAndDelete(cartItemId);
    } else {
      throw new Error("You are not the owner of this item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const findCartItemById = async (cartItemId) => {
  try {
    const cartItem = await findCartItemById(cartItemId);
    if (cartItem) {
      return cartItem;
    } else {
      throw new Error("Item not found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createCartItem,
  updateCartItem,
  removeCartItem,
  findCartItemById,
};
