import React, { useState } from "react";
import Sidebar from "../PetDetailsComponent";
import { useSelector, useDispatch } from "react-redux";
import { AddToPet } from "../../ReduxToolkit/DataSlice";
import { motion } from "framer-motion";

// import { StrictMode } from "react";

export default function Adopt() {
  const data = useSelector((state) => state.Compt.DataBase.Pets);
  const [checkBtn, SetBtn] = useState(undefined);
  // const [Breakfast, SetBreakfast] = useState('');
  // const [Diner, SetDiner] = useState('');
  // const [Lanche, SetLanch] = useState('');

  const dispatch = useDispatch();

  const [PetInfo, SetPetInfo] = useState({
    type: "",
    name: "",
    age: "",
    pic: "",
    color: "",
    weight: "",
    // food_Time:{breakfast: Breakfast, diner: Diner, lanche: Lanche},
    contact: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(PetInfo);
    dispatch(AddToPet(PetInfo));
  };

  return (
    <>
      <Sidebar>
        <button className="btn btn-success" onClick={() => SetBtn(false)}>
          Adopt a pet
        </button>
        <button className="btn btn-primary mx-1" onClick={() => SetBtn(true)}>
          Donate a pet
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
                  <select
                    className="form-select"
                    id="petType"
                    onChange={(e) =>
                      SetPetInfo((prevInfo) => ({
                        ...prevInfo,
                        type: e.target.value,
                      }))
                    }
                  >
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
                    onChange={(e) =>
                      SetPetInfo((prevInfo) => ({
                        ...prevInfo,
                        name: e.target.value,
                      }))
                    }
                    // required
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
                    type="text"
                    className="form-control"
                    id="petAge"
                    placeholder="Enter the pet's age"
                    onChange={(e) =>
                      SetPetInfo((prevInfo) => ({
                        ...prevInfo,
                        age: e.target.value,
                      }))
                    }
                    // required
                  />
                </div>
              </div>

              {/* Pet Name Section */}
              <div className="row mb-3"></div>

              {/* Pet Description Section */}
              <div className="row mb-3 d-flex align-items-center">
                <label
                  htmlFor="petColor"
                  className="col-sm-4 col-form-label text-end text-light fs-5"
                >
                  Pet color:
                </label>
                <div className="col-sm-1">
                  <input
                    type="color"
                    className="form-control"
                    id="PetColor"
                    rows="3"
                    onChange={(e) =>
                      SetPetInfo((prevInfo) => ({
                        ...prevInfo,
                        color: e.target.value,
                      }))
                    }
                    // required
                  ></input>
                </div>

                <label
                  htmlFor="petColor"
                  className="col-sm-1 text-start text-light fs-5"
                >
                  Weight:
                </label>
                <div className="col-sm-2">
                  <input
                    type="text"
                    className="form-control "
                    id="PetColor"
                    placeholder="Weight"
                    rows="3"
                    onChange={(e) =>
                      SetPetInfo((prevInfo) => ({
                        ...prevInfo,
                        weight: e.target.value,
                      }))
                    }
                    // required
                  ></input>
                </div>

                <label
                  htmlFor="petName"
                  className="col-sm-1 text-start text-light fs-5"
                >
                  Picture:
                </label>
                <div className="col-sm-2 ">
                  <input
                    type="file"
                    className="form-control"
                    id="petName"
                    placeholder="Enter the pet's name"
                    onChange={(e) =>
                      SetPetInfo((prevInfo) => ({
                        ...prevInfo,
                        pic: e.target.value,
                      }))
                    }
                    // required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label
                  htmlFor="AdopterContact"
                  className="col-sm-4 col-form-label text-end text-light fs-5"
                >
                  Contact:
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="AdopterContact"
                    placeholder="Enter Your Contact Email, Phone..."
                    onChange={(e) =>
                      SetPetInfo((prevInfo) => ({
                        ...prevInfo,
                        contact: e.target.value,
                      }))
                    }
                    // required
                  />
                </div>
              </div>


              {/* Pet Breed Section */}
              {/* <div className="row mb-3 d-flex align-items-center">
                <label
                  htmlFor="petBreed"
                  className="col-sm-4 col-form-label text-end text-light fs-5"
                >
                  Food Time:
                </label>
                <div className="col-sm-2 d-flex justify-content-center align-items-center">
                  <span className="text-light fs-6 mx-2">Breakfast:</span>
                  <input type="time" className="form-control" id="petBreed" />
                </div>
                <div className="col-sm-2 d-flex justify-content-center align-items-center">
                  <span className="text-light fs-6 mx-2">Lanche:</span>
                  <input type="time" className="form-control" id="petBreed" />
                </div>
                <div className="col-sm-2 d-flex justify-content-center align-items-center">
                  <span className="text-light fs-6 mx-2">Diner:</span>
                  <input type="time" className="form-control" id="petBreed" />
                </div>
              </div> */}

              {/* Submit Button */}
              <div className="row mb-3">
                <div className="col-sm-10 m-auto">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    onClick={handleSubmit}
                  >
                    Submit Adoption Request
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : checkBtn === false ? (
          <>
            <motion.div className="d-flex justify-content-evenly flex-wrap mt-4" 
                                    initial={{scale:0}}
                                    animate={{scale:1}} transition={{duration:.4}}>
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
                        <button className="btn btn-warning w-100">
                          Adopt {}
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </motion.div>
          </>
        ) : (
          ""
        )}
      </Sidebar>
    </>
  );
}
