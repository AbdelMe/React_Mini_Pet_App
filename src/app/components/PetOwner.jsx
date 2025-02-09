import React from "react";
import PetOwn from "../../Pictures/profile-pic (2).png";
// import Footer from "./Footer";
import Nav from "./Nav";
import Image from "next/image";
export default function PetOwner() {
  const owner = {
    name: "Mohammed El Abdellaoui",
    email: "Medabdel@gmail.com",
    phone: "+212 644991166",
    location: "Fes, Maroc",
    image: "https://via.placeholder.com/150",
  };

  const pets = [
    {
      image: "../assets/PitPic/beautiful-pet-portrait-dog.jpg",
      name: "Buddy",
      type: "Dog",
      age: "3 Years",
      description: "A playful golden retriever.",
    },
    {
      image: "../assets/PitPic/cat.jpg",
      name: "Whiskers",
      type: "Cat",
      age: "2 Years",
      description: "A lazy but cute Persian cat.",
    },
  ];

  const adoptedPets = [
    { name: "Max", type: "Dog", adoptionDate: "12 Jan 2024" },
    { name: "Luna", type: "Rabbit", adoptionDate: "5 Dec 2023" },
  ];

  const servicesUsed = [
    { service: "Pet Grooming", date: "10 Jan 2024" },
    { service: "Veterinary Checkup", date: "15 Dec 2023" },
  ];
  return (
    <>
    <Nav></Nav>
      <div className="container mt-5">
        {/* Owner Profile */}
        <div className="card p-4 shadow-sm mb-4 content text-light">
          <div className="row align-items-center">
            <div className="col-md-3 text-center">
              <Image
                src={PetOwn}
                alt="Owner"
                className="rounded-circle img-fluid"
              />
            </div>
            <div className="col-md-9">
              <h2 className="fw-bold">{owner.name}</h2>
              <p>Email: {owner.email}</p>
              <p>Phone: {owner.phone}</p>
              <p>Location: {owner.location}</p>
            </div>
          </div>
        </div>

        {/* Owned Pets */}
        <h3 className="fw-bold mt-4">My Pets</h3>
        <div className="row">
          {pets.map((pet, index) => (
            <div key={index} className="col-md-6">
              <div className="card p-3 mb-3 shadow-sm d-flex flex-row align-items-center content text-light mt-2">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  className="rounded-circle img-fluid me-3"
                  width="80px"
                />
                <div>
                  <h5 className="fw-bold">
                    {pet.name} ({pet.type})
                  </h5>
                  <p>Age: {pet.age}</p>
                  <p>{pet.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="BotomSide">
        <div className="container">
          {/* Adopted Pets History */}
        <h3 className="fw-bold mt-0">Adopted Pets</h3>
        <ul className="list-group mb-4">
          {adoptedPets.map((pet, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center " /*{border-1 border-black}*/
            >
              {pet.name} ({pet.type})
              <span className="badge bg-success">{pet.adoptionDate}</span>
            </li>
          ))}
        </ul>

        {/* Services Used */}
        <h3 className="fw-bold mt-4">Services Used</h3>
        <ul className="list-group">
          {servicesUsed.map((service, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {service.service}
              <span className="badge bg-primary">{service.date}</span>
            </li>
          ))}
        </ul>
        </div>
      {/* <Footer></Footer> */}
      </div>
    </>
  );
}
