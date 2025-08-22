"use client"
import React, { useEffect } from 'react'
import { useSession, signIn } from "next-auth/react"

const AddProduct = () => {
    const { data: session, status } = useSession()

    useEffect(() => {
        if (status === "unauthenticated") {
            signIn() // Redirect to login
        }
    }, [status])

    if (status === "loading") return <div>Loading...</div>
    if (status === "unauthenticated") return null // Prevent flicker

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can use fetch or axios to send data to your backend
        alert('Product added!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
                <h2 className="text-center mb-6 text-indigo-900 font-bold text-2xl">
                    Add Product
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                        <div>
                            <div className="mb-4">
                                <label className="block mb-1 text-indigo-500 font-medium">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-3 py-2 rounded-lg border border-indigo-200 outline-none text-base transition-colors focus:border-indigo-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-indigo-500 font-medium">
                                    Brand
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    required
                                    className="w-full px-3 py-2 rounded-lg border border-indigo-200 outline-none text-base transition-colors focus:border-indigo-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-indigo-500 font-medium">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    required
                                    className="w-full px-3 py-2 rounded-lg border border-indigo-200 outline-none text-base transition-colors focus:border-indigo-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-indigo-500 font-medium">
                                    Image URL
                                </label>
                                <input
                                    type="url"
                                    name="image"
                                    required
                                    className="w-full px-3 py-2 rounded-lg border border-indigo-200 outline-none text-base transition-colors focus:border-indigo-400"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label className="block mb-1 text-indigo-500 font-medium">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    required
                                    min="0"
                                    step="0.01"
                                    className="w-full px-3 py-2 rounded-lg border border-indigo-200 outline-none text-base transition-colors focus:border-indigo-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-indigo-500 font-medium">
                                    Main Quantity
                                </label>
                                <input
                                    type="number"
                                    name="main_quantity"
                                    required
                                    min="0"
                                    step="1"
                                    className="w-full px-3 py-2 rounded-lg border border-indigo-200 outline-none text-base transition-colors focus:border-indigo-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-indigo-500 font-medium">
                                    Minimum Selling Quantity
                                </label>
                                <input
                                    type="number"
                                    name="minimum_selling_quantity"
                                    required
                                    min="1"
                                    step="1"
                                    className="w-full px-3 py-2 rounded-lg border border-indigo-200 outline-none text-base transition-colors focus:border-indigo-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-indigo-500 font-medium">
                                    Rating
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    min="0"
                                    max="5"
                                    step="0.1"
                                    className="w-full px-3 py-2 rounded-lg border border-indigo-200 outline-none text-base transition-colors focus:border-indigo-400"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 mt-4">
                        <label className="block mb-1 text-indigo-500 font-medium">
                            Description
                        </label>
                        <textarea
                            name="description"
                            required
                            rows={3}
                            className="w-full px-3 py-2 rounded-lg border border-indigo-200 outline-none text-base resize-vertical transition-colors focus:border-indigo-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-900 text-white font-semibold text-lg border-none cursor-pointer transition-colors hover:from-indigo-500 hover:to-indigo-800"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
