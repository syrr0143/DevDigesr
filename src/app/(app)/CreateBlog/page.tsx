import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>

            <div className="card bg-base-100 w-[50%] shadow-2xl mx-auto mt-8">
                <div className="card-body">
                    <h2 className="card-title mx-auto mb-8">Create Blog</h2>
                    <label className="input input-bordered flex items-center gap-2 w-[80%] mx-auto">
                        <input type="text" className="grow" placeholder="Blog Title" />

                    </label>
                    <label className="flex items-center gap-2 w-[80%] mx-auto">
                        <textarea className="w-[100%] textarea textarea-bordered" placeholder="Content"></textarea>

                    </label>
                    <input type="file" placeholder='upload profile picture' className="file-input file-input-bordered w-[80%] mx-auto" />
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary mt-4 pl-8 pr-8">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page


