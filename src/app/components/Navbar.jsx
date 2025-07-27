"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    if (!pathname.includes("dashboard")) {
        return (
            <div className='bg-amber-500 py-6 text-black font-bold'>
                <nav className='flex justify-center'>
                    <ul className='flex justify-between w-1/2'>
                        <Link href="/" className='px-4 py-2 bg-amber-700 rounded hover:bg-black hover:text-white duration-300'>
                            <li>Home</li>
                        </Link>
                        <Link href="/about" className='px-4 py-2 bg-amber-700 rounded hover:bg-black hover:text-white duration-300'>
                            <li>About</li>
                        </Link>
                        <Link href="/services" className='px-4 py-2 bg-amber-700 rounded hover:bg-black hover:text-white duration-300'>
                            <li>Services</li>
                        </Link>
                        <Link href="/dashboard" className='px-4 py-2 bg-amber-700 rounded hover:bg-black hover:text-white duration-300'>
                            <li>Dashboard</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        );
    }else{
        return <></>
    }

};

export default Navbar;