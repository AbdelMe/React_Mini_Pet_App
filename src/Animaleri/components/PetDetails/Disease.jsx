import React, { useState } from "react";
import Sidebar from "../PetDetailsComponent";
import { useSelector } from "react-redux";

export default function Disease() {
  const data = useSelector((state) => state.Compt.DataBase.Pet_Disease);
  const [SearchType,SetSearchType] = useState('');
  const FiltredData = data.filter(e=> {return e.type === SearchType})

  

  return (
    <div>
      <Sidebar>
        <h1 className="text-light p-0">Some Pet Disease and Her Treatment</h1>
        <div className="row mb-3 d-flex align-items-center">
          <label htmlFor="petType" className="col-sm-3  text-light fs-5">
            Select Pet Disease:
          </label>
          <div className="col-sm-3">
            <select className="form-select" id="petType" onChange={e=>SetSearchType(e.target.value)}>
              <option value={SearchType}>Select a pet type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
            </select>
          </div>
        </div>
        <div className={`d-flex flex-wrap mt-4 ${FiltredData.length >= 4 ? "justify-content-center" : "justify-content-start"}`}>
              {FiltredData.length > 0 ? (
                FiltredData.map((pet) => {
                  return (
                    <>
                      <div
                        className="card rounded-4 bg-black text-light w-25 mx-1"
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
                            <strong>Disease Name: </strong> {pet.d_name}
                          </p>
                          <p className="card-text">
                            <strong>Treatment: </strong> {pet.treatment}
                          </p>
                          <button className="btn btn-warning w-100">
                            Show More
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })
              ) :(<h1 className="m-auto">No Data</h1>)}
            </div>
      </Sidebar>
    </div>
  );
}
