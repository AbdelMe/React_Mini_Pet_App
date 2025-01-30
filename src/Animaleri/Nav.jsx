import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Style/Nav.css";
import { Link } from "react-router-dom";
import LogOut from "./Icons/logout.png";
// import Cartt from "./Icons/shopping-bag.png";
// import Fav from "./Icons/favorites.png";
import Cart from "./components/Cart";
import {useState} from "react";
import { useSelector } from "react-redux";
export default function Nav() {

  const [Show, SetShow] = useState(false);
  const data = useSelector((state) => state.Compt.DataBase.Cart);
  return (
    <>
      <div className="py-3 text-primary rounded-5 container w-50 NavDiv mt-2">
        <ul className="d-flex justify-content-around px-0 m-0 rounded">
          <Link to="/" className="text-light text-decoration-none">
            Home
          </Link>
          <Link to="/PetOwner" className="text-light text-decoration-none">
            Pet Owner
          </Link>
          <Link to="/PetDetails" className="text-light text-decoration-none">
            Pet Details
          </Link>
          <Link to="/About" className="text-light text-decoration-none">
            About
          </Link>
        </ul>
      </div>

      <div id="LeftSide">
        <div
          style={{
            width: "18px",
            height: "18px",
            backgroundColor: "red",
            top: "17px",
            left: "70px",
            cursor:"pointer"
          }}
          className="rounded-circle position-absolute d-flex justify-content-center align-items-center"
        >
          {data.length >= 9 ? "+" + 9 : data.length}
        </div>
        <div
          style={{
            width: "18px",
            height: "18px",
            backgroundColor: "red",
            top: "19px",
            left: "25px",
          }}
          className="rounded-circle position-absolute"
        ></div>
        <img src={require('./Icons/favorites.png')} alt="" id="Favourite" />
        <img
          src={require("./Icons/shopping-bag.png")}
          alt=""
          id="Cart"
          style={{cursor:"pointer"}}
          onClick={() => {
            SetShow(true);
          }}
        />
        <Link to="/Login"><img src={LogOut} alt="" id="LogOut" style={{cursor:"pointer"}}/></Link>
        <div>{Show ? <Cart></Cart> : ""}</div>
      </div>
    </>
  );
}
