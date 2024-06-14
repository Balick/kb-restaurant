import React from "react";
import { images } from "../data/index.js";

export default function ImageList() {
  return (
    <div>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Burger"
          className={`scale-50 translate-y-full absolute top-[30%] md:top-0 md:pt-12 left-[48%] -translate-x-1/2 flex items-center justify-center w-[800px] object-cover image ${
            index === 0 ? "w-[650px]" : ""
          }`}
        />
      ))}
    </div>
  );
}
