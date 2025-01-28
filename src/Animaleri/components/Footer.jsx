import React from "react";

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
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
