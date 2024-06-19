import TitleList from "./title-list.jsx";
import ImageList from "./image-list.jsx";
import NameList from "./name-list.jsx";
import ArrowDirection from "./ArrowDirection.jsx";

export default function HeroSection() {
  return (
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
        <TitleList />
        <ImageList />
        <NameList />
      </div>
      <ArrowDirection />
    </div>
  );
}
