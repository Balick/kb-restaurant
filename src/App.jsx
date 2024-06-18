import React from "react";
import Header from "./Components/header.jsx";
import HeroSection from "./Components/hero-section.jsx";
import SlideBurger from "./Components/ActiveSliser.jsx";
import { burgers, drinks } from "./data/index.js";
import Footer from "./Components/Footer.jsx";

export default function App() {
  return (
    <main className="bg-black">
      <Header />
      <HeroSection />
      <section className="container mb-16">
        <h1 className="text-center text-2xl font-bold uppercase mb-4">
          Burgers to <span className="text-yellow-500">tantalise</span> the
          taste buds!
        </h1>
        <p className="text-center text-slate-300 md:text-lg">
          Welcome to KB Restaurant, where every bite of our burgers is an
          explosion of flavour!
        </p>
      </section>
      <div id="menu">
        <h3 className="mx-auto text-xl border-b-2 border-amber-700 w-max text-amber-700 uppercase mb-4">
          Nos Burgers
        </h3>
        <SlideBurger data={burgers} />
        <h3 className="mx-auto text-xl border-b-2 border-amber-700 w-max text-amber-700 uppercase mb-4">
          Nos Boissons
        </h3>
        <SlideBurger data={drinks} />
      </div>
      <div
        id="contact"
        className="w-full h-80 flex items-center justify-center relative"
      >
        <img
          src="/images/background.png"
          alt="background"
          className="absolute w-full h-full object-cover opacity-[.1]"
        />
        <div>
          <h1 className="text-center text-xl font-bold uppercase mb-4">
            <span className="text-yellow-500">Get it in 30 minutes!</span>
            <br /> Order now.
          </h1>
          <p className="text-center text-slate-300 md:text-lg">
            Call us on{" "}
            <a
              href="tel:+243893666998"
              className="text-amber-700 font-semibold"
            >
              +243 893 666 998
            </a>{" "}
            to place your order.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
