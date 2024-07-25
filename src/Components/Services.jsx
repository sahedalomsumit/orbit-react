import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import cardVector from "../assets/card-vector.svg";
import Vector from "../assets/Vector.png";
import Vector2 from "../assets/btnhover-arrow.svg";
import card1Hover from "../assets/card1-hover.png";
import card2Hover from "../assets/card2-hover.png";
import card3Hover from "../assets/card3-hover.png";
import card4Hover from "../assets/card4-hover.png";

export default function Services() {
  return (
    <section className="bg-[#EDECFE] py-40 m:py-16">
      <div className="container mx-auto flex flex-col gap-24 m:gap-16">
        <div className="services-row-1 text-center w-[800px] mx-auto gap-8 flex flex-col m:w-full m:gap-4">
          <h1 className="text-5xl font-bold leading-tight m:text-3xl">
            My <span className="text-primary">services </span> is stunning
            deisgn with refreshing <span className="text-primary">ideas</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            sem sit amet dui venenatis efficitur. Aliquam commodo mi semper
            metus euis mod.
          </p>
        </div>
        <div className="services-row-2 grid grid-cols-2 gap-8 m:grid-cols-1 m:gap-6">
          <div className="border-[1.5px] border-[#503dfe1b] ">
            <div
              className="big-card group flex flex-col gap-5 p-16 bg-white m-7 hover:bg-primary hover:text-white transition-all bg-auto bg-no-repeat bg-right-bottom m:m-4 m:p-8"
              style={{ backgroundImage: `url(${cardVector})` }}
            >
              <img
                src={card1}
                alt=""
                className="h-24 w-24 group-hover:hidden"
              />
              <img
                src={card1Hover}
                alt=""
                className="h-24 w-24 group-hover:block hidden"
              />
              <h3 className="text-3xl font-medium">UI Designs</h3>
              <p className="text-gray-500 group-hover:text-white">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Pra
                esent quis condi mentum. Fusce elementum ligula nec ligula
                tempus, eu cursus dolor tristique. Pellentesque eu turpis
                porttitor Interdum et malesuada fames.
              </p>
              <div className="readmore flex items-center gap-2 mt-4">
                <a href="#" className="font-bold">
                  Read More
                </a>
                <img src={Vector} alt="" className="h-3 group-hover:hidden" />
                <img
                  src={Vector2}
                  alt=""
                  className="h-3 hidden group-hover:block"
                />
              </div>
            </div>
          </div>
          <div className="border-[1.5px] border-[#503dfe1b] ">
            <div
              className="big-card group flex flex-col gap-5 p-16 bg-white m-7 hover:bg-primary hover:text-white transition-all bg-auto bg-no-repeat bg-right-bottom m:m-4 m:p-8"
              style={{ backgroundImage: `url(${cardVector})` }}
            >
              <img
                src={card2}
                alt=""
                className="h-24 w-24 group-hover:hidden"
              />
              <img
                src={card2Hover}
                alt=""
                className="h-24 w-24 group-hover:block hidden"
              />
              <h3 className="text-3xl font-medium">UX Designs</h3>
              <p className="text-gray-500 group-hover:text-white">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Pra
                esent quis condi mentum. Fusce elementum ligula nec ligula
                tempus, eu cursus dolor tristique. Pellentesque eu turpis
                porttitor Interdum et malesuada fames.
              </p>
              <div className="readmore flex items-center gap-2 mt-4">
                <a href="#" className="font-bold">
                  Read More
                </a>
                <img src={Vector} alt="" className="h-3 group-hover:hidden" />
                <img
                  src={Vector2}
                  alt=""
                  className="h-3 hidden group-hover:block"
                />
              </div>
            </div>
          </div>
          <div className="border-[1.5px] border-[#503dfe1b] ">
            <div
              className="big-card group flex flex-col gap-5 p-16 bg-white m-7 hover:bg-primary hover:text-white transition-all bg-auto bg-no-repeat bg-right-bottom m:m-4 m:p-8"
              style={{ backgroundImage: `url(${cardVector})` }}
            >
              <img
                src={card3}
                alt=""
                className="h-24 w-24 group-hover:hidden"
              />
              <img
                src={card3Hover}
                alt=""
                className="h-24 w-24 group-hover:block hidden"
              />
              <h3 className="text-3xl font-medium">Web Development</h3>
              <p className="text-gray-500 group-hover:text-white">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Pra
                esent quis condi mentum. Fusce elementum ligula nec ligula
                tempus, eu cursus dolor tristique. Pellentesque eu turpis
                porttitor Interdum et malesuada fames.
              </p>
              <div className="readmore flex items-center gap-2 mt-4">
                <a href="#" className="font-bold">
                  Read More
                </a>
                <img src={Vector} alt="" className="h-3 group-hover:hidden" />
                <img
                  src={Vector2}
                  alt=""
                  className="h-3 hidden group-hover:block"
                />
              </div>
            </div>
          </div>
          <div className="border-[1.5px] border-[#503dfe1b] ">
            <div
              className="big-card group flex flex-col gap-5 p-16 bg-white m-7 hover:bg-primary hover:text-white transition-all bg-auto bg-no-repeat bg-right-bottom m:m-4 m:p-8"
              style={{ backgroundImage: `url(${cardVector})` }}
            >
              <img
                src={card4}
                alt=""
                className="h-24 w-24 group-hover:hidden"
              />
              <img
                src={card4Hover}
                alt=""
                className="h-24 w-24 group-hover:block hidden"
              />
              <h3 className="text-3xl font-medium">Product Branding</h3>
              <p className="text-gray-500 group-hover:text-white">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Pra
                esent quis condi mentum. Fusce elementum ligula nec ligula
                tempus, eu cursus dolor tristique. Pellentesque eu turpis
                porttitor Interdum et malesuada fames.
              </p>
              <div className="readmore flex items-center gap-2 mt-4">
                <a href="#" className="font-bold">
                  Read More
                </a>
                <img src={Vector} alt="" className="h-3 group-hover:hidden" />
                <img
                  src={Vector2}
                  alt=""
                  className="h-3 hidden group-hover:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
