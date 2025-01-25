import React from "react";
import Sidebar from "../Home";


export default function Adopt() {
  return (
    <>
      <Sidebar>
      <h2 className="text-center mb-4 text-light">Adopt A Pet</h2>
      <form>
        {/* Pet Type Section */}
        <div className="row mb-3">
          <label htmlFor="petType" className="col-sm-4 col-form-label text-end text-light fs-5">
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
          <label htmlFor="petName" className="col-sm-4 col-form-label text-end text-light fs-5">
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
          <label htmlFor="petAge" className="col-sm-4 col-form-label text-end text-light fs-5">
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

        {/* Pet Breed Section */}
        <div className="row mb-3">
          <label htmlFor="petBreed" className="col-sm-4 col-form-label text-end text-light fs-5">
            Pet Breed:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="petBreed"
              placeholder="Enter the pet's breed"
              required
            />
          </div>
        </div>

        {/* Pet Description Section */}
        <div className="row mb-3">
          <label htmlFor="petDescription" className="col-sm-4 col-form-label text-end text-light fs-5">
            Pet Description:
          </label>
          <div className="col-sm-8">
            <textarea
              className="form-control"
              id="petDescription"
              rows="3"
              placeholder="Describe the pet's personality and background"
              required
            ></textarea>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="row mb-3">
          <label htmlFor="contactInfo" className="col-sm-4 col-form-label text-end text-light fs-5">
            Contact Information:
          </label>
          <div className="col-sm-8">
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
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary w-100">
              Submit Adoption Request
            </button>
          </div>
        </div>
      </form>
      </Sidebar>
      
    </>
  );
}
