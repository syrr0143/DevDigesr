"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, getSession } from 'next-auth/react';
import Toast from '@/components/Toast';
import axios from 'axios'
import { toast } from '@/hooks/use-toast';
const Page = () => {
    const [showToast, setShowToast] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (!email || !password) {
            toast({
                title: 'Fields required',
                variant: 'default',
                description: 'All fields are required',
            })
            return;
        }
        setLoading(true);
        try {

            const response = await axios.post('/api/login', {
                email: email,
                password: password
            });
            if (response.status === 404) {
                toast({
                    title: 'Invalid Credentials',
                    variant: 'default',
                    description: 'User does not exist',
                })
            } else if (response.status === 404) {
                toast({
                    title: 'Invalid Credentials',
                    variant: 'default',
                    description: 'User does not exist',
                })
            }
            toast({
                title: 'Success',
                variant: 'default',
                description: 'User login success',
            })
            localStorage.setItem("token", response.data.token)
            router.push('/Subscriptions')

        } catch (error) {

            console.log('error login', error);
            toast({
                title: 'Invalid Credentials',
                variant: 'destructive',
                description: (error as Error).message,

            })
        } finally {
            setLoading(false);
        }
    };
    return (
        <form className='flex justify-center  items-center h-[100vh]' onSubmit={handleSubmit}>
            <Toast show={showToast} title='Signing In' variant='success' message="Signing in please wait!" onClose={() => setShowToast(false)} />

            <div className="card bg-base-100 w-[50%] mx-auto  shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto mb-8">SignIn to DevDigest</h2>

                    {/* <label className="input input-bordered flex items-center gap-2 w-[80%] mx-auto">
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
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="grow" placeholder="Username" />
                    </label> */}
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
                        <input type="email" autoComplete='true' disabled={loading} value={email} onChange={(e) => setEmail(e.target.value)} className="grow" placeholder="Email" />
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
                        <input type="password" disabled={loading} placeholder='password' className="grow" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>

                    <p className='mx-auto mt-4 font-semibold'>Don't have an account? <Link href={'signUp'} className='link link-primary link-hover'> SignUp</Link> </p>
                    <div className="card-actions justify-center">
                        <button disabled={loading} type='submit' className="btn btn-primary mt-4 pl-8 pr-8">{loading ? "Please wait... " : "SignIn"}</button>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default Page