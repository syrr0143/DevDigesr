import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
      <div>
        <div className="card bg-base-100 w-[50%] shadow-2xl mx-auto mt-8">
          <div className="card-body">
            <h2 className="card-title mx-auto mb-8">Verify Code</h2>
            <label className="input input-bordered flex items-center gap-2 w-[80%] mx-auto">
              <input type="text" className="grow" placeholder="Enter otp  " />
            </label>

            <p className="mx-auto mt-4">
              Did&apos;nt received OTP yet?{" "}
              <Link href={"signUp"} className="link link-primary link-hover">
                {" "}
                SignUp
              </Link>{" "}
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary mt-4 pl-8 pr-8">SignUp</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Page


