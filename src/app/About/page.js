/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext } from "react";
// import aboutPic from '../../Pictures/aboutPic.png'
// import Footer from "./Footer";
// import { textColor } from "./Footer";
import Nav from "../components/Nav";
import Image from "next/image";

export default function AboutPage(){
  // const textC = useContext(textColor)
  //consol.log(textC)
  return (
    <>
    <Nav></Nav>
      <div className="container py-5">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="display-4 text-success">About Us</h1>
        <p className="lead text-light">
          Learn more about our mission and values
        </p>
      </header>

      {/* About Section */}
      <section className="row align-items-center">
        <div className="col-md-6">
          <Image
            src="/Pictures/aboutPic.png"
            alt="aboutPic"
            width={450}
            height={450}
            style={{position: "absolute" , bottom:"20px"}}
          />
        </div>
        <div className="col-md-6 content rounded-4 p-3" id="content">
          <h2 className="fw-bold mb-3 text-light" >Who We Are</h2>
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
            <div className="card rounded-4">
              <div className="card-body NavDiv rounded-4">
                <h5 className="card-title text-success">Our Mission</h5>
                <p className="card-text text-light">
                  Our mission is to ensure that every pet receives the highest
                  quality of care and attention. We aim to provide peace of mind
                  to pet owners and create a safe, loving environment for pets.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card rounded-4">
              <div className="card-body NavDiv rounded-4">
                <h5 className="card-title text-primary">Our Vision</h5>
                <p className="card-text text-light">
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
      <section className="mt-5 text-center NavDiv rounded-4 p-2">
        <h3 className=" text-light mb-3">Get In Touch</h3>
        <p className=" text-light mb-4">
          Feel free to contact us for any inquiries, suggestions, or
          collaborations.
        </p>
        <a href="mailto:contact@petshop.com" className="btn btn-success btn-lg">
          Contact Us
        </a>
      </section>
      {/* <Footer text={textC.textDark}></Footer> */}
    </div>
    </>
  );
};


