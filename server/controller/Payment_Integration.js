const stripe = require("stripe")(process.env.STRIPE_SECRET);

const create_Checkout_Session = async (req, res) => {
  const { product } = req.body;
  console.log("products", product);

  try {
    if (product) {
      const lineItems = product.map((products) => ({
        price_data: {
          currency: "pkr",
          product_data: {
            brand: products.brand,
            images: [products.imageUrl],
          },
          unit_amount: Math.round(products.price * 100),
        },
        quantity: products.quantity,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });

      console.log("session", session.id);
      return res.status(200).json({ success: true, sessionId: session.id });
    } else {
      console.log("product not found!");
      return res.json({ id: session.id });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message, success: false });
  }
};

module.exports = { create_Checkout_Session };
