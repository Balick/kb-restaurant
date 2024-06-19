import { navItems } from "../data";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

// Animation variants for the menu
const menuVars = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
  },
  exit: {
    scaleY: 0,
    transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Animation variants for the container
const containerVars = {
  initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
};

// Animation variants for mobile links
const mobileLinkVars = {
  initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
  open: { y: 0, transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 } },
};

// Component for individual mobile navigation links
const MobileNavLink = ({ title, href, handleClick }) => (
  <motion.div
    variants={mobileLinkVars}
    className="text-5xl uppercase text-black"
    onClick={() => handleClick(false)}
  >
    <a href={href}>{title}</a>
  </motion.div>
);

const Header = () => {
  const [open, setOpen] = useState(false); // State to manage menu open/close

  // Function to toggle the menu state
  const toggleMenu = () => setOpen((prevOpen) => !prevOpen);

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-[#000000d1]">
      <div className="container py-4 flex gap-8 items-center justify-between">
        <header>
          <a href="/" className="text-2xl font-bold flex gap-2 text-amber-700">
            <span>KB</span>
            <span>Restaurant</span>
          </a>
        </header>
        <nav className="hidden lg:flex gap-2 items-center">
          <a href="#contact" className="bg-amber-700 text-white px-4 py-2 rounded-full font-semibold">
            <span>Order online</span>
          </a>
          <ul className="flex gap-4">
            {navItems.map(({ title, link }, index) => (
              <li key={index}>
                <a href={link}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-8">
          <div className="hidden sm:flex flex-col">
            <small className="text-amber-600 font-semibold">Call and Order</small>
            <a href="tel:+243893666998" className="font-extrabold text-xl">+243 893 666 998</a>
          </div>
          <button
            className="font-semibold sm:bg-amber-100 sm:text-black lg:text-white px-4 py-1 lg:hidden"
            onClick={toggleMenu}
          >
            <span>MENU</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#fffaf7] py-4"
          >
            <div className="h-full container">
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <header>
                    <h1 className="text-2xl font-bold flex gap-2 text-amber-700">
                      <span>KB</span>
                      <span>Restaurant</span>
                    </h1>
                  </header>
                  <button className="font-semibold text-black" onClick={toggleMenu}>
                    <span>CLOSE</span>
                  </button>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center font-lora items-center gap-4"
                >
                  {navItems.map((link, index) => (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink title={link.title} href={link.link} handleClick={setOpen} />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
