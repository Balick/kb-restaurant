import { names } from "../data/index.js";
import React from "react";

export default function NameList() {
  return (
    <div className="w-full flex justify-center items-center z-10">
      {names.map((name, index) => (
        <p
          key={index}
          className={`p font-extrabold text-amber-900 md:text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl tracking-[1rem] uppercase w-full absolute bottom-48 left-1/2 -translate-x-1/2 text-center name ${
            index !== 0 ? "opacity-0" : ""
          }`}
        >
          {name}
        </p>
      ))}
    </div>
  );
}
