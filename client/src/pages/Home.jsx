import React from "react";
import { Hero_Carousel } from "../components/Carousel/Hero_Carousel";
import Home_Cards_Carousel from "../components/Cards_Carousel/Home_Cards_Carousel";
import { mens_Kurta } from "../utils/men_Kurta";

const Home = () => {
  return (
    <div>
      <Hero_Carousel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <Home_Cards_Carousel data={mens_Kurta} sectionName={"Men's jgjhg"} />
        <Home_Cards_Carousel data={mens_Kurta} sectionName={"Men's Shoes"} />
        <Home_Cards_Carousel data={mens_Kurta} sectionName={"Men's Shirt"} />
        <Home_Cards_Carousel data={mens_Kurta} sectionName={"Women's Saree"} />
        <Home_Cards_Carousel data={mens_Kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default Home;
