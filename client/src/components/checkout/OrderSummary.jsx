import React from "react";
import Address_Card from "../Cards/Address_Card";
import { Button } from "@mui/material";
import Cart_Item from "../cart/Cart_Item";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <Address_Card />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1, 1].map((item) => (
              <Cart_Item />
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
                  <span>$418</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">-$218</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span classname="text-green-600">$718</span>
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
