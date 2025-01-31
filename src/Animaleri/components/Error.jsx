import React from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <img
        src={require('../Pictures/error404.png')}
        alt="404 Not Found"
        className="img-fluid"
        style={{ maxWidth: '600px' }}
      />
      <h2 className="mt-3 text-danger">Oops! Page Not Found</h2>
      <p className="text-muted">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Home 🏠
      </Link>
    </div>
  );
}
