import React from 'react'

const Post = () => {
    return (
        <>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="badge badge-primary">Technology</div>
                    <h2 className="card-title">
                        Shoes!

                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="avatar items-center">
                        <div className="w-8 rounded mr-2">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Tailwind-CSS-Avatar-component" />
                        </div>
                        <p className="text-xs opacity-50">Alexander thmas<span className="ml-2">August 20, 2024</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
