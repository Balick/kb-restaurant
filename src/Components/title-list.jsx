import React from "react";
import { titles } from "../data/index";

export default function TitleList() {
  return (
    <div className="flex flex-col items-center">
      {titles.map((title, index) => (
        <h1
          key={index}
          className={`opacity-0 text-nowrap -translate-y-full absolute left-1/2 -translate-x-1/2 top-1/4 text-[18rem] leading-[1] uppercase title`}
        >
          {title}
        </h1>
      ))}
    </div>
  );
}
