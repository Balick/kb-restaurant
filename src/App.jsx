import { Main, SideBarLeft } from "./Components/Components";

function App() {
  return (
    <div className="container w-[100%] relative mx-auto">
      <SideBarLeft className="w-fit" />
      <Main />
    </div>
  );
}

export default App;
