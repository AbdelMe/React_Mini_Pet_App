/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function notFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
    <Image
      src={'/Pictures/Error404.png'}
      alt="404 Not Found"
      className="img-fluid"
      style={{ maxWidth: '600px' }}
      width={500}
      height={500}
    />
    <h2 className="mt-3 text-danger">Oops! Page Not Found</h2>
    <p className="text-muted">The page you're looking for doesn't exist or has been moved.</p>
    <Link href="/HomePage" className="btn btn-primary mt-3">
      Go Home
    </Link>
  </div>
  )
}
