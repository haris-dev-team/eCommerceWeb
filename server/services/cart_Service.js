const CartItem = require("../models/cart_Item_Model");
const Cart = require("../models/cart_Model");
const Product = require("../models/product");
const mongoose = require("mongoose");
const createCart = async (user) => {
  try {
    const cart = new Cart({ user });
    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserCarts = async (userId) => {
  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        cartItems: [],
        totalPrice: 0,
        totalItem: 0,
        totalDiscountedPrice: 0,
        discount: 0,
      });
      await cart.save();
    }

    const cartItems = await CartItem.find({ cart: cart._id }).populate(
      "product"
    );

    cart.cartItems = cartItems;

    let totalPrice = 0;
    let discountedPrice = 0;
    let totalItem = 0;

    cart.cartItems.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.quantity;
      discountedPrice += cartItem.discountedPrice * cartItem.quantity;
      totalItem += cartItem.quantity;
    });

    cart.totalPrice = totalPrice;
    cart.totalItem = totalItem;
    cart.discount = totalPrice - discountedPrice;

    await cart.save();

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addCartItem = async (userId, req) => {
  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        cartItems: [],
        totalPrice: 0,
        totalItem: 0,
        totalDiscountedPrice: 0,
        discount: 0,
      });
      await cart.save();
    }

    if (!mongoose.Types.ObjectId.isValid(req.productId)) {
      throw new Error("Invalid product ID.");
    }

    const product = await Product.findById(req.productId);
    if (!product) {
      throw new Error("Product not found.");
    }

    const isPresent = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      userId: userId,
    });

    if (isPresent) {
      isPresent.quantity += 1;
      await isPresent.save();
    } else {
      const cartItem = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.price,
        size: req.size,
        discountedPrice: product.discountedPrice,
      });

      const createdCartItem = await cartItem.save();
      cart.cartItems.push(createdCartItem);
    }

    let totalPrice = 0;
    let discountedPrice = 0;
    let totalItem = 0;

    cart.cartItems = await CartItem.find({ cart: cart._id }).populate(
      "product"
    ); // Populate product details

    cart.cartItems.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.quantity;
      discountedPrice += cartItem.discountedPrice * cartItem.quantity;
      totalItem += cartItem.quantity;
    });

    cart.totalPrice = totalPrice;
    cart.totalItem = totalItem;
    cart.discount = totalPrice - discountedPrice;

    await cart.save();

    return "Item added or updated in the cart";
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createCart, addCartItem, findUserCarts };
