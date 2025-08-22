"use client"
import { registerUser } from '@/app/actions/auth/registerUser'
import Link from 'next/link'
import React from 'react'

const RegisterForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        await registerUser({name,email,password})
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">User Name</label>
                <input type="text" className="input" placeholder="Username" name="name" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />
                <button type='submit' className="btn btn-neutral mt-4">Register</button>

                <div>Already have an account? <Link href={"/login"} className="link link-hover text-primary">Sign In</Link></div>

            </form>
        </div>
    )
}

export default RegisterForm
