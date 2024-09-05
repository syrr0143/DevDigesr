import Post from '@/components/Post'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
     const posts = [
       {
         title: "React vs Next: Which One to Prefer?",
         avatar: "https://i.pravatar.cc/150?img=1",
         category: "technology",
         content:
           "We are getting newer frameworks. But the most used of them are React and Next...",
         author: "Alexander Thomas",
         date: "August 20, 2024",
         imageUrl: "https://picsum.photos/id/1/400/300?grayscale",
       },
       {
         title: "The Future of Web Development with AI",
         avatar: "https://i.pravatar.cc/150?img=2",
         category: "Development",
         content:
           "Artificial intelligence is revolutionizing the way we build websites and applications...",
         author: "Sarah Johnson",
         date: "August 18, 2024",
         imageUrl: "https://picsum.photos/id/2/400/300?grayscale",
       },
       {
         title: "Understanding TypeScript: A Beginner’s Guide",
         avatar: "https://i.pravatar.cc/150?img=3",
         category: "React",
         content:
           "TypeScript is becoming essential for modern web applications. Learn why and how to start...",
         author: "David Smith",
         date: "August 10, 2024",
         imageUrl: "https://picsum.photos/id/3/400/300?grayscale",
       },
       {
         title: "Tailwind CSS: A Complete Guide",
         avatar: "https://i.pravatar.cc/150?img=4",
         category: "Next",
         content:
           "Tailwind CSS has taken the design world by storm. Here's a complete guide to getting started...",
         author: "Olivia Martin",
         date: "August 5, 2024",
         imageUrl: "https://picsum.photos/id/4/400/300?grayscale",
       },
       {
         title: "Exploring the Benefits of Serverless Architecture",
         avatar: "https://i.pravatar.cc/150?img=5",
         category: "technology",
         content:
           "Serverless architecture has become a buzzword in tech. But what are its real benefits?",
         author: "Michael Clark",
         date: "July 25, 2024",
         imageUrl: "https://picsum.photos/id/5/400/300?grayscale",
       },
       {
         title: "Top JavaScript Frameworks to Learn in 2024",
         avatar: "https://i.pravatar.cc/150?img=6",
         category: "React",
         content:
           "From React to Vue.js, explore the top JavaScript frameworks that you should learn this year...",
         author: "Emily Wilson",
         date: "July 20, 2024",
         imageUrl: "https://picsum.photos/id/6/400/300?grayscale",
       },
       {
         title: "How to Build Scalable Web Apps with Next.js",
         avatar: "https://i.pravatar.cc/150?img=7",
         category: "technology",
         content:
           "Next.js offers a powerful framework to build scalable, performant web apps. Here's how...",
         author: "Chris Evans",
         date: "July 18, 2024",
         imageUrl: "https://picsum.photos/id/7/400/300?grayscale",
       },
       {
         title: "Demystifying APIs: A Guide for Beginners",
         avatar: "https://i.pravatar.cc/150?img=8",
         category: "Android Development",
         content:
           "APIs power modern applications, but what exactly are they? This beginner's guide explains...",
         author: "Amanda Turner",
         date: "July 15, 2024",
         imageUrl: "https://picsum.photos/id/8/400/300?grayscale",
       },
       {
         title: "Building Modern Web Apps with GraphQL",
         avatar: "https://i.pravatar.cc/150?img=9",
         category: "Web Development",
         content:
           "GraphQL is transforming the way data is fetched in web apps. Learn how to get started...",
         author: "Robert Brown",
         date: "July 10, 2024",
         imageUrl: "https://picsum.photos/id/9/400/300?grayscale",
       },
       {
         title: "The Role of Cloud Computing in Future Tech",
         avatar: "https://i.pravatar.cc/150?img=10",
         category: "technology",
         content:
           "Cloud computing continues to evolve, playing a crucial role in the future of technology...",
         author: "Sophia Green",
         date: "July 5, 2024",
         imageUrl: "https://picsum.photos/id/10/400/300?grayscale",
       },
     ];
    return (
        <div className='user_details'>
            <div className="hero bg-base-200 min-h-fit rounded-xl">
                <div className="hero-content flex-col lg:flex-row gap-24">
                    <Image
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Descriptive text for the image"
                        className="max-w-sm rounded-lg shadow-2xl "
                        width={200} // Adjust the width according to your design
                        height={200} // Adjust the height according to your design
                    />
                    <div>
                        <h1 className="text-5xl font-bold mb-2">Sumit yadav</h1>
                        <p className="text-xs opacity-50  font-bold">since 22 aug 2000</p>
                        <p className="text-xs opacity-50 font-bold">21 Blogs</p>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className='flex flex-col justify-between items-center'>
                            <button className="btn bg-orange-500 mb-4">Buy A coffee</button>
                            <div className="grid grid-flow-col gap-4">Connect to stay updated:
                                <Link href={'/'}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </Link >
                                <Link href={'/'}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current">
                                        <path
                                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                    </svg>
                                </Link >
                                <Link href={'/'}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="latest_post mt-16">
                <h2 className="text-3xl mb-16 text-start font-bold">
                    Latest Post
                </h2>
                <div className="flex flex-wrap ">
                    {posts.map((post, index) => 
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <Post
                title={post.title}
                content={post.content}
                author={post.author}
                date={post.date}
                imageUrl={post.imageUrl}
                      category={post.category}
                      avatar={post.avatar}
              />
                        </div>
                    )}
                   
                </div>


            </div>
            <div className="justify-center flex mt-16 mb-16">
                <button className="btn ">View More</button>
            </div>
        </div>
    )
}

export default Page
