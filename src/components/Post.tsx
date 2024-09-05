"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Post = ({
  title,
  content,
  author,
  date,
  imageUrl,
  category,
  avatar,
}: any) => {
  const router = useRouter();
   const handleClick = () => {
     router.push('/Blog/kj');
   };
  return (
    <>
      <div className="card bg-base-100  shadow-xl" onClick={handleClick}>
        <figure>
          <img src={imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="badge badge-primary">{category}</div>
          <h2 className="card-title">{title}</h2>
          <p>{content}</p>
          <div className="avatar items-center">
            <div className="w-8 rounded mr-2">
              <img src={avatar} alt="Tailwind-CSS-Avatar-component" />
            </div>
            <p className="text-xs opacity-50">
              {author}
              <span className="ml-2">{date}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post
