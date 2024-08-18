const {
  updateCartItem,
  removeCartItem,
} = require("../services/cartItem_Service");

const updateCartItems = async (req, res) => {
  const user = await req.user;
  try {
    const updatedCart = await updateCartItem(user._id, req.params.id, req.body);
    return res.status(200).json({ success: true, msg: updatedCart });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

const removedCartItem = async (req, res) => {
  const user = await req.user;
  try {
    await removeCartItem(user._id, req.params.id);
    return res
      .status(200)
      .json({ success: true, message: "cart item remove successfullly" });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = { updateCartItems, removedCartItem };
