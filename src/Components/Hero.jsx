import React from "react";
import herobg from "../assets/hero bg.svg";
import heroimg from "../assets/Group 1.png";

export default function Hero() {
  return (
    <div
      className="h-[calc(100vh-80px)] bg-contain bg-bottom bg-no-repeat overflow-hidden m:h-auto"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="container mx-auto flex flex-col justify-end text-center items-center h-full gap-24 m:gap-8">
        <h1 className="text-black text-6xl font-bold leading-snug m:text-3xl m:pt-8">
          <span className="text-primary">Orbit</span>: Leading the way in{" "}
          <span className="text-primary">satellite tech</span> innovative
          solutions for communication.
        </h1>
        <div className="hero-btm relative w-full flex justify-center">
          <img src={heroimg} alt="" className="w-[1000px]" />
          <div className="service bg-primary rounded-full w-56 py-3 text-white absolute top-48 left-60 m:hidden">
            <p className="text-xl font-medium">Internet Services</p>
            <p className="text-gray-200">3 Years</p>
          </div>
          <div className="service bg-primary rounded-full w-56 py-3 text-white absolute bottom-24 right-60 m:hidden">
            <p className="text-xl font-medium">Broadcast Services</p>
            <p className="text-gray-200">2 Years</p>
          </div>
          <div className="service bg-primary rounded-full w-56 py-3 text-white absolute top-8 right-[400px] m:hidden">
            <p className="text-xl font-medium">Data Services</p>
            <p className="text-gray-200">1 Year</p>
          </div>
        </div>
      </div>
    </div>
  );
}
