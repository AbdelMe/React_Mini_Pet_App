/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFromFav } from "@/ReduxToolkit/DataSlice";
import Image from "next/image";

export default function Favourite() {
  const data = useSelector((state) => state.Compt.DataBase.Favourite);
  const dispatch = useDispatch();

  const SupPet = (id) => {
    const petIndex = data.findIndex((p) => p.id === id);
    dispatch(DeleteFromFav(petIndex));
  };

  return (
    <div
      id="cart"
      className="card position-absolute top-100 end-0 mt-3 p-3 shadow-lg"
      style={{
        width: "450px",
        maxHeight: "75vh",
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      <div className="card-body">
        <h4 className="card-title text-center">❤ My Favourit Pet </h4>
        <table className="table table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>Picture</th>
              <th>Type</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pet, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={pet.pic}
                    alt={pet.name}
                    className="rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                    // width={40}
                    // height={40}
                  />
                </td>
                <td>{pet.type}</td>
                <td>{pet.name}</td>
                <td>{pet.price} DH</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => SupPet(pet.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h5 className="text-center my-3">
          <strong>Total:</strong>{" "}
          <span className="text-success">
            {data.reduce((Total, pet) => Total + parseInt(pet.price), 0)} DH
          </span>
        </h5>
        <div className="text-center">
          <button className="btn btn-success w-100">Checkout</button>
        </div>
      </div>
    </div>
  );
}
