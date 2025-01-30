/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createContext, useContext } from "react";
import Linkedin from '../Icons/linkedin.png'
import Face from '../Icons/facebook.png'
import Insta from '../Icons/instagram.png'
import Teleg from '../Icons/telegram.png'
import Twitt from '../Icons/twitter.png'

export const textColor = createContext({
  textLight:'text-light',
  textDark:'text-dark'
})
//
export default function Footer({text}) {
  return (
    <>
      {/* Footer */}
      <footer className={`text-light mt-4 ${text}`} >
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 Pet Shop. All Rights Reserved.</p>
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
