import React, { useEffect } from "react";
import gsap from "gsap";
import {burgers} from "../data";
import ArrowDirection from "./ArrowDirection";

// Animation settings
const ease = "elastic.out(1,0.85)";
const duration = 1.5;
const intervalTime = 5000; // 5 seconds

function HeroSection() {
  useEffect(() => {
    // Select DOM elements
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
    const titles = document.querySelectorAll(".title");
    const names = document.querySelectorAll(".name");
    const images = document.querySelectorAll(".image");

    let current = 0; // Current slide index
    let intervalId;

    // Update the visibility and position of elements based on the current slide
    const update = () => {
      titles.forEach((title, index) => {
        gsap.to(title, {
          duration: duration,
          ease: ease,
          opacity: index === current ? 1 : 0,
          y: index === current ? 0 : "-200%",
        });
      });

      names.forEach((name, index) => {
        gsap.to(name, {
          duration: duration,
          ease: ease,
          opacity: index === current ? 1 : 0,
        });
      });

      images.forEach((image, index) => {
        gsap.to(image, {
          duration: duration,
          ease: ease,
          y: index === current ? 0 : "200%",
          scale: index === current ? 1 : 0.5,
        });
      });
    };

    // Start automatic slide transition
    const startAutoSlide = () => {
      intervalId = setInterval(() => {
        current = (current + 1) % titles.length;
        update();
      }, intervalTime);
    };

    // Stop automatic slide transition
    const stopAutoSlide = () => {
      clearInterval(intervalId);
    };

    // Event listeners for arrow buttons
    arrowLeft.addEventListener("click", () => {
      stopAutoSlide();
      current = (current - 1 + titles.length) % titles.length;
      update();
      startAutoSlide();
    });

    arrowRight.addEventListener("click", () => {
      stopAutoSlide();
      current = (current + 1) % titles.length;
      update();
      startAutoSlide();
    });

    // Initial update and start auto slide
    update();
    startAutoSlide();

    // Cleanup event listeners on component unmount
    return () => {
      stopAutoSlide();
      arrowLeft.removeEventListener("click", () => {});
      arrowRight.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="relative w-full overflow-hidden">
        <div className="container sm:hidden absolute inset-x-0 top-16 flex justify-end">
          <div className="flex flex-col text-nowrap w-max px-8 py-2">
            <small className="text-amber-600 font-semibold">Call and Order</small>
            <a href="tel:+243893666998" className="font-extrabold text-xl">
              +243 893 666 998
            </a>
          </div>
        </div>
        <div className="relative w-full h-screen flex items-center justify-center p-4 main">
          <div className="flex flex-col items-center">
            {burgers.map(({ name }, index) => (
              <h1
                key={index}
                className={`opacity-0 text-nowrap absolute left-1/2 -translate-x-1/2 top-1/4 text-[18rem] leading-[1] uppercase title`}
              >
                {name}
              </h1>
            ))}
          </div>
          <div>
            {burgers.map(({ src, name }, index) => (
              <img
                key={index}
                src={src}
                alt={name}
                className={`scale-50 translate-y-full absolute top-[30%] md:top-0 md:pt-12 left-[48%] -translate-x-1/2 flex items-center justify-center w-[800px] object-cover image ${
                  index === 0 ? "w-[650px]" : ""
                }`}
              />
            ))}
          </div>
          <div className="w-full flex justify-center items-center z-10">
            {burgers.map(({ name }, index) => (
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
        </div>
        <ArrowDirection />
      </div>
    </div>
  );
}

export default HeroSection;
