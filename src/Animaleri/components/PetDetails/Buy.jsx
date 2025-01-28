import React, { useState } from "react";
import Sidebar from "../../Home";
import { useSelector } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";

export default function Buy() {
  const data = useSelector((state) => state.Compt.DataBase.Pets);
  
  // State to handle modal visibility and selected pet
  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
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
    // You can handle form submission here, like sending buyer info to a server or saving it in the store
    console.log("Buyer Info:", buyerInfo);
    handleCloseModal();
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
          <Modal.Title>Buy {selectedPet ? selectedPet.name : ''}</Modal.Title>
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
