import { Alert, AlertTitle, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Order_Tracker from "../components/Order/Order_Tracker";
import { useDispatch, useSelector } from "react-redux";
import Address_Card from "../components/Cards/Address_Card";
import { getOrderById } from "../State/Order/Action";

const Success = () => {
  const orderId = localStorage.getItem("orderId");
  const dispatch = useDispatch();

  const { order } = useSelector((state) => state);
  console.log("sad", order.order.msg.orderItems);
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Get Placed
        </Alert>
      </div>
      <Order_Tracker activestep={1} />
      <Grid container className="space-y-5 py-5 pt-20">
        {order?.order?.msg?.orderItems.map((item, i) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5"
            key={i}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p>{item.product.title}</p>
                  <div className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: {item.color}</span>
                    <span>Size: {item.size}</span>
                  </div>
                  <p>Seller : {item.product.brand}</p>
                  <p>$ {item.price}</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Address_Card address={order?.order?.msg?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Success;
