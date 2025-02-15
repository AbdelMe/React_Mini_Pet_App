/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav";

function Sidebar({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Define an array for the links with images
  const menuItems = [
    {
      name: "Adopt a Pet",
      icon: "../assets/Icons/animal-shelter.png",
      path: "/PetDetails/Adopt",
    },
    {
      name: "Buy a Pet",
      icon: "../assets/Icons/shopping-bag.png",
      path: "/PetDetails/BuyPet",
    },
    {
      name: "Search Pet",
      icon: "../assets/Icons/search.png",
      path: "/PetDetails/FindPet",
    },
    { name: "Pet Food", icon: "../assets/Icons/bone.png", path: "/PetDetails/PetFood" },
    {
      name: "Pet Disease",
      icon: "../assets/Icons/germs.png",
      path: "/PetDetails/Disease",
    },
    {
      name: "Veterinarian",
      icon: "../assets/Icons/stethoscope.png",
      path: "/PetDetails/vet",
    },
    {
      name: "Advices",
      icon: "../assets/Icons/shopping-bag.png",
      path: "/PetDetails/Advices",
    },
  ];

  return (
    <>
      <Nav></Nav>
      <div className="d-flex mt-4">
        {/* Sidebar */}
        <div
          className={`text-white ${isCollapsed ? "col-1" : "col-2"
            } p-3 rounded-4 text-center mx-2`}
          style={{ transition: "width 0.3s", height: "80vh" }}
          id="content"
        >
          <p
            className="mb-5 flex justify-center"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {isCollapsed ? (
              <img
                src="../assets/Icons/right-arrow.png"
                alt="Expand Sidebar"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
              />
            ) : (
              <img
                src="../assets/Icons/left-arrow.png"
                alt="Collapse Sidebar"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}

              />
            )}
          </p>
          <ul className="nav flex-column">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link
                  href={item.path}
                  className={`nav-link text-white d-flex align-items-center ${isCollapsed
                    ? "justify-content-center"
                    : "justify-content-start"
                    } fs-5`}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    title={item.name}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: isCollapsed ? "0" : "10px",
                    }}
                  />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        {children && (
          <div className="col p-4 w-75 mx-4 text-center rounded-4" id="content">
            {children}
          </div>
        )}
        {/* <footer className="text-light">©️2025</footer> */}
      </div>
    </>
  );
}

export default Sidebar;