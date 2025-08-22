import Link from 'next/link'
import React from 'react'
import RegisterForm from './components/RegisterForm'
import LoginForm from '../login/components/LoginForm'

const RegisterPage = () => {
    return (
        <div>
            <div className="hero  min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm">
                    <h2 className='text-center text-4xl my-3'>Sign Up</h2>
                    <div className="card-body">
                        <RegisterForm/>
                        {/* <LoginForm/> */}
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default RegisterPage
