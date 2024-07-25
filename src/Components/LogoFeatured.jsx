import React from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo 1.png";
import logo2 from "../assets/logo 2.png";
import logo3 from "../assets/logo 3.png";
import CtaBg from "../assets/Group 2.png";

export default function LogoFeatured() {
  return (
    <div className="h-[640px] bg-black pt-40 text-white mb-96 relative m:pt-24 m:h-[560px]">
      <div className="container mx-auto">
        <div className="logos flex justify-between m:grid m:grid-cols-2 m:gap-4">
          <div className="logo-texts flex justify-center items-center gap-4 ">
            <img src={logo} alt="logo1" className="logo1 w-16 m:w-12" />
            <div className="texts">
              <h3 className="text-xl m:text-lg">Waters Co.</h3>
              <p className="para text-gray-300">3 Years Experience</p>
            </div>
          </div>
          <div className="logo-texts flex justify-center items-center gap-4 ">
            <img src={logo1} alt="logo1" className="logo1 w-16 m:w-12" />
            <div className="texts">
              <h3 className="text-xl m:text-lg">Becker Do.</h3>
              <p className="para text-gray-300">3 Years Experience</p>
            </div>
          </div>
          <div className="logo-texts flex justify-center items-center gap-4 ">
            <img src={logo2} alt="logo1" className="logo1 w-16 m:w-12" />
            <div className="texts">
              <h3 className="text-xl m:text-lg">ON Agency</h3>
              <p className="para text-gray-300">3 Years Experience</p>
            </div>
          </div>
          <div className="logo-texts flex justify-center items-center gap-4 ">
            <img src={logo3} alt="logo1" className="logo1 w-16 m:w-12" />
            <div className="texts">
              <h3 className="text-xl m:text-lg">Love Co.</h3>
              <p className="para text-gray-300">3 Years Experience</p>
            </div>
          </div>
        </div>
        <div
          className="cta px-36 m:px-2 text-center flex flex-col justify-center items-center gap-8 h-[475px] mt-40 bg-cover bg-center bg-no-repeat relative m:mt-16 m:h-[340px] m:gap-6 m:py-16 m:bg-cover m:bg-center m:bg-no-repeat"
          style={{ backgroundImage: `url(${CtaBg})` }}
        >
          <h2 className="text-6xl font-bold leading-tight m:text-3xl">
            Let’s work together and make your imagination became reality
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
              className="absolute bg-primary rounded-full right-1 top-1 py-4 px-8 font-medium m:px-4"
            >
              Get Quotation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
