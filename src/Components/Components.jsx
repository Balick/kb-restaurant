import {
  UilDraggabledots,
  UilSearch,
  UilPlus,
  UilMinus,
  UilShoppingCartAlt,
  UilBars,
} from "@iconscout/react-unicons";
import { Component } from "react";
import burger from "../img/burger.jpg";
import burger2 from "../img/burger2.jpg";
import burger3 from "../img/burger3.webp";
import burger4 from "../img/burger4.jpg";
import burger5 from "../img/burger5.webp";

const foodsList = {
  "Classic Burger": {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam cupiditate, dolores doloribus ea eos ex fugit ipsam maxime, molestiae nesciunt nostrum quae quas quo quod similique vitae, voluptates voluptatibus.",
    prix: 16,
    img: burger5,
  },
  "Double Burger": {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam cupiditate, dolores doloribus ea eos ex fugit ipsam maxime, molestiae nesciunt nostrum quae quas quo quod similique vitae, voluptates voluptatibus.",
    prix: 18,
    img: burger2,
  },
  "Green Burger": {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam cupiditate, dolores doloribus ea eos ex fugit ipsam maxime, molestiae nesciunt nostrum quae quas quo quod similique vitae, voluptates voluptatibus.",
    prix: 20,
    img: burger3,
  },
  "Taj Chili Burger": {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam cupiditate, dolores doloribus ea eos ex fugit ipsam maxime, molestiae nesciunt nostrum quae quas quo quod similique vitae, voluptates voluptatibus.",
    prix: 22,
    img: burger4,
  },
  "Healthy Burger": {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam cupiditate, dolores doloribus ea eos ex fugit ipsam maxime, molestiae nesciunt nostrum quae quas quo quod similique vitae, voluptates voluptatibus.",
    prix: 14,
    img: burger,
  },
};

export class Main extends Component {
  render() {
    const listNamesFoods = Object.keys(foodsList).slice(1);
    const foods = listNamesFoods.map((foodItem) => (
      <CardFood
        key={foodItem}
        nameFood={foodItem}
        info={foodsList[foodItem].info}
        prix={foodsList[foodItem].prix}
        img={foodsList[foodItem].img}
      />
    ));
    window.addEventListener("resize", () => {});
    return (
      <div className="pb-4 pr-[20px] pl-[20px] md:pl-[100px] lg:pl-0 mx-auto">
        <SideBarTop />
        <div className="flex gap-4 mt-[6rem] xl:w-[1032px] flex-col sm2:flex-row  lg:flex-nowrap mx-auto">
          <div className="h-max flex flex-col justify-center gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl text-red-400">Burger de la semaine</h3>
              <p className="sm0:w-[400px] h-[75px] truncate whitespace-normal text-slate-800">
                Lorem ipsum dolor sit amet,dolores harum labore maiores natus
                optio pariatur perferendis placeat ratione recusandae repellat,
                repellendus reprehenderit soluta unde voluptatibus.
              </p>
            </div>
            <CardFood
              nameFood={Object.keys(foodsList)[0]}
              info={foodsList[Object.keys(foodsList)[0]].info}
              prix={foodsList[Object.keys(foodsList)[0]].prix}
              className=""
              img={foodsList[Object.keys(foodsList)[0]].img}
              big={true}
            />
          </div>
          <div className="flex flex-col flex-wrap md:flex-row gap-4 w-max">
            {foods}
          </div>
        </div>
      </div>
    );
  }
}

export const SideBarLeft = () => {
  return (
    <div className="flex-col gap-[40%] nav-p items-center h-[100vh] border-r border-slate-400 border-solid fixed left-0 top-0 bottom-0 bg-white z-[3] hidden md:flex">
      <span className="sideBarLeft-item">
        <UilSearch />
      </span>
      <span className="sideBarLeft-item justify-self-center bg-slate-200 p-1 rounded-[.5rem] hover:bg-slate-100">
        <UilDraggabledots />
      </span>
    </div>
  );
};

