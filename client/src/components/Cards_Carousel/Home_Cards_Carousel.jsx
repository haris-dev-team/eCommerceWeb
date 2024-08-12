import React, { useState } from "react";
import Slider from "react-slick";
import Home_Section_Card from "../Cards/Home_Section_Card";
import { Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home_Cards_Carousel = ({ data, sectionName }) => {
  const sliderRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesToShow = 5.5; // Adjust according to your settings
  const totalSlides = data.length;
  const lastIndex = Math.ceil(totalSlides - slidesToShow);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (current) => setActiveIndex(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slidePrev = () => sliderRef.current.slickPrev();
  const slideNext = () => sliderRef.current.slickNext();

  return (
    <div className="relative border">
      <h2 className="text-2xl font-semibold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <Slider ref={sliderRef} {...settings}>
          {data.slice(0, 10).map((item) => (
            <Home_Section_Card key={item.id} product={item} />
          ))}
        </Slider>
      </div>

      {activeIndex < lastIndex && (
        <Button
          className="z-50"
          variant="contained"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%) rotate(90deg)",
          }}
          aria-label="next"
        >
          <KeyboardArrowRight sx={{ transform: "rotate(-90deg)" }} />
        </Button>
      )}

      {activeIndex > 0 && (
        <Button
          className="z-50"
          variant="contained"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%) rotate(-90deg)",
          }}
          aria-label="previous"
        >
          <KeyboardArrowLeft sx={{ transform: "rotate(90deg)" }} />
        </Button>
      )}
    </div>
  );
};

export default Home_Cards_Carousel;
