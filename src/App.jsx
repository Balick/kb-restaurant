import React from "react";

const titles = ["Ecratose", "SolmazoE", "ZozoligE", "Gistagor"];
const images = [
  "/images/burger.png",
  "/images/burger2.png",
  "/images/burger3.png",
  "/images/burger5.png",
];
const names = [
  "Ecratose 007",
  "SolmazoE 008",
  "ZozoligE 004",
  "Gistagor 002",
];

function TitleList() {
  return (
    <div className="flex flex-col items-center">
      {titles.map((title, index) => (
        <h1
          key={index}
          className={`opacity-0 -translate-y-full text-orange-900 absolute left-1/2 -translate-x-1/2 top-1/4 text-[18rem] leading-[1] uppercase title`}
        >
          {title}
        </h1>
      ))}
    </div>
  );
}

function ImageList() {
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

function NameList() {
  return (
    <div className="w-full flex justify-center items-center z-10">
      {names.map((name, index) => (
        <p
          key={index}
          className={`p text-4xl font-light tracking-[1rem] uppercase w-full absolute bottom-10 left-1/2 -translate-x-1/2 text-center name ${
            index !== 0 ? "opacity-0" : ""
          }`}
        >
          {name}
        </p>
      ))}
    </div>
  );
}

function ArrowDirection() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-between py-2 px-20 z-30">
      <div className="arrow-left cursor-pointer">
        <img src="/arrow-left.svg" alt="Arrow" className="w-20" />
      </div>
      <div className="arrow-right cursor-pointer">
        <img src="/arrow-right.svg" alt="Arrow" className="w-20" />
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="relative w-full overflow-hidden text-black">
      <div className="relative w-full h-screen flex items-center justify-center p-4 main">
        <TitleList />
        <ImageList />
        <NameList />
      </div>
      <ArrowDirection />
    </main>
  );
}

export default App;