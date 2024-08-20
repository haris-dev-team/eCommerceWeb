import React, { useEffect } from "react";
import Cart_Item from "../components/cart/Cart_Item";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCart } from "../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCheckOut = () => {
    navigate("/check-out?step=2");
  };
  useEffect(() => {
    dispatch(getCart())
  },[])
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1, 1].map((item, i) => (
            <div key={i}>
              <Cart_Item />
            </div>
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
              onClick={handleCheckOut}
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
  );
};

export default Cart;
