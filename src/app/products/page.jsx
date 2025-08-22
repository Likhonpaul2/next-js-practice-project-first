"use client"

import React, { useEffect, useState } from 'react'
import { products } from '../actions/products/products'
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await products();
            console.log('Fetched products:', result); // Debug log
            setProduct(result || []);
        };
        fetchProducts();
    }, []);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {/* Render your products here */}
            {product.length === 0 && <p>No products found.</p>}
            {product.map((item, idx) => (
                <div key={idx}>
                    <div className="card bg-base-100 w-full shadow-sm">
                        <figure className="relative w-full h-48">
                            <Image
                                src={item.image || "/placeholder.png"}
                                alt={item.name || "Product"}
                                fill // makes the image fill the parent div
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={idx < 2} // optionally prioritize first images
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name || "Card Title"}</h2>
                            <p>{item.description || "No description."}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/products/${item._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsPage


