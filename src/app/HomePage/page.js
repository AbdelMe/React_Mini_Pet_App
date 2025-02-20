/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import React, { useContext } from "react";
// import HappyPet from "../../Pictures/HappyPet.png";
// import Footer from "./Footer";
// import { textColor } from "./Footer";
import Nav from "../components/Nav";
import Image from "next/image";

export default function Home1() {
  // const textC = useContext(textColor);

  // console.log(new Date().toLocaleDateString()) //31/01/2025
  const services = [
    {
      icon: "🏡",
      title: "Pet Boarding",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit.",
    },
    {
      icon: "🍖",
      title: "Pet Feeding",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit.",
    },
    {
      icon: "✂️",
      title: "Pet Grooming",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit.",
    },
    {
      icon: "🐕",
      title: "Pet Training",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit.",
    },
    {
      icon: "🏃",
      title: "Pet Exercise",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit.",
    },
    {
      icon: "🩺",
      title: "Pet Treatment",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit.",
    },
  ];
  return (
    <div>
      <Nav></Nav>
      <div className="container mt-5">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center pb-3">
          <h2 className="fw-bold text-light">
            <i className="bi bi-house-door"></i> PET SHOP
          </h2>
          <nav>
            <a href="mailto:petshop@gmail.com" className="btn btn-success">
              Contact →
            </a>
          </nav>
        </header>

        {/* About Section */}
        <div className="row align-items-center mt-4">
          <div className="col-md-6">
            <Image
              src={"/Pictures/HappyPet.png"}
              width={450}
              height={450}
              alt="Happy Pets"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 p-3 rounded-4" id="content">
            <p className="text-success fw-bold">ABOUT US</p>
            <h2 className="fw-bold text-light">WE KEEP YOUR PETS HAPPY ALL TIME</h2>
            <p className="text-light">
              Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet
              no labore lorem sit clita duo justo magna dolore.
            </p >
            <div className="bg-light p-3 rounded-4 text-dark">
              <div className="d-flex">
                <button className="btn btn-success me-3">OUR MISSION</button>
                <button className="btn btn-light text-dark">OUR VISION</button>
              </div>
              <p className="mt-3">
                Our vision is to become the most trusted pet care provider in
                the region, offering services that cater to the needs of every
                pet, from puppies to elderly companions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="NavDiv py-2 BotomSide">
        <div className="container mt-5 p-4 rounded-4 NavDiv">
          {/* Section Title */}
          <p className="text-success fw-bold">SERVICES</p>
          <h2 className="fw-bold">OUR EXCELLENT PET CARE SERVICES</h2>

          {/* Services Grid */}
          <div className="row mt-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 mb-4 text-dark">
                <div className="d-flex align-items-center p-3 shadow-sm rounded bg-light">
                  <div className="fs-1 text-success me-3">{service.icon}</div>
                  <div>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="mb-2">{service.description}</p>
                    <a
                      href="#"
                      className="text-success fw-bold text-decoration-none"
                    >
                      READ MORE →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <Footer text={textC.textLight}></Footer> */}
      </div>
    </div>
  );
}
