"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
    { id: 1, path: "/", pathName: "Home" },
    { id: 2, path: "/products", pathName: "Products" },
    { id: 3, path: "/dashboard/addproduct", pathName: "Add Product" },
]

const Navbar = () => {
    const { data: session, status } = useSession();

    const pathname = usePathname();
    if (!pathname.includes("dashboard")) {
        return (
            // <div className='bg-amber-500 py-6 text-black font-bold'>
            //     <nav className='flex justify-center'>
            //         <ul className='flex justify-between w-1/2'>
            //             <Link href="/" className='px-4 py-2 bg-amber-700 rounded hover:bg-black hover:text-white duration-300'>
            //                 <li>Home</li>
            //             </Link>
            //             <Link href="/about" className='px-4 py-2 bg-amber-700 rounded hover:bg-black hover:text-white duration-300'>
            //                 <li>About</li>
            //             </Link>
            //             <Link href="/services" className='px-4 py-2 bg-amber-700 rounded hover:bg-black hover:text-white duration-300'>
            //                 <li>Services</li>
            //             </Link>
            //             <Link href="/dashboard" className='px-4 py-2 bg-amber-700 rounded hover:bg-black hover:text-white duration-300'>
            //                 <li>Dashboard</li>
            //             </Link>
            //         </ul>
            //     </nav>
            // </div>

            <div className='w-full bg-base-100'>
                <div className='navbar container mx-auto '>
                    <div className="navbar-start">

                        {/* mobile dropdown  */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {
                                    navLinks.map((item) => (
                                        <li key={item.id}><Link href={item.path}>{item.pathName}</Link></li>
                                    ))
                                }

                            </ul>
                        </div>
                        {/* logo */}
                        <Link href={"/"} className="text-2xl font-extrabold">House Order</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navLinks.map((item) => (
                                    <li key={item.id}><Link href={item.path}>{item.pathName}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            status == "authenticated" ?
                                (
                                    <Link href={""} className="btn btn-primary">Logout</Link>
                                )
                                :
                                (
                                    <Link href={"/login"} className="btn btn-primary">Sign In</Link>
                                )
                        }
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>
    }

};

export default Navbar;