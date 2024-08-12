import React from "react";
import Address_Card from "../../components/Cards/Address_Card";
import Order_Tracker from "../../components/Order/Order_Tracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarBorder } from "@mui/icons-material";

const Order_Details = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-semibold text-xl py-10">Delivery Address</h1>
        <Address_Card />
      </div>
      <div className="py-20">
        <Order_Tracker activestep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">men Slim Mid Rise Black Jeans</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: pink</span> <span>Size: M</span>
                  </p>
                  <p>Seller: Furqan</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorder
                  sx={{ fontSize: "2rem" }}
                  fontSize="2px"
                  className="px-2 "
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Order_Details;
