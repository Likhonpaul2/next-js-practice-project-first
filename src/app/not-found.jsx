import Link from 'next/link'
import React from 'react'

export default function NotFoundPage404() {
  return (
    <div className='items-center justify-center'>
      <h1 className='text-red-600 text-8xl'>404 Not Found</h1>
      <br />
      <Link href="/" className="px-4 py-2 bg-amber-600 text-black rounded">Go Back To Home</Link>
    </div>
  )
}
