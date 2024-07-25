import React from "react";
import facebook from "../assets/facebook.png";
import x from "../assets/x.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import footerBg from "../assets/footer-bg.png";

export default function Footer() {
  return (
    <section
      className="my-8 bg-contain bg-no-repeat bg-bottom m:my-12"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="container mx-auto flex flex-col gap-8">
        <div className="footer-row1 flex justify-between m:flex-col m:gap-4">
          <a href="#" className="decoration-none decoration text-5xl flex">
            Orbit
            <div className="h-2 w-2 bg-primary rounded-full self-end mb-1 ml-1"></div>
          </a>
          <div className="social-icons flex gap-2">
            <a
              href="#"
              className="bg-primary rounded-full w-8 h-8 flex justify-center items-center hover:bg-secondary transition-all"
            >
              <img src={facebook} alt="" className="h-4" />
            </a>
            <a
              href="#"
              className="bg-primary rounded-full w-8 h-8 flex justify-center items-center hover:bg-secondary transition-all"
            >
              <img src={x} alt="" className="h-4" />
            </a>
            <a
              href="#"
              className="bg-primary rounded-full w-8 h-8 flex justify-center items-center hover:bg-secondary transition-all"
            >
              <img src={linkedin} alt="" className="h-4" />
            </a>
            <a
              href="#"
              className="bg-primary rounded-full w-8 h-8 flex justify-center items-center hover:bg-secondary transition-all"
            >
              <img src={instagram} alt="" className="h-4" />
            </a>
          </div>
        </div>
        <div className="footer-row2 flex justify-between m:flex-col m:gap-4">
          <p>
            Copyright © 2024{" "}
            <a
              href="https://sahedalomsumit.com"
              className="underline hover:text-primary hover:decoration-primary"
            >
              Orbit
            </a>
          </p>
          <div className="menu m:hidden">
            <ul className="flex flex-row gap-8 ">
              <li className="hover:text-primary">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">About</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Planets</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Blog</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
