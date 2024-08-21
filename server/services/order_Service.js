const { CHAR_LEFT_ANGLE_BRACKET } = require("picomatch/lib/constants");
const Address = require("../models/address_Model");
const Order = require("../models/order");
const OrderItems = require("../models/order_Items");
const { findUserCarts } = require("./cart_Service");

const createOrder = async (user, shippAddress) => {
  let address;

  // Check if shipping address exists by ID
  if (shippAddress._id) {
    let existAddress = await Address.findById(shippAddress._id);
    if (!existAddress) throw new Error("Address not found");
    address = existAddress;
  } else {
    // Create a new address if it doesn't exist
    address = new Address(shippAddress);
    address.user = user;
    await address.save();

    // Ensure user.addresses is an array
    if (!user.addresses) {
      user.addresses = [];
    }

    user.addresses.push(address);
    await user.save();
  }

  // Retrieve user cart
  const cart = await findUserCarts(user._id);
  if (!cart) throw new Error("Cart not found");

  const orderItems = [];

  for (const item of cart.cartItems) {
    const orderItem = new OrderItems({
      // Use OrderItem instead of OrderItems
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });

    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }

  // Create the order
  const createdOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItem: cart.totalItem,
    shippingAddress: address,
  });

  // Save the order
  await createdOrder.save();
  return createdOrder;
};

const placeOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";

  return await order.save();
};
const confirmedOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "CONFIRMED";

  return await order.save();
};
const shipOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "SHIPPED";

  return await order.save();
};
const deliverOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "DELIVERED";

  return await order.save();
};
const cancelledOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "CANCELLED";

  return await order.save();
};

const findOrderById = async (orderId) => {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");
  console.log("orders=-=-=-0", order);
  return order;
};

const userOrderHistory = async (userId) => {
  try {
    const orders = await Order.find({
      user: userId,
      orderStatus: "PLACED",
    })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllOrder = async () => {
  return await Order.find()
    .populate({
      path: "orderItems",
      populate: { path: "product" },
    })
    .lean();
};

const deleteOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  await Order.findByIdAndDelete(order._id);
};

module.exports = {
  createOrder,

  cancelledOrder,
  userOrderHistory,
  getAllOrder,
  deleteOrder,
  placeOrder,
  confirmedOrder,
  cancelledOrder,
  shipOrder,
  deliverOrder,
  findOrderById,
};
