import React, { useState } from "react";
import Sidebar from "../../Home";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, AddToFavourit } from "../../ReduxToolkit/DataSlice";
import { Modal, Button, Form } from "react-bootstrap";
import pic from "../../Icons/shopping-bag.png";
import fav from "../../Icons/favorites.png";

export default function Buy() {
  const data = useSelector((state) => state.Compt.DataBase.Pets);
  const dispatch = useDispatch();

  // State to handle modal visibility and selected pet
  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleShowModal = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPet(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buyer Info:", buyerInfo);
    handleCloseModal();
  };

  //AddToCart
  const AddToCa = (id) => {
    const pet = data.find((p) => {
      return p.id === id;
    });
    // alert("Hi Im Pet With id: "+ id);
    dispatch(AddToCart(pet));
  };

  //AddToFavourit
  const AddToFav = (id) => {
    const pet = data.find((p) => {
      return p.id === id;
    });
    dispatch(AddToFavourit(pet));
  };

  return (
    <>
      <Sidebar>
        <h1 className="text-light">Buy a Pet</h1>
        <div className="d-flex justify-content-center mt-4">
          {data.map((pet) => {
            return (
              <div
                key={pet.id}
                className="card rounded-4 bg-black text-light mx-3"
                style={{ width: "14rem" }}
              >
                <img
                  src={pic}
                  style={{
                    width: "30px",
                    position: "absolute",
                    cursor: "pointer",
                    top: "10px",
                    left: "20px",
                  }}
                  alt=""
                  id="AddToCart"
                  onClick={() => AddToCa(pet.id)}
                />
                <img
                  src={fav}
                  style={{
                    width: "28px",
                    position: "absolute",
                    cursor: "pointer",
                    top: "50px",
                    left: "20px",
                  }}
                  alt=""
                  onClick={() => AddToFav(pet.id)}
                />
                {/* Pet Image */}
                <img
                  src={pet.pic}
                  alt={pet.name}
                  className="card-img-top rounded-top-4"
                  style={{ height: "10rem", objectFit: "cover" }}
                />
                {/* Card Body */}
                <div className="card-body">
                  <h5 className="card-title text-primary">{pet.name}</h5>
                  <p className="card-text">
                    <strong>Type: </strong> {pet.type}
                  </p>
                  <p className="card-text">
                    <strong>Age: </strong> {pet.age}
                  </p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleShowModal(pet)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Sidebar>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title>Buy {selectedPet ? selectedPet.name : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="buyerName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={buyerInfo.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="buyerEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={buyerInfo.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="buyerPhone" className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="phone"
                value={buyerInfo.phone}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="buyerAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="address"
                value={buyerInfo.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Confirm Purchase
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
