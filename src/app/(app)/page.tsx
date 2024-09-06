"use client"
import React, { useState } from 'react'
import img1 from '../../../public/landing_page/1.webp'
import img2 from '../../../public/landing_page/2.webp'
import img3 from '../../../public/landing_page/3.webp'
import img4 from '../../../public/landing_page/4.webp'
import img5 from '../../../public/landing_page/5.webp'
import img6 from '../../../public/landing_page/6.webp'
import img7 from '../../../public/landing_page/7.webp'
import img8 from '../../../public/landing_page/8.webp'
import img9 from '../../../public/landing_page/9.webp'
import img10 from '../../../public/landing_page/10.webp'
import img11 from '../../../public/landing_page/11.webp'
import img12 from '../../../public/landing_page/12.webp'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from '@/hooks/use-toast'
const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handlegetstarted = (e: any) => {
    console.log(loading)
    setLoading(true);
    console.log(loading)

    try {
      router.push('/Auth/signIn')

    } catch (error) {
      toast({
        variant: "destructive",
        title: 'Error',
        description: (error as Error).message,
      })
      setLoading(false)

    }

  }
  return (
    <div>
      <div className="bg-primary rounded-3xl h-[100vh] justify-center items-center flex">
        <div className="w-[50%] text-center text-white">
          <h2 className="text-6xl font-extrabold ">
            Create a blog worth sharing
          </h2>
          <p className="mt-4">
            {" "}
            In the fast-paced world of technology, staying updated is crucial.
            With Dev Digest, you&apos;ll have access to the latest trends,
            tools, and techniques directly from industry experts. Whether
            you&apos;re a seasoned developer or just starting, you&apos;ll
            always be one step ahead.
          </p>
          <button className="btn mt-8" onClick={handlegetstarted}>
            {loading ? "Please wait....." : "Get started"}
          </button>
          <button className="btn mt-8 ml-8">
            <Link href={"ViewBlogs"}>Read Some Blogs</Link>
          </button>
          <p className="mt-8">
            Not just about consuming content—it&apos;s about creating it.
          </p>
        </div>
      </div>
      <div className="mt-16 mb-16 rounded-3xl h-auto justify-center items-center flex">
        <div className="container mx-auto p-4">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <div className="w-full break-inside">
              <Image
                src={img1}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full break-inside">
              <Image
                src={img2}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full break-inside">
              <Image
                src={img3}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full break-inside">
              <Image
                src={img4}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full break-inside">
              <Image
                src={img5}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full break-inside">
              <Image
                src={img6}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full break-inside">
              <Image
                src={img7}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full break-inside">
              <Image
                src={img8}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full break-inside">
              <Image
                src={img9}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full break-inside">
              <Image
                src={img10}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full break-inside">
              <Image
                src={img11}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full break-inside">
              <Image
                src={img12}
                alt="Gallery Image"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-3xl h-[100vh] justify-center items-center flex">
        <div className="  text-black">
          <h2 className="text-4xl font-extrabold ">
            The powerful infrastructure behind your blog
          </h2>
          <div className="flex flex-wrap mt-16">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="divider"></div>
              <h2 className="text-xl font-bold mb-4">Secure platform</h2>
              <p>
                Our world class experts and enterprise-grade security system
                work 24/7 so your audiences&apos; information will always be
                kept safe and secure.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="divider"></div>
              <h2 className="text-xl font-bold mb-4">Reliable hosting</h2>
              <p>
                With free website hosting on a worldwide CDN, your site is
                automatically backed up and will be able to handle any situation
                - from traffic spikes to outages - so you&apos;ll always be up
                and running.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="divider"></div>
              <h2 className="text-xl font-bold mb-4">Faster loading</h2>
              <p>
                We have a performance-first culture, meaning our priority is
                providing the best user experience for you and your visitors,
                with faster loading sites that perform great on any device.
              </p>
            </div>
          </div>
          <button
            className="btn bg-black text-white hover:btn-ghost hover:text-black mt-16"
            onClick={handlegetstarted}
          >
            {loading ? "Please wait...." : "Start Blogging"}
          </button>
        </div>
      </div>
      <div className="bg-gray-100 rounded-3xl h-[100vh] justify-center items-center flex">
        <div className="  text-black">
          <h2 className="text-4xl font-extrabold ">
            5 easy steps to start going...
          </h2>
          <div className="flex flex-wrap mt-16">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <h2 className="text-xl font-bold mb-4">
                How to create a blog for free
              </h2>
              <p>Follow these 5 steps to start building your blog today.</p>
              <button
                className="btn bg-black text-white hover:btn-ghost hover:text-black mt-16"
                onClick={handlegetstarted}
              >
                {loading ? "Please wait...." : "Start Blogging"}
              </button>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3 px-4 mb-8">
              <ol>
                <li className="mb-4">
                  <strong>1. Sign up on DevDigest.</strong>
                  <br />
                  Simply put some details.
                </li>
                <li className="mb-4">
                  <strong>2. Verify your account.</strong>
                  <br />
                  Verify by entering OTP & hola you signed up successfully.
                </li>
                <li className="mb-4">
                  <strong>3. SignIn to your account.</strong>
                  <br />
                  By enetring the credentials.
                </li>
                <li className="mb-4">
                  <strong>4. Write and publish your first post.</strong>
                  <br />
                  Launch with posts you&apos;re passionate about.
                </li>
                <li className="mb-4">
                  <strong>5. Share your blog.</strong>
                  <br />
                  Gain new readers and promote your blog on social media.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent rounded-3xl h-[50vh] justify-center items-center flex">
        <div className="w-[50%] text-center text-black">
          <h2 className="text-6xl font-extrabold ">
            Create a blog that inspires.
          </h2>

          <button className="btn mt-8" onClick={handlegetstarted}>
            {loading ? "Please wait...." : "Get started"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page
