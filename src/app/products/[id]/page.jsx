"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import Image from 'next/image'
import { productsDetails } from '@/app/actions/products/productDetails'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return
      const result = await productsDetails({ id })
      setProduct(result)
    }
    fetchProduct()
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="card bg-base-100 shadow-md">
        <figure className="relative w-full h-64">
          <Image
            src={product.image || "/placeholder.png"}
            alt={product.name || "Product"}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <div className="mt-4">
            <span className="font-bold text-lg">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
