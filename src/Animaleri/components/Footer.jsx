import React from "react";
import Linkedin from '../Icons/linkedin.png'
import Face from '../Icons/facebook.png'
import Insta from '../Icons/instagram.png'
import Teleg from '../Icons/telegram.png'
import Twitt from '../Icons/twitter.png'

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="text-light">
        <div className="container text-center">
          <p>&copy; 2025 Pet Shop. All Rights Reserved.</p>
          <p>Follow us on social media:</p>
          <div>
            <a href="#" className="text-light me-3">
            <img src={Face} width={35} alt="" />
            </a>
            <a href="#" className="text-light me-3">
            <img src={Insta} width={35} alt="" />
            </a>
            <a href="#" className="text-light me-3">
              <img src={Linkedin} width={35} alt="" />
            </a>
            <a href="#" className="text-light me-3">
              <img src={Teleg} width={35} alt="" />
            </a>
            <a href="#" className="text-light me-3">
              <img src={Twitt} width={35} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
