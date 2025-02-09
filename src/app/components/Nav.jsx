"use client";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import Cart from "./Cart";
import Favourite from "./Favourite";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Nav() {
  const [ShowCart, SetShowCart] = useState(false);
  const [ShowFav, SetShowFav] = useState(false);

  const data = useSelector((state) => state.Compt.DataBase.Cart);
  const data1 = useSelector((state) => state.Compt.DataBase.Favourite);

  return (
    <div className="sticky-top">
      <div className="py-3 text-primary rounded-5 container w-50 NavDiv mt-2 sticky-top">
        <ul className="d-flex justify-content-around px-0 m-0 rounded">
          <Link href="/HomePage" className="text-light text-decoration-none">
            Home
          </Link>
          <Link href="/PetOwner" className="text-light text-decoration-none">
            Pet Owner
          </Link>
          <Link href="/PetDetails" className="text-light text-decoration-none">
            Pet Details
          </Link>
          <Link href="/About" className="text-light text-decoration-none">
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
            left: "65px",
            cursor: "pointer",
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
            top: "18px",
            left: "23px",
          }}
          className="rounded-circle position-absolute d-flex justify-content-center align-items-center"
        >
          {data1.length >= 9 ? "+" + 9 : data1.length}
        </div>
        <Image
          src={require("../../Icons/favorites.png")}
          alt=""
          id="Favourite"
          style={{ cursor: "pointer" }}
          onClick={() => {
            SetShowFav(true);
          }}
        />
        <Image
          src={require("../../Icons/shopping-bag.png")}
          alt=""
          id="Cart"
          style={{ cursor: "pointer" }}
          onClick={() => {
            SetShowCart(true);
          }}
        />
        <Link href="/Login">
          <Image
            src={require("../../Icons/LogOut.png")}
            alt=""
            id="LogOut"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <div>{ShowCart ? <Cart></Cart> : ""}</div>
        <div>{ShowFav ? <Favourite></Favourite> : ""}</div>
      </div>
    </div>
  );
}
