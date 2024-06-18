import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { Phone } from "lucide-react";

const SlideBurger = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex items-center justify-center flex-col mb-16">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="container"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onBreakpoint={(swiper, breakpointParams) =>
          setSlidesPerView(breakpointParams.slidesPerView)
        }
      >
        {data.map(({ src, description, name, price }, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="p-2 flex flex-col items-center pb-12"
              initial="hidden"
              animate={
                index >= activeIndex && index < activeIndex + slidesPerView
                  ? "visible"
                  : "hidden"
              }
              variants={slideVariants}
              transition={{ duration: 0.5 }}
            >
              <img
                src={src}
                alt="burger image"
                className="h-[200px] md:h-[268px]"
              />
              <div className="flex flex-col gap-2 justify-between max-w-[85%]">
                <h1 className="text-center text-lg font-bold text-amber-700">
                  {name}
                </h1>
                <p className="font-normal text-sm text-center h-[40px]">
                  {description.length > 270
                    ? `${description.slice(0, 80)}...`
                    : description}
                </p>
                <div className="flex justify-between items-center px-4">
                  <span className="">
                    {price} <span className="text-amber-500">$</span>
                  </span>
                  <a href="#contact" className="group bg-amber-7000 text-white px-4 py-2 rounded-full bg-green-700 hover:bg-green-800 transition-all duration-300">
                    <span className="text-sm flex items-center gap-2">
                      Order now &nbsp; |{" "}
                      <Phone className="w-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideBurger;
