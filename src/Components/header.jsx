import { navitems } from "../data/index.js";

export default function Header() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-[#ffffffd4]">
      <div className="container py-4 flex gap-8 items-center justify-between">
        <header>
          <h1 className="text-2xl font-bold flex gap-2">
            <span>KB</span>
            <span>Restaurant</span>
          </h1>
        </header>
        <nav className="flex gap-2 items-center">
          <a
            href="#"
            className="bg-amber-700 text-white px-4 py-2 rounded-full font-semibold"
          >
            <span>Order online</span>
          </a>
          <ul className="flex gap-4">
            {navitems.map(({ title, link }, index) => (
              <li key={index}>
                <a href={link}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col">
          <small className="text-amber-600 font-semibold">Call and Order</small>
          <a href="tel:+243893666998" className="font-extrabold text-xl">
            +243 893 666 998
          </a>
        </div>
      </div>
    </div>
  );
}
