const mongoose = require("mongoose");

const cart_Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
    require: true,
  },
  cartItem: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "cartItem",
      required: true,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  totalItem: {
    type: Number,
    required: true,
    default: 0,
  },
  totalDicountedPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  Discount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Cart = mongoose.model("cart", cart_Schema);

module.exports = Cart;
