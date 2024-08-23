import hero from "../../public/hero.png";
import Post from "../../../components/Post";
export default function Home() {
    return (
        <>
            <div
                className="hero min-h-screen rounded-xl overflow-hidden max-w-[100%]"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-full">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Dev Digest</h1>


                        <p className="mb-5">
                            "
                            Insights, Tutorials, and the Latest in Development Trends Delivered Straight to You."
                        </p>
                        <p className="mb-5">
                            "Share Your Knowledge, Discover Fresh Insights, and Connect with Fellow Developers. Sign Up and Start Posting Today!"
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl hidden lg:block absolute top-[100vh] left-[10vw] w-[75vw] md:w-[60vw] lg:w-[40vw]">
                    <div className="indicator absolute left-[100%]">
                        <span className="indicator-item badge badge-primary">new</span>
                    </div>
                    <div className="card-body m-0">
                        <h2 className="card-title">React vs Next: Which one to prefer?</h2>
                        <p>we are getting newer framework. But the most used of them are the react and next....</p>
                        <div className="card-actions justify-end">
                        </div>
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
            </div>

            <div className="mt-40">
                <h2 className="text-3xl mb-16 text-start font-bold">
                    Latest Post
                </h2>
                <div className="flex flex-wrap ">
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Post />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Post />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Post />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Post />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Post />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Post />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Post />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Post />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Post />
                    </div>
                </div>


            </div>
            <div className="justify-center flex mt-16 mb-16">
                <button className="btn ">View More</button>
            </div>

        </>
    )
}
