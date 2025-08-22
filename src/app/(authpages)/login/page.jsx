import React from 'react';
import LoginForm from './components/LoginForm';
import Link from 'next/link';
import SocialLogin from './components/SocialLogin';

const LoginPage = () => {
    return (
        <div>
            <div className="hero  min-h-screen">
                    
                    <div className="card bg-base-100 w-full max-w-sm">
                        <h2 className='text-center text-4xl my-3'>Sign In</h2>
                        <div className="card-body">
                            <LoginForm/>
                            <div>Don't have an account? <Link href={"/register"} className="link link-hover text-primary">Sign Up</Link></div>

                            {/* <SocialLogin/> */}
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default LoginPage;