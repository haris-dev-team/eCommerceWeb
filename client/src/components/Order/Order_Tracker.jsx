import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

const Order_Tracker = ({ activestep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activestep} alternativeLabel>
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel sx={{ color: "#9155fd", fontSize: "44px" }}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default Order_Tracker;