const SideBarTop = () => {
  return (
    <nav className="flex justify-between items-center mb-8 py-4 fixed top-0 left-0 right-0 z-[2] bg-white  p-[20px] md:pl-[100px] md:pr-[50px]">
      <h1 className="text-lg font-medium">KB Restaurant</h1>
      <UilBars className="sm:hidden" />
      <div className="hidden sm2:flex gap-5">
        <a className="nav-item-active nav-item">Home</a>
        <a className="nav-item hover:nav-item-active">Products</a>
        <a className="nav-item hover:nav-item-active">Recipes</a>
        <a className="nav-item hover:nav-item-active">About</a>
      </div>
      <div className="hidden md:flex gap-4">
        <Button type="login" />
        <Button type="logout" />
      </div>
    </nav>
  );
};

const Button = (props) => {
  const type = props.type === "login" ? "Log in" : "Sign up";
  const _clasS =
    props.type === "login"
      ? "bg-orange-600 text-white hover:bg-orange-200 hover:text-orange-600"
      : "bg-orange-200 text-orange-600 hover:bg-orange-600 hover:text-white";
  return (
    <button
      className={
        "h-[33px] pt-[.1rem] pb-[.5rem] px-5 rounded-[.6rem] " + _clasS
      }
    >
      {type}
    </button>
  );
};

class CardFood extends Component {
  render() {
    return (
      <div
        className={
          "border rounded-[1rem] p-4 h-max " +
          (this.props.big ? "w-[100%] sm0:w-[400px]" : "w-[235px]")
        }
      >
        <div className="flex items-center justify-between relative">
          <div className="flex gap-[5px]">
            <span className="card-more card-more-active"></span>
            <span className="card-more hover:card-more-active"></span>
            <span className="card-more hover:card-more-active"></span>
            <span className="card-more hover:card-more-active"></span>
          </div>
          <div className="border-2 w-[4px] rounded-full flex flex-col items-center leading-[1rem] py-[.1rem] px-[1.5rem] text-sm hover:border-green-500 hover:text-green-500 cursor-pointer font-bold">
            <small>472</small>
            <small>kcl</small>
          </div>
        </div>

        <div>
          <img
            className={
              "mt-[-19px] mx-auto " + (this.props.big ? null : "h-[143px]")
            }
            src={this.props.img}
          />
        </div>
        <h2
          className={
            "font-bold " + (this.props.big ? "text-2xl" : "text-center text-md")
          }
        >
          {this.props.nameFood}
        </h2>
        <div
          className={
            "flex justify-between my-1 " + (this.props.big ? null : "hidden")
          }
        >
          <div className="card-food-extra">
            <small>Fat</small>
            <g>
              <small>- 26kg</small>
            </g>
          </div>
          <div className="card-food-extra">
            <small>Saturates</small>
            <g>
              <small>- 10kg</small>
            </g>
          </div>
          <div className="card-food-extra">
            <small>Sugars</small>
            <g>
              <small>- 18kg</small>
            </g>
          </div>
          <div className="card-food-extra">
            <small>Salt</small>
            <g>
              <small>- 1kg</small>
            </g>
          </div>
        </div>
        <p
          className={
            "text-sm text-slate-600 " +
            (this.props.big
              ? null
              : "h-[2.6rem] w-[100%] truncate whitespace-normal text-center mx-auto")
          }
        >
          {this.props.info}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-[5px] bg-slate-100 w-max p-[.2rem] rounded-[.5rem]">
            <UilMinus className="cursor-pointer" /> <span>0</span>{" "}
            <UilPlus className="text-green-500 cursor-pointer" />
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold">${this.props.prix}</span>
            <button className="bg-green-100 text-green-500 flex items-center gap-[5px] py-1 px-[1rem] rounded-[.5rem]">
              <UilShoppingCartAlt
                className={
                  this.props.big ? "border-r border-green-300 pr-1" : "border-0"
                }
              />
              <small className={this.props.big ? null : "hidden"}>
                Add to Card
              </small>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
