const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.ObjectId,
    ref: "cart",
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "product",
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
  },
  discountedPrice: {
    type: Number,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
});

const CartItem = mongoose.model("cartItem", cartItemSchema);

module.exports = CartItem;
