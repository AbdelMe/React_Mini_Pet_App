/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createContext } from "react";
import Linkedin from '../../Icons/linkedin.png'
import Face from '../..//Icons/facebook.png'
import Insta from '../..//Icons/instagram.png'
import Teleg from '../..//Icons/telegram.png'
import Twitt from '../..//Icons/twitter.png'
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
      <footer className={`text-light mt-4 ${text}`} >
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 Pet Shop. All Rights Reserved.</p>
          <p>Follow us on social media:</p>
          <div>
            <a href="https://www.facebook.com/DevMind1" className="text-light me-3">
            <Image src={Face} width={35} alt="" />
            </a>
            <a href="https://www.instagram.com/abdelmedia1/" className="text-light me-3">
            <Image src={Insta} width={35} alt="" />
            </a>
            <a href="#" className="text-light me-3">
              <Image src={Linkedin} width={35} alt="" />
            </a>
            <a href="#" className="text-light me-3">
              <Image src={Teleg} width={35} alt="" />
            </a>
            <a href="#" className="text-light me-3">
              <Image src={Twitt} width={35} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
