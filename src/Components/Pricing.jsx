import React from "react";
import Button from "./Button";
import pricing1 from "../assets/pricing1.png";
import pricing2 from "../assets/pricing2.png";
import pricing3 from "../assets/pricing3.png";
import pricing1Hover from "../assets/pricing1-hover.png";
import pricing2Hover from "../assets/pricing2-hover.png";
import pricing3Hover from "../assets/pricing3-hover.png";
import vector3 from "../assets/vectors3.svg";

export default function Pricing() {
  return (
    <section className="py-32 m:py-16">
      <div className="container mx-auto flex flex-col gap-24 m:gap-12">
        <div className="pricing-row-1 text-center w-[800px] mx-auto gap-8 flex flex-col m:w-full m:gap-4">
          <h1 className="text-5xl font-bold leading-tight m:text-3xl">
            Special <span className="text-primary">prices </span>that we offer
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            sem sit amet dui venenatis efficitur. Aliquam commodo mi semper
            metus euis mod.
          </p>
        </div>
        <div className="pricing-row-2 grid grid-cols-3 gap-8 m:grid-cols-1 m:gap-6">
          <div
            className="price-card group flex flex-col gap-8 text-center mx-auto items-center justify-stretch w-full py-16 bg-[#EDECFE] bg-auto  bg-no-repeat bg-right-bottom hover:bg-primary hover:text-white transition-all"
            style={{ backgroundImage: `url(${vector3})` }}
          >
            <img src={pricing1} alt="" className="w-24 group-hover:hidden" />
            <img
              src={pricing1Hover}
              alt=""
              className="w-24 hidden group-hover:block"
            />
            <div className="pack gap-2 flex flex-col ">
              <h3 className="text-4xl font-semibold ">Basic Package</h3>
              <p>For Small Project</p>
            </div>
            <div className="price flex flex-col gap-2">
              <h4 className="text-5xl font-bold text-primary group-hover:text-white">
                <span className="text-3xl">$ </span>49.99
              </h4>
              <p>Per Project</p>
            </div>
            <Button btnText="Get Started" href="#" />
          </div>
          <div
            className="price-card group flex flex-col gap-8 text-center mx-auto items-center justify-stretch w-full py-16 bg-[#EDECFE] bg-auto  bg-no-repeat bg-right-bottom hover:bg-primary hover:text-white transition-all"
            style={{ backgroundImage: `url(${vector3})` }}
          >
            <img src={pricing2} alt="" className="w-24 group-hover:hidden" />
            <img
              src={pricing2Hover}
              alt=""
              className="w-24 hidden group-hover:block"
            />
            <div className="pack gap-2 flex flex-col ">
              <h3 className="text-4xl font-semibold ">Regular Package</h3>
              <p>For Regular Project</p>
            </div>
            <div className="price flex flex-col gap-2">
              <h4 className="text-5xl font-bold text-primary group-hover:text-white">
                <span className="text-3xl">$ </span>59.99
              </h4>
              <p>Per Project</p>
            </div>
            <Button btnText="Get Started" href="#" />
          </div>
          <div
            className="price-card group flex flex-col gap-8 text-center mx-auto items-center justify-stretch w-full py-16 bg-[#EDECFE] bg-auto  bg-no-repeat bg-right-bottom hover:bg-primary hover:text-white transition-all"
            style={{ backgroundImage: `url(${vector3})` }}
          >
            <img src={pricing3} alt="" className="w-24 group-hover:hidden" />
            <img
              src={pricing3Hover}
              alt=""
              className="w-24 hidden group-hover:block"
            />
            <div className="pack gap-2 flex flex-col ">
              <h3 className="text-4xl font-semibold ">Expert Package</h3>
              <p>For Expert Project</p>
            </div>
            <div className="price flex flex-col gap-2">
              <h4 className="text-5xl font-bold text-primary group-hover:text-white">
                <span className="text-3xl">$ </span>69.99
              </h4>
              <p>Per Project</p>
            </div>
            <Button btnText="Get Started" href="#" />
          </div>
        </div>
      </div>
    </section>
  );
}
