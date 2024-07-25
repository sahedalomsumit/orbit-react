import React, { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="nav-wrapper flex flex-row w-full justify-between items-center">
          <a href="#" className="decoration-none text-5xl flex m:text-3xl">
            Orbit
            <div className="h-2 w-2 bg-primary rounded-full self-end mb-1 ml-1 m:h-1.5 m:w-1.5 m:mb-1.5"></div>
          </a>
          <div
            className={`menu ${
              !isMenuOpen ? "m:hidden" : "m:block"
            } m:absolute m:bg-white m:w-[100%] m:top-20 m:pt-4 m:left-0 m:justify-center m:items-center m:text-center m:h-lvh m:z-50`}
          >
            <ul className="flex flex-row m:flex-col gap-8">
              <li className="hover:text-primary">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">About</a>
              </li>
              <li className="relative group hover:text-primary">
                <a href="#">Planets</a>
                <div className="absolute hidden group-hover:block m:absolute m:right-8">
                  <ul className="bg-white shadow-lg">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-primary"
                      >
                        Mercury
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-primary"
                      >
                        Earth
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-primary"
                      >
                        Jupiter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-primary"
                      >
                        Uranus
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hover:text-primary">
                <a href="#">Blog</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <Button btnText="Let's Talk" href="#" id="navBtn" />
          <div className="hidden m:block" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
