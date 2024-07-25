import React from "react";
import featured from "../assets/img-human.png";
import icon from "../assets/Vector.png";

export default function Featured() {
  return (
    <div className="-mt-16 m:-mt-32">
      <div className="container flex gap-32 mx-auto items-center m:flex-col m:gap-16">
        <div className="featured-img relative w-1/2 m:hidden">
          <img src={featured} alt="" className="h-[700px] mx-auto m:h-auto" />
          <div className="featured-texts m:hidden">
            <div className="service bg-primary rounded-full w-56 py-3 text-white absolute top-36 -right-12 text-center">
              <p className="text-xl font-medium">Internet Services</p>
              <p className="text-gray-200">3 Years</p>
            </div>
            <div className="service bg-primary rounded-full w-56 py-3 text-white absolute bottom-16 left-0 text-center">
              <p className="text-xl font-medium">Broadcast Services</p>
              <p className="text-gray-200">2 Years</p>
            </div>
          </div>
        </div>
        <div className="featured-right w-1/2 m:w-full">
          <h2 className="text-6xl font-semibold mb-4 m:text-3xl">
            A new ideas of{" "}
            <span className="text-primary">Creative Design </span>Future
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            sem sit amet dui venenatis efficitur. Aliquam commodo mi semper
            metus euis mod, ac tincidunt risus molestie. Aenean lorem augue,
            efficitur at dig nissim nec, auctor in diam.
          </p>
          <div className="accordian mt-12 flex flex-col gap-4">
            <div className="acc-1">
              <div className="icon-heading flex gap-2 items-center mb-4">
                <img src={icon} alt="" className="h-5" />
                <h3 className="text-3xl m:text-2xl font-medium">My Vision</h3>
              </div>
              <p className="active">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                quis sem sit amet dui venenatis efficitur. Aliquam commodo mi
                semper metus euis mod, ac tincidunt risus molestie. Aenean lorem
                augue, efficitur at dig nissim nec, auctor in diam.
              </p>
            </div>
            <div className="acc-1">
              <div className="icon-heading flex gap-2 items-center mb-4">
                <img src={icon} alt="" className="h-5" />
                <h3 className="text-3xl font-medium m:text-2xl">My Mission</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                quis sem sit amet dui venenatis efficitur. Aliquam commodo mi
                semper metus euis mod, ac tincidunt risus molestie. Aenean lorem
                augue, efficitur at dig nissim nec, auctor in diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
