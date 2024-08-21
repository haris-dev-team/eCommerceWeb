import React from "react";

const Address_Card = ({ address }) => {
  const { firstName, lastName, state, streetAddress, zipCode, mobile } =
    address;
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">{`${firstName} ${lastName}`}</p>
        <p>{state}, {streetAddress}, {zipCode}</p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default Address_Card;
