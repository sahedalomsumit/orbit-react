import React from "react";

export default function Button({ btnText, href }) {
  return (
    <button className="bg-primary py-3 px-8 rounded-full font-medium text-white hover:bg-secondary transition-all group-hover:bg-secondary m:py-2 m:px-6 ">
      <a href={href}>{btnText}</a>
    </button>
  );
}
