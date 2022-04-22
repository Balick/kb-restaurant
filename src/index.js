import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { SideBarLeft, Main } from "./Components/Components";
import './index.css';

class App extends Component {
    render() {
        return (
            <div className="container w-[100%] relative mx-auto">
                <SideBarLeft className="w-fit" />
                <Main />
            </div>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

