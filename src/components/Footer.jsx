import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="location" className="py-12 bg-[#0a0a0a]">
      <div className="container">
        <section className="mb-8">
          <h1 className="uppercase text-xl md:text-2xl text-center mb-4 font-bold font-[oswald] tracking-wider">
            Where can you <span className="text-amber-700">find us?</span>
          </h1>
          <p className="text-center text-slate-300 md:text-lg">
            KB Restaurant is located at 1234 Lumumba Street, Lubumbashi, RDC.
          </p>
        </section>
        <section className="flex flex-col md:flex-row justify-between items-center md:items-baseline gap-4">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-white text-2xl font-bold">KB Restaurant</h1>
            <p className="text-amber-800 text-center text-sm">
              &copy; 2024 KB Restaurant. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Follow us</h3>
            <div className="flex items-center gap-2">
              <a href="#" target="_blank">
                <AiFillInstagram className="fill-amber-700 w-6 h-6 hover:fill-amber-600 transition-all duration-300" />
              </a>
              <a href="#" target="_blank">
                <FaFacebookSquare className="fill-amber-700 w-6 h-6 hover:fill-amber-600 transition-all duration-300" />
              </a>
              <a href="#" target="_blank">
                <FaXTwitter className="fill-amber-700 w-6 h-6 hover:fill-amber-600 transition-all duration-300" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
