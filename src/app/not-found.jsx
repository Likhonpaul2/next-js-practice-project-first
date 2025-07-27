import Link from 'next/link'
import React from 'react'

export default function NotFoundPage404() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link href="/" className="px-4 py-2 bg-amber-600 text-black rounded">Go Back To Home</Link>
    </div>
  )
}
