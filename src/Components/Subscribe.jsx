import React from "react";
import CtaBg from "../assets/Group 2.png";

export default function Subscribe() {
  return (
    <div className=" text-white bg-[#EDECFE] py-32 m:py-16">
      <div className="container mx-auto">
        <div
          className="cta px-64 m:px-8 text-center flex flex-col justify-center items-center gap-8 h-[475px] m:h-auto bg-cover bg-center bg-no-repeat relative m:py-12"
          style={{ backgroundImage: `url(${CtaBg})` }}
        >
          <h2 className="text-6xl m:text-2xl font-bold leading-tight">
            Subscribe my newsletter and get latest update
          </h2>
          <div className="subscribe-form relative">
            <input
              type="email"
              name=""
              id=""
              className="rounded-full h-16 px-8 w-[500px] bg-secondary placeholder:text-white border-secondary m:w-[80vw]"
              placeholder="Email address"
            />
            <a
              type="submit"
              href="#"
              className="absolute bg-primary rounded-full right-1 top-1 py-4 px-8 font-medium"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
