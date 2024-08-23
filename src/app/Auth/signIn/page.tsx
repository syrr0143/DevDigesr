"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, getSession } from 'next-auth/react';
import Toast from '@/components/Toast';
const Page = () => {
    const [showToast, setShowToast] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const router = useRouter();
    useEffect(() => {
        const checkAuth = async () => {
            const session = await getSession();
            // console.log('this is in sigin page to see google auth response',session)
            if (session) {
                // If logged in, redirect to homepage
                router.push('/');
            }
        };
        checkAuth();
    }, [router]);
    const handleSignIn = async (event: any) => {
        event.preventDefault();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
        await signIn('google', { callbackUrl: '/User/knjn' });
    };
    const handleSubmit = async (event: any) => {
        event.preventDefault();
    };
    return (
        <form className='flex justify-center  items-center h-[100vh]' onSubmit={handleSubmit}>
            <Toast show={showToast} title='Signing In' variant='success' message="Signing in please wait!" onClose={() => setShowToast(false)} />

            <div className="card bg-base-100 w-[50%] mx-auto  shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto mb-8">SignIn to DevDigest</h2>

                    <label className="input input-bordered flex items-center gap-2 w-[80%] mx-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="grow" placeholder="Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-[80%] mx-auto" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" placeholder='password' className="grow" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>

                    <p className='mx-auto mt-4'>Don't have an account? <Link href={'signUp'} className='link link-primary link-hover'> SignUp</Link> </p>
                    <div className="card-actions justify-center">
                        <button type='submit' className="btn btn-primary mt-4 pl-8 pr-8">SignIn</button>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <button className="flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <svg
                                className="h-6 w-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="800px"
                                height="800px"
                                viewBox="-0.5 0 48 48"
                                version="1.1"
                            >
                                <title>Google-color</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                        <g id="Google" transform="translate(401.000000, 860.000000)">
                                            <path
                                                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                                id="Fill-1"
                                                fill="#FBBC05"
                                            ></path>
                                            <path
                                                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                                id="Fill-2"
                                                fill="#EB4335"
                                            ></path>
                                            <path
                                                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                                id="Fill-3"
                                                fill="#34A853"
                                            ></path>
                                            <path
                                                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                                id="Fill-4"
                                                fill="#4285F4"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                            <span onClick={handleSignIn}>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Page