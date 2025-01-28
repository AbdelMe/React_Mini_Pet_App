import React from "react";
import HappyPet from "../Pictures/8326656.png";
import Footer from "./Footer";

export default function Home1() {
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
      <div className="container mt-5">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center pb-3">
          <h2 className="fw-bold">
            <i className="bi bi-house-door"></i> PET SHOP
          </h2>
          <nav>
            <a href="#" className="btn btn-success">
              Contact →
            </a>
          </nav>
        </header>

        {/* About Section */}
        <div className="row align-items-center mt-4">
          <div className="col-md-6">
            <img
              src={HappyPet}
              width={300}
              alt="Happy Pets"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <p className="text-success fw-bold">ABOUT US</p>
            <h2 className="fw-bold">WE KEEP YOUR PETS HAPPY ALL TIME</h2>
            <p>
              Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet
              no labore lorem sit clita duo justo magna dolore.
            </p>
            <div className="bg-light p-3 rounded text-dark">
              <div className="d-flex">
                <button className="btn btn-success me-3">OUR MISSION</button>
                <button className="btn btn-light text-dark">OUR VISION</button>
              </div>
              <p className="mt-3">
                Tempor erat elitr at rebum at clita aliquam consectetur. Diam
                dolor diam ipsum et, tempor voluptua sit consectetur sit.
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
        <Footer></Footer>
      </div>
    </div>
  );
}
