const {
  getAllOrder,
  confirmedOrder,
  shipOrder,
  deliverOrder,
  cancelledOrder,
  deleteOrder,
} = require("../services/order_Service");

const getAllOrders = async (req, res) => {
  try {
    const orders = await getAllOrder();
    return res.status(200).json({ success: true, msg:orders });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};
const confirmOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await confirmedOrder(orderId);
    return res.status(200).json({ success: true, msg:orders });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};
const shippOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await shipOrder(orderId);
    return res.status(200).json({ success: true, msg:orders });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

const deliverdOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await deliverOrder(orderId);
    return res.status(200).json({ success: true, msg: orders });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

const cancelOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await cancelledOrder(orderId);
    return res.status(200).json({ success: true, msg: orders });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

const deletedOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await deleteOrder(orderId);
    return res.status(200).json({ success: true, msg: orders });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  getAllOrders,
  confirmOrder,
  shippOrder,
  deliverdOrder,
  cancelOrder,
  deletedOrder,
};
