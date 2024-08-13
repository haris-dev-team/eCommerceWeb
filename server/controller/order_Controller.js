const {
  createOrder,
  findOrderById,
  userOrderHistory,
} = require("../services/order_Service");

const createdOrder = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await createOrder(user, req.body);
    return res.status(200).json({ success: true, msg: createdOrder });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};
const findOrdersById = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await findOrderById(req.params.id);
    return res.status(200).json({ success: true, msg: createdOrder });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

const ordersHistory = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await userOrderHistory(user._id);
    return res.status(200).json({ success: true, msg: createdOrder });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = { createdOrder, findOrdersById, ordersHistory }; //exporting the functions
