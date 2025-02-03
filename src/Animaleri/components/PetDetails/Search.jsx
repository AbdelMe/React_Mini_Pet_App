import React, { useState } from "react";
import Sidebar from "../PetDetailsComponent";
import { useSelector } from "react-redux";

export default function Search() {
  const data = useSelector((state) => state.Compt.DataBase.Pets);
  const [SearchVal, SetSearchVal] = useState("");
  // const [Dt,SetDt] = useState([...data])

  const FiltredData = data.filter((p) =>
    p.type.toLocaleLowerCase().includes(SearchVal.toLocaleLowerCase()) || 
    p.name.toLocaleLowerCase().includes(SearchVal.toLocaleLowerCase())
  );

  // const handleClick = ()=>{
  //   const newData = data.filter(e => SearchVal === "" ? Dt : e.type.toLocaleLowerCase().includes(SearchVal.toLocaleLowerCase()))
  //   SetDt(newData)
  // }

  return (
    <>
      <Sidebar>
        <h1 className="text-light">Find Your Pet</h1>
        <div className="container col-sm-6">
          {/* Search Input */}
          <input
            type="text"
            id="searchInput"
            className="form-control text-start"
            placeholder="Search for a pet by name, type..."
            aria-label="Search"
            onChange={(e) => SetSearchVal(e.target.value)}
          />
          {/* Search Button */}
          {/*<button className="btn btn-primary" >Search</button>*/} {/*onClick={handleClick} //if button clicked*/}
        </div>

        <div
          className={`d-flex mt-4 ${
            FiltredData.length >= 4
              ? "justify-content-center"
              : "justify-content-start"
          }`}
        >
          {FiltredData.map((pet) => {
            return (
              <>
                <div
                  className="card rounded-4 bg-black text-light mx-3"
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
                    <button className="btn btn-success w-100">
                      Available{" "}
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
