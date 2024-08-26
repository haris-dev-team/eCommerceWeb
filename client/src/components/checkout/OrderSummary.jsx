import React, { useEffect } from "react";
import Address_Card from "../Cards/Address_Card";
import { Button } from "@mui/material";
import Cart_Item from "../cart/Cart_Item";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { getCart } from "../../State/Cart/Action";
import { API_BASE_URL } from "../../config/Apis/apiConfig";
import axios from "axios";
const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { cart } = useSelector((state) => state);
  const { order } = useSelector((state) => state);
  console.log(cart);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getCart());
    dispatch(getOrderById(orderId));
  }, [dispatch, orderId, cart.updateCartItem, cart.deleteCartItem]);

  const handleCheckOut = async () => {
    try {
      const stripe = await loadStripe(
        import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY
      );

      const cartItems = cart?.cart?.msg?.cartItems;

      // Make sure your API request is sending the correct data structure expected by the backend
      const response = await axios.post(
        `http://localhost:2001/api/payment`,
        {
          product_data: cartItems, // Sending cart items as product_data
          currency: "pkr",
        },
        {
          headers: {
            Authorization: `Bearer ${
              import.meta.env.VITE_REACT_APP_STRIPE_SECRET_KEY
            }`,
          },
        }
      );

      // Ensure the response has sessionId
      const { sessionId } = response.data;

      if (!sessionId) {
        throw new Error("Session ID is missing from the response");
      }

      // Redirect to checkout

      localStorage.setItem("orderId", orderId);

      const result = await stripe.redirectToCheckout({ sessionId });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <Address_Card address={order.order?.msg?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative mt-6">
          <div className="col-span-2">
            {order.order?.msg?.orderItems.map((item, index) => (
              <Cart_Item key={index} item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <div className="uppercase font-bold opacity-60 pb-4 px-5 pt-3">
                Price Details
              </div>
              <hr />
              <div className="space-y-3 font-semibold px-5">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>${order.order?.msg?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -${order.order?.msg?.discount}
                  </span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span>
                    ${order.order?.msg?.totalPrice - order.order?.msg?.discount}
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                onClick={handleCheckOut}
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9755fd", mt: 2 }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
