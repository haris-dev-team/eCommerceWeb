// const stripe = require("stripe")(process.env.STRIPE_SECRET);

// const create_Checkout_Session = async (req, res) => {
//   const { product } = req.body;
//   console.log("products", product);

//   try {
//     if (product) {
//       const lineItems = product.map((products) => ({
//         price_data: {
//           currency: "pkr",
//           product_data: {
//             brand: products.brand,
//             images: [products.product.imageUrl],
//           },
//           unit_amount: Math.round(products.price * 100),
//         },
//         quantity: products.quantity,
//       }));
//       console.log("lineItems: ", lineItems);

//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items: lineItems,
//         mode: "payment",
//         success_url: "http://localhost:5173/success",
//         cancel_url: "http://localhost:5173/cancel",
//       });

//       console.log("session", session.id);
//       return res.status(200).json({ success: true, sessionId: session.id });
//     } else {
//       console.log("product not found!");
//       return res.json({ id: session.id });
//     }
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({ msg: error.message, success: false });
//   }
// };

// module.exports = { create_Checkout_Session };
const stripe = require("stripe")(
  "sk_test_51PqDTKAoz40WTPQMAng1p6RbZ1aTBK8Egtx8pMyawpqzroqdhJSgnQxbOmeiDBpSp5eFnceTM7e4XHpaCNrYVJF800ywAFmGrD"
);

const create_Checkout_Session = async (req, res) => {
  const { product_data } = req.body;
  console.log("products", product_data);

  try {
    if (product_data) {
      const lineItems = product_data.map((item) => ({
        price_data: {
          currency: "pkr",
          product_data: {
            name: item.product.brand,
            images: [item.product.imageUrl],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });

      console.log("session", session);
      return res.status(200).json({ success: true, sessionId: session.id });
    } else {
      console.log("product not found!");
      return res.json({ success: false, message: "Product not found" });
    }
  } catch (error) {
    console.log("Error creating checkout session:", error.message);
    return res.status(500).json({ msg: error.message, success: false });
  }
};

module.exports = { create_Checkout_Session };
