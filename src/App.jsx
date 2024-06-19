import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Slider from "./components/Slider.jsx";
import { burgers, drinks } from "./data";
import Footer from "./components/Footer.jsx";
import { motion } from "framer-motion";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
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
        <Slider data={burgers} />
        <h3 className="mx-auto text-xl border-b-2 border-amber-700 w-max text-amber-700 uppercase mb-4">
          Nos Boissons
        </h3>
        <Slider data={drinks} />
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

function Loading() {
  return (
    <motion.div
      className="bg-black fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.p
        className="text-amber-700 text-2xl md:text-4xl lg:text-7xl xl:text-9xl font-bold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        KB RESTAURANT
      </motion.p>
    </motion.div>
  );
}
