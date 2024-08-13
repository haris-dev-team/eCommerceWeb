const { findUserCarts, addCartItem } = require("../services/cart_Service");

const findUserCart = async (req, res) => {
  const user = req.user;
  try {
    const cart = await findUserCarts(user.i_d);
    return res.status(200).json({ success: true, msg: cart });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};
const addItemToCart = async (req, res) => {
  const user = req.user;
  try {
    const cartItem = await addCartItem(user.id, req.body);
    return res.status(200).json({ success: true, msg: cartItem });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = { findUserCart, addItemToCart }; //exporting the functions
