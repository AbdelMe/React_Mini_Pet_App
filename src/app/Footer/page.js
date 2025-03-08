/* eslint-disable jsx-a11y/anchor-is-valid */
"use client"
import React, { createContext } from "react";
import Linkedin from '../../../public/assets/Icons/linkedin.png'
import Face from '../../../public/assets/Icons/facebook.png'
import Insta from '../../../public/assets/Icons/instagram.png'
import Teleg from '../../../public/assets/Icons/telegram.png'
import Twitt from '../../../public/assets/Icons/twitter.png'
import Image from "next/image";

export const textColor = createContext({
  textLight:'text-light',
  textDark:'text-dark'
})
//
export default function Footer({text}) {
  return (
    <>
      {/* Footer */}
      <footer className={`text-dark mt-4 ${text}`} >
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 Pet Shop. All Rights Reserved.</p>
          <p>Follow us on social media:</p>
          <div className="">
            <a href="https://www.facebook.com/DevMind1" className="text-light me-3">
            <img src={Face} width={35} alt="" />
            </a>
            <a href="https://www.instagram.com/abdelmedia1/" className="text-light me-3">
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
