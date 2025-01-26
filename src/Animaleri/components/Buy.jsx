import React from 'react'
import Sidebar from '../Home'

export default function Buy() {
  return (
    <>

    <Sidebar>

    <h1 className="text-light">Buy a Pet</h1>
        {/* <div className="container mb-5 d-flex justify-content-center">
          <form
            className="input-group"
            style={{ maxWidth: "600px", width: "100%" }}
          >
            <input
              type="text"
              id="searchInput"
              className="form-control"
              placeholder="Search for a pet by name, type, or breed..."
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div> */}
        <div className="d-flex justify-content-evenly">
          <div className="card rounded-4 bg-black text-light" style={{ width: "14rem" }}>
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

          <div className="card rounded-4 bg-black text-light" style={{ width: "16rem" }}>
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

          <div className="card rounded-4 bg-black text-light" style={{ width: "16rem" }}>
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

          <div className="card rounded-4 bg-black text-light" style={{ width: "16rem" }}>
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
  )
}
