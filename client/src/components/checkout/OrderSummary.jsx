import React, { useEffect } from "react";
import Address_Card from "../Cards/Address_Card";
import { Button } from "@mui/material";
import Cart_Item from "../cart/Cart_Item";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../State/Order/Action";
import { useLocation } from "react-router-dom";
const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const { order } = useSelector((store) => store);
  console.log("summary ", order.order.msg);
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <Address_Card address={order.order.msg?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative mt-6">
          <div className="col-span-2">
            {order.order.msg.orderItems.map((item) => (
              <Cart_Item item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <div className="uppercase font-bold opacity-60 pb-4 px-5 pt-3">
                price Details
              </div>
              <hr />
              <div className="space-y-3 font-semibold px-5">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>${order.order.msg?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">-${order.order.msg?.discount}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span classname="text-green-600">
                    ${order.order.msg?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
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
