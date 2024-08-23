import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>

            <div className="card bg-base-100 w-[50%] shadow-2xl mx-auto mt-8">
                <div className="card-body">
                    <h2 className="card-title mx-auto mb-8">SignUp to DevDigest</h2>
                    <label className="input input-bordered flex items-center gap-2 w-[80%] mx-auto">
                        <input type="text" className="grow" placeholder="Full name" />

                    </label>
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
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 w-[80%] mx-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Username" />
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
                        <input type="password" placeholder='password' className="grow" value="" />
                    </label>
                    <input type="file" placeholder='upload profile picture' className="file-input file-input-bordered w-[80%] mx-auto" />

                    <p className='mx-auto mt-4'>Have an account? <Link href={'signIn'} className='link link-primary link-hover'> SignIn</Link> </p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary mt-4 pl-8 pr-8">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page


