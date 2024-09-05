import hero from "../../public/hero.png";
import Post from "../../../components/Post";
export default function Home() {
  const posts = [
    {
      title: "React vs Next: Which One to Prefer?",
      avatar:"https://i.pravatar.cc/150?img=1",
      category: "technology",
      content:
        "We are getting newer frameworks. But the most used of them are React and Next...",
      author: "Alexander Thomas",
      date: "August 20, 2024",
      imageUrl: "https://picsum.photos/id/1/400/300?grayscale",
    },
    {
      title: "The Future of Web Development with AI",
      avatar:"https://i.pravatar.cc/150?img=2",
      category: "Development",
      content:
        "Artificial intelligence is revolutionizing the way we build websites and applications...",
      author: "Sarah Johnson",
      date: "August 18, 2024",
      imageUrl: "https://picsum.photos/id/2/400/300?grayscale",
    },
    {
      title: "Understanding TypeScript: A Beginner’s Guide",
      avatar:"https://i.pravatar.cc/150?img=3",
      category: "React",
      content:
        "TypeScript is becoming essential for modern web applications. Learn why and how to start...",
      author: "David Smith",
      date: "August 10, 2024",
      imageUrl: "https://picsum.photos/id/3/400/300?grayscale",
    },
    {
      title: "Tailwind CSS: A Complete Guide",
      avatar:"https://i.pravatar.cc/150?img=4",
      category: "Next",
      content:
        "Tailwind CSS has taken the design world by storm. Here's a complete guide to getting started...",
      author: "Olivia Martin",
      date: "August 5, 2024",
      imageUrl: "https://picsum.photos/id/4/400/300?grayscale",
    },
    {
      title: "Exploring the Benefits of Serverless Architecture",
      avatar:"https://i.pravatar.cc/150?img=5",
      category: "technology",
      content:
        "Serverless architecture has become a buzzword in tech. But what are its real benefits?",
      author: "Michael Clark",
      date: "July 25, 2024",
      imageUrl: "https://picsum.photos/id/5/400/300?grayscale",
    },
    {
      title: "Top JavaScript Frameworks to Learn in 2024",
      avatar:"https://i.pravatar.cc/150?img=6",
      category: "React",
      content:
        "From React to Vue.js, explore the top JavaScript frameworks that you should learn this year...",
      author: "Emily Wilson",
      date: "July 20, 2024",
      imageUrl: "https://picsum.photos/id/6/400/300?grayscale",
    },
    {
      title: "How to Build Scalable Web Apps with Next.js",
      avatar:"https://i.pravatar.cc/150?img=7",
      category: "technology",
      content:
        "Next.js offers a powerful framework to build scalable, performant web apps. Here's how...",
      author: "Chris Evans",
      date: "July 18, 2024",
      imageUrl: "https://picsum.photos/id/7/400/300?grayscale",
    },
    {
      title: "Demystifying APIs: A Guide for Beginners",
      avatar:"https://i.pravatar.cc/150?img=8",
      category: "Android Development",
      content:
        "APIs power modern applications, but what exactly are they? This beginner's guide explains...",
      author: "Amanda Turner",
      date: "July 15, 2024",
      imageUrl: "https://picsum.photos/id/8/400/300?grayscale",
    },
    {
      title: "Building Modern Web Apps with GraphQL",
      avatar:"https://i.pravatar.cc/150?img=9",
      category: "Web Development",
      content:
        "GraphQL is transforming the way data is fetched in web apps. Learn how to get started...",
      author: "Robert Brown",
      date: "July 10, 2024",
      imageUrl: "https://picsum.photos/id/9/400/300?grayscale",
    },
    {
      title: "The Role of Cloud Computing in Future Tech",
      avatar:"https://i.pravatar.cc/150?img=10",
      category: "technology",
      content:
        "Cloud computing continues to evolve, playing a crucial role in the future of technology...",
      author: "Sophia Green",
      date: "July 5, 2024",
      imageUrl: "https://picsum.photos/id/10/400/300?grayscale",
    },
  ];
  return (
    <>
      <div
        className="hero min-h-screen rounded-xl overflow-hidden max-w-[100%]"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Dev Digest</h1>

            <p className="mb-5">
              " Insights, Tutorials, and the Latest in Development Trends
              Delivered Straight to You."
            </p>
            <p className="mb-5">
              "Share Your Knowledge, Discover Fresh Insights, and Connect with
              Fellow Developers. Sign Up and Start Posting Today!"
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
            <p>
              we are getting newer framework. But the most used of them are the
              react and next....
            </p>
            <div className="card-actions justify-end"></div>
            <div className="avatar items-center">
              <div className="w-8 rounded mr-2">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
              <p className="text-xs opacity-50">
                Alexander thmas<span className="ml-2">August 20, 2024</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40">
        <h2 className="text-3xl mb-16 text-start font-bold">Latest Post</h2>

        <div className="flex flex-wrap ">
          {posts.map((post, index) => (
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
          ))}
        </div>
      </div>
      <div className="justify-center flex mt-16 mb-16">
        <button className="btn ">View More</button>
      </div>
    </>
  );
}
