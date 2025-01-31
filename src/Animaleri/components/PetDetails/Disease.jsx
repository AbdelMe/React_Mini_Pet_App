import React from "react";
import Sidebar from "../PetDetailsComponent";

export default function Disease() {
  return (
    <div>
      <Sidebar>
        <h1 className="text-light p-0">Some Pet Disease and Her Treatment</h1>
        <div className="row mb-3 d-flex align-items-center">
          <label htmlFor="petType" className="col-sm-3  text-light fs-5">
            Select Pet Disease:
          </label>
          <div className="col-sm-3">
            <select className="form-select" id="petType">
              <option selected>Select a pet type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
            </select>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
