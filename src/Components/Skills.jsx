import React from "react";
import Vector from "../assets/Vector.png";
import Vector2 from "../assets/btnhover-arrow.svg";

export default function Skills() {
  return (
    <div className="py-36 m:py-24">
      <div className="container mx-auto flex flex-col gap-24 m:gap-12">
        <div className="skill-row1 flex gap-32 items-center m:flex-col m:gap-6">
          <h1 className="text-5xl w-1/2 font-bold m:w-full m:text-3xl">
            My <span className="text-primary">skills</span> are formed from
            years of <span className="text-primary">experience</span>
          </h1>
          <p className="w-1/2 m:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            sem sit amet dui venenatis efficitur. Aliquam commodo mi semper
            metus euis mod, ac tincidunt risus molestie.
          </p>
        </div>
        <div className="skill-row2 flex gap-8 m:flex-col m:gap-4">
          <div className="card group p-12 bg-[#EDECFE] flex flex-col gap-3 hover:bg-primary hover:text-white transition-all">
            <p className="text-primary font-bold group-hover:text-white">
              2012 - 2014 UI Designer
            </p>
            <h3 className="text-3xl font-medium">Facebook</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <div className="card group p-12 bg-[#EDECFE] flex flex-col gap-3 hover:bg-primary hover:text-white transition-all">
            <p className="text-primary font-bold group-hover:text-white">
              2012 - 2014 UI Designer
            </p>
            <h3 className="text-3xl font-medium">Linkedin</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <div className="card group p-12 bg-[#EDECFE] flex flex-col gap-3 hover:bg-primary hover:text-white transition-all">
            <p className="text-primary font-bold group-hover:text-white">
              2012 - 2014 UI Designer
            </p>
            <h3 className="text-3xl font-medium">Instagram</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <div className="card group p-12 bg-[#EDECFE] flex flex-col gap-3 hover:bg-primary hover:text-white transition-all">
            <p className="text-primary font-bold group-hover:text-white">
              2012 - 2014 UI Designer
            </p>
            <h3 className="text-3xl font-medium">Google</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <div className="skill-row3 grid grid-cols-2 gap-y-10 gap-x-20 m:grid-cols-1">
          <div className="skill gap-4 flex flex-col font-semibold text-lg">
            <div className="skill-label flex justify-between pr-12">
              <p>UI Design</p>
              <p>85%</p>
            </div>
            <div className="progress-bar h-2 bg-gray-500 rounded-full relative overflow-hidden">
              <div className="progress absolute bg-primary w-[85%] left-0 top-0 h-2 rounded-full"></div>
            </div>
          </div>
          <div className="skill gap-4 flex flex-col font-semibold text-lg">
            <div className="skill-label flex justify-between pr-12">
              <p>Web Development</p>
              <p>90%</p>
            </div>
            <div className="progress-bar h-2 bg-gray-500 rounded-full relative overflow-hidden">
              <div className="progress absolute bg-primary w-[90%] left-0 top-0 h-2 rounded-full"></div>
            </div>
          </div>
          <div className="skill gap-4 flex flex-col font-semibold text-lg">
            <div className="skill-label flex justify-between pr-12">
              <p>Content Writting</p>
              <p>90%</p>
            </div>
            <div className="progress-bar h-2 bg-gray-500 rounded-full relative overflow-hidden">
              <div className="progress absolute bg-primary w-[90%] left-0 top-0 h-2 rounded-full"></div>
            </div>
          </div>
          <div className="skill gap-4 flex flex-col font-semibold text-lg">
            <div className="skill-label flex justify-between pr-12">
              <p>No-code Development</p>
              <p>95%</p>
            </div>
            <div className="progress-bar h-2 bg-gray-500 rounded-full relative overflow-hidden">
              <div className="progress absolute bg-primary w-[95%] left-0 top-0 h-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
