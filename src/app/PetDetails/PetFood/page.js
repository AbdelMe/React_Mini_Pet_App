/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from "react";
import Sidebar from "../page";
import { useSelector } from "react-redux";

export default function Food() {
  const data = useSelector((state) => state.Compt.DataBase.Pet_Food);

  const [SearchType, SetSearchType] = useState();
  const FiltredData = data.filter(e => { return e.type === SearchType })

  return (
    <>
      <Sidebar>
        <h1>Proposed Food To your Pet </h1>
        <div className="row mb-3 d-flex align-items-center">
          <label htmlFor="petType" className="col-sm-2  text-light fs-5">
            Pet Type:
          </label>
          <div className="col-sm-4">
            <select className="form-select" id="petType" onChange={e => SetSearchType(e.target.value)}>
              <option selected>Select a pet type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
            </select>
          </div>
        </div>
        <div className={`d-flex mt-4 ${FiltredData.length >= 4 ? "justify-content-center" : "justify-content-start"}`}>
          {FiltredData.map((petf) => {
            return (
              <>
                <div
                  className="card rounded-4 bg-black text-light mx-3"
                  style={{ width: "14rem" }}
                >
                  {/* Pet Image */}
                  <img
                    src={petf.food_pic}
                    alt=""
                    className="card-img-top rounded-top-4"
                    style={{ height: "10rem", objectFit: "cover" }}
                  />
                  {/* Card Body */}
                  <div className="card-body">
                    <h5 className="card-title text-primary">{petf.food_title}</h5>
                    <p className="card-text">
                      <strong>Pet Type: </strong> {petf.type}
                    </p>
                    <p className="card-text">
                      <strong>Price: </strong> {petf.food_price}
                    </p>
                    <p className="card-text">
                      <strong>Quantity: </strong> {petf.food_weight}
                    </p>
                    <button
                      className="btn btn-primary w-100"
                    >
                      Order
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
