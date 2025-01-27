import React from "react";
import Sidebar from "../../Home";
import { useSelector } from "react-redux";

export default function Buy() {
  const data = useSelector((state) => state.Compt.DataBase.Pets);

  return (
    <>
      <Sidebar>
        <h1 className="text-light">Buy a Pet</h1>
        <div className="d-flex justify-content-evenly mt-4">
              {data.map((pet) => {
                return (
                  <>
                    <div
                      className="card rounded-4 bg-black text-light"
                      style={{ width: "14rem" }}
                    >
                      {/* Pet Image */}
                      <img
                        src={pet.pic}
                        alt=""
                        className="card-img-top rounded-top-4 "
                        style={{ height: "10rem", objectFit: "cover" }}
                      />
                      {/* Card Body */}
                      <div className="card-body">
                        <h5 className="card-title text-primary">{}</h5>
                        <p className="card-text">
                          <strong>Type: </strong> {pet.type}
                        </p>
                        <p className="card-text">
                          <strong>Name: </strong> {pet.name}
                        </p>
                        <p className="card-text">
                          <strong>Age: </strong> {pet.age}
                        </p>
                        <button className="btn btn-primary w-100">
                          Buy
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
      </Sidebar>
    </>
  );
}
