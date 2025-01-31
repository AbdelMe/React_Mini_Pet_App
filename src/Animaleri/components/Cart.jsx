import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFromCart } from "../ReduxToolkit/DataSlice";

export default function Cart() {
  const data = useSelector((state) => state.Compt.DataBase.Cart);
  const dispatch = useDispatch();

  // const Leave = ()=>{
  //     document.getElementById('cart').style.display = 'none'
  // }

  const SupPet = (id) => {
    const petIndex = data.findIndex((p) => p.id === id);
    dispatch(DeleteFromCart(petIndex));
  };

  const CartElement = () => {
    return data.map((pet) => {
      return (
        <>
          <tr>
            <td>{pet.pic}</td>
            <td>{pet.type}</td>
            <td>{pet.name}</td>
            <td>{pet.price}</td>
            <td>
              <button
                className="btn btn-danger my-2"
                onClick={() => SupPet(pet.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </>
      );
    });
  };

  return (
    <>
      <div
        id="cart"
        style={{
          position: "absolute",
          right: "-5px",
          top: "60px",
          width: "450px",
          maxHeight: "75vh",
          overflow: "auto",
          zIndex: "1",
        }}
        className="rounded-4 content text-center"
        // onMouseLeave={Leave}
      >
        <h2>My Cart</h2>
        <table border={1} className="container-fluid">
          <tr>
            <th>Picture</th>
            <th>Type</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {CartElement()}
        </table>
        <h4>
          Total Price:{" "}
          {data.reduce((Total, pet) => {
            return (Total += parseInt(pet.price));
          }, 0)}
          DH
        </h4>
        <button className="btn btn-success my-2">Check Out Items</button>
      </div>
    </>
  );
}
