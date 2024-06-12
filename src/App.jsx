import "./App.css";
import { Main, SideBarLeft } from "./Components/Components";
import React from "react";

function App() {
  return (
    <div className="container w-[100%] relative mx-auto">
      <SideBarLeft className="w-fit" />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque
      eligendi, error est eveniet facere fuga fugit illum iste maxime, modi
      necessitatibus nemo nesciunt pariatur provident repudiandae sit voluptates
      voluptatum?
      <Main />
    </div>
  );
}

export default App;
