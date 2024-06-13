import React from "react";
import TitleList from "./Components/title-list.jsx";
import ImageList from "./Components/image-list.jsx";
import NameList from "./Components/name-list.jsx";
import ArrowDirection from "./Components/arrow-direction.jsx";
import Header from "./Components/header.jsx";

export default function App() {
  return (
    <main className="bg-[#fffaf7]">
      <Header />
      <HeroSection />
      <div className="container mt-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        iusto quibusdam sed placeat ex temporibus ratione! Mollitia iusto rem,
        eos dignissimos tempore aperiam qui, iure obcaecati ex nesciunt laborum
        similique. Optio excepturi similique aspernatur ullam nisi quam hic
        doloribus voluptate blanditiis atque quia ut delectus inventore,
        perferendis ducimus pariatur officiis ipsam alias autem commodi, odit
        sint magni. Fuga, iure officia! Consequatur ab placeat libero doloremque
        minima recusandae maxime nostrum id voluptate perferendis optio,
        corporis, dolores eligendi deserunt quisquam iusto cum fugit illo.
        Quidem voluptatibus modi maxime dolor magnam? Omnis, esse? Unde ad
        maxime magni, sit suscipit numquam ratione dignissimos blanditiis nihil
        incidunt fuga omnis perferendis quasi error vel possimus repudiandae
        fugit? Amet mollitia iusto dolorum eius non, quam similique voluptatem!
        Expedita qui velit architecto. Impedit, nulla ut. Quaerat, nesciunt ea!
        Nobis, quidem itaque quis laboriosam tempora adipisci eligendi tenetur
        molestias iusto reiciendis placeat officia, quas vero blanditiis error
        deleniti quod.
      </div>
    </main>
  );
}

function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-screen flex items-center justify-center p-4 main">
        <TitleList />
        <ImageList />
        <NameList />
      </div>
      <ArrowDirection />
    </div>
  );
}
