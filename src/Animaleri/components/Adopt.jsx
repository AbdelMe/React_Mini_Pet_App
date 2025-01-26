import React, { useState } from "react";
import Sidebar from "../Home";
import { StrictMode } from "react";

export default function Adopt() {
  const [checkBtn, SetBtn] = useState();
  return (
    <>
      <Sidebar>
        <button className="btn btn-success" onClick={() => SetBtn(false)}>
          Adopt a pet
        </button>
        <button className="btn btn-primary mx-1" onClick={() => SetBtn(true)}>
          Tabaro3 a pet
        </button>
        {checkBtn ? (
          <>
            {/* <h2 className="text-center mb-4 text-light">Adopt A Pet</h2> */}
            <form className="mt-4">
              {/* Pet Type Section */}
              <div className="row mb-3">
                <label
                  htmlFor="petType"
                  className="col-sm-4 col-form-label text-end text-light fs-5"
                >
                  Pet Type:
                </label>
                <div className="col-sm-8">
                  <select className="form-select" id="petType">
                    <option selected>Select a pet type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="bird">Bird</option>
                  </select>
                </div>
              </div>

              {/* Pet Name Section */}
              <div className="row mb-3">
                <label
                  htmlFor="petName"
                  className="col-sm-4 col-form-label text-end text-light fs-5"
                >
                  Pet Name:
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="petName"
                    placeholder="Enter the pet's name"
                    required
                  />
                </div>
              </div>

              {/* Pet Age Section */}
              <div className="row mb-3">
                <label
                  htmlFor="petAge"
                  className="col-sm-4 col-form-label text-end text-light fs-5"
                >
                  Pet Age:
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="petAge"
                    placeholder="Enter the pet's age"
                    required
                  />
                </div>
              </div>

              {/* Pet Description Section */}
              <div className="row mb-3 d-flex align-items-center">
                <label
                  htmlFor="petColor"
                  className="col-sm-4 col-form-label text-end text-light fs-5"
                >
                  Pet color:
                </label>
                <div className="col-sm-3">
                  <input
                  type="color"
                    className="form-control"
                    id="PetColor"
                    rows="3"
                    required
                  ></input>
                </div>

                <label
                  htmlFor="petColor"
                  className="col-sm-2 col-form-label text-end text-light fs-5"
                >
                  Pet Weight:
                </label>
                <div className="col-sm-2">
                  <input
                  type="text"
                    className="form-control"
                    id="PetColor"
                    placeholder="Pet Weight"
                    rows="3"
                    required
                  ></input>
                </div>
              </div>


              {/* Pet Description Section */}
              <div className="row mb-3 d-flex align-items-center">

              </div>

              {/* Pet Breed Section */}
              <div className="row mb-3 d-flex align-items-center">
                <label
                  htmlFor="petBreed"
                  className="col-sm-4 col-form-label text-end text-light fs-5"
                >
                  Food Time:
                </label>
                <div className="col-sm-2 d-flex justify-content-center align-items-center">
                <span className="text-light fs-6 mx-2">Breakfast:</span>
                  <input
                    type="time"
                    className="form-control"
                    id="petBreed"
                    required
                  />
                </div>
                <div className="col-sm-2 d-flex justify-content-center align-items-center">
                <span className="text-light fs-6 mx-2">Lanche:</span>
                  <input
                    type="time"
                    className="form-control"
                    id="petBreed"
                    required
                  />
                </div>
                <div className="col-sm-2 d-flex justify-content-center align-items-center">
                <span className="text-light fs-6 mx-2">Diner:</span>
                  <input
                    type="time"
                    className="form-control"
                    id="petBreed"
                    required
                  />
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="row mb-3">
                <label
                  htmlFor="contactInfo"
                  className="col-sm-4 col-form-label text-end text-light fs-5"
                >
                  Contact Information:
                </label>
                <div className="col-sm-8 ">
                  <input
                    type="text"
                    className="form-control"
                    id="contactInfo"
                    placeholder="Enter your contact details (email/phone)"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="row mb-3">
                <div className="col-sm-10 m-auto">
                  <button type="submit" className="btn btn-primary w-100">
                    Submit Adoption Request
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          ""
        )}
      </Sidebar>
    </>
  );
}
