import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.scss";
import gsap from "gsap";

const ease = "elastic.out(1,0.85)";
const duration = 1.5;
const intervalTime = 5000; // 5 seconds

function Main() {
  useEffect(() => {
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
    const titles = document.querySelectorAll(".title");
    const names = document.querySelectorAll(".name");
    const images = document.querySelectorAll(".image");

    let current = 0;
    let intervalId;

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

    const startAutoSlide = () => {
      intervalId = setInterval(() => {
        current = (current + 1) % titles.length;
        update();
      }, intervalTime);
    };

    const stopAutoSlide = () => {
      clearInterval(intervalId);
    };

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

    update();
    startAutoSlide();

    return () => {
      stopAutoSlide();
      arrowLeft.removeEventListener("click", () => {});
      arrowRight.removeEventListener("click", () => {});
    };
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
