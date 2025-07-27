"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
  const router = useRouter();
  const isLoggedIn = true;

  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  }
  return (
    <div className='space-y-5'>
      <p className='text-3xl'>About Page</p>
      <Link href="/about/address" className='bg-white p-2 text-black rounded-2xl'>Address Page</Link>
      <br />
      <button type='button' onClick={handleNavigation} className='bg-amber-600 p-2 text-black rounded-2xl mt-5'>Address page</button>
    </div>
  )
}

export default About
