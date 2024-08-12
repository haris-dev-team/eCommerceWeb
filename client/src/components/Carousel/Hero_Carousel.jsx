import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { hero_Carousel_Data } from "../../utils/Carousel_Data";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export const Hero_Carousel = () => {
  const items = hero_Carousel_Data.map((elem, id) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={elem.image}
      alt=""
    />
  ));

  return (
    <div className="z-[-1]">
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};
