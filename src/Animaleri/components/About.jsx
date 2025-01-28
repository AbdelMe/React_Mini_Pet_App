import React from "react";

export default function AboutPage(){
  return (
    <div className="container py-5">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="display-4 text-success">About Us</h1>
        <p className="lead text-muted">
          Learn more about our mission and values
        </p>
      </header>

      {/* About Section */}
      <section className="row align-items-center">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/600x400"
            alt="About Image"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6 content">
          <h2 className="fw-bold text-dark mb-3 text-light" >Who We Are</h2>
          <p className="text-light">
            We are a passionate team dedicated to making pets and their
            owners' lives better. Our services aim to meet all the needs of
            your pets, from feeding and grooming to boarding and training.
          </p>
          <p className="text-light ">
            We believe in providing the best care, making sure your pet is
            happy, healthy, and safe. Whether it's a short stay or a lifelong
            commitment, we are here to help.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mt-5 text-center">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm border-success">
              <div className="card-body">
                <h5 className="card-title text-success">Our Mission</h5>
                <p className="card-text text-dark">
                  Our mission is to ensure that every pet receives the highest
                  quality of care and attention. We aim to provide peace of mind
                  to pet owners and create a safe, loving environment for pets.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm border-primary">
              <div className="card-body">
                <h5 className="card-title text-primary">Our Vision</h5>
                <p className="card-text text-dark">
                  Our vision is to become the most trusted pet care provider in
                  the region, offering services that cater to the needs of every
                  pet, from puppies to elderly companions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-5 text-center">
        <h3 className="text-dark mb-3">Get In Touch</h3>
        <p className="text-muted mb-4">
          Feel free to contact us for any inquiries, suggestions, or
          collaborations.
        </p>
        <a href="mailto:contact@petshop.com" className="btn btn-success btn-lg">
          Contact Us
        </a>
      </section>
    </div>
  );
};

