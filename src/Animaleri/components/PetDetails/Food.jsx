import React from "react";
import Sidebar from "../../Home";

export default function Food() {
  return (
    <>
      <Sidebar>
        <h1>Proposed Food To your Pet </h1>
        <div className="row mb-3 d-flex align-items-center">
          <label htmlFor="petType" className="col-sm-2  text-light fs-5">
            Pet Type:
          </label>
          <div className="col-sm-4">
            <select className="form-select" id="petType">
              <option selected>Select a pet type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
          <div
            className="card rounded-4 bg-black text-light"
            style={{ width: "14rem" }}
          >
            {/* Pet Image */}
            <img
              src="../assets/PitPic/cat.jpg"
              alt=""
              className="card-img-top rounded-top-4 "
              style={{ height: "10rem", objectFit: "cover" }}
            />
            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title text-primary">{}</h5>
              <p className="card-text">
                <strong>Type:</strong> {}
              </p>
              <p className="card-text">
                <strong>Age:</strong> old
              </p>
              <p className="card-text">
                <strong>Description:</strong>
              </p>
              <button className="btn btn-success w-100">Buy {}</button>
            </div>
          </div>

          <div
            className="card rounded-4 bg-black text-light"
            style={{ width: "16rem" }}
          >
            {/* Pet Image */}
            <img
              src="../assets/PitPic/dog.jpg"
              alt=""
              className="card-img-top rounded-top-4 "
              style={{ height: "10rem", objectFit: "cover" }}
            />
            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title text-primary">{}</h5>
              <p className="card-text">
                <strong>Type:</strong> {}
              </p>
              <p className="card-text">
                <strong>Age:</strong> old
              </p>
              <p className="card-text">
                <strong>Description:</strong>
              </p>
              <button className="btn btn-success w-100">Buy {}</button>
            </div>
          </div>

          <div
            className="card rounded-4 bg-black text-light"
            style={{ width: "16rem" }}
          >
            {/* Pet Image */}
            <img
              src="../assets/PitPic/rabbit.jpg"
              alt=""
              className="card-img-top rounded-top-4 "
              style={{ height: "10rem", objectFit: "cover" }}
            />
            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title text-primary">{}</h5>
              <p className="card-text">
                <strong>Type:</strong> {}
              </p>
              <p className="card-text">
                <strong>Age:</strong> old
              </p>
              <p className="card-text">
                <strong>Description:</strong>
              </p>
              <button className="btn btn-success w-100">Buy {}</button>
            </div>
          </div>

          <div
            className="card rounded-4 bg-black text-light"
            style={{ width: "16rem" }}
          >
            {/* Pet Image */}
            <img
              src="../assets/PitPic/bird.jpg"
              alt=""
              className="card-img-top rounded-top-4 "
              style={{ height: "10rem", objectFit: "cover" }}
            />
            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title text-primary">{}</h5>
              <p className="card-text">
                <strong>Type:</strong> {}
              </p>
              <p className="card-text">
                <strong>Age:</strong> old
              </p>
              <p className="card-text">
                <strong>Description:</strong>
              </p>
              <button className="btn btn-success w-100">Buy {}</button>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
