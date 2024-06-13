import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.scss";
import gsap from "gsap";

const ease = "elastic.out(1,0.85)";
const duration = 1.5;

function Main() {
  useEffect(() => {
    const main = document.querySelector(".main");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
    const titles = document.querySelectorAll(".title");
    const names = document.querySelectorAll(".name");
    const images = document.querySelectorAll(".image");

    let current = 0;

    const update = () => {
      /*const backgrounds = [
        "radial-gradient(83.69% 83.69% at 50% 35.84%, #24D381 0%, #00725B 100%)",
        "radial-gradient(83.69% 83.69% at 50% 35.84%, #E3DC25 0%, #E8C000 67.71%)",
        "radial-gradient(83.69% 83.69% at 50% 35.84%, #C91920 0%, #6F0012 100%)",
        "radial-gradient(83.69% 83.69% at 50% 35.84%, #9C00E9 0%, #5F00E0 100%)",
      ];*/

      //main.style.background = backgrounds[current];

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

    arrowLeft.addEventListener("click", () => {
      current = (current - 1 + titles.length) % titles.length;
      update();
    });

    arrowRight.addEventListener("click", () => {
      current = (current + 1) % titles.length;
      update();
    });

    update();
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
