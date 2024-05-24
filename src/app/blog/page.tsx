import React from "react";
import ProfilePic from "../_components/blog/ProfilePic";
import Posts from "../_components/blog/Posts";

export const revalidate = 10;

export default function BlogPage() {
  return (
    <div className=" min-h-screen">
      <div className="bg-zinc-900 w-full h-[40vh] relative">
        <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
          <p className="text-2xl">Blog</p>
          <p>Web Development topics</p>
        </div>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <ProfilePic />
        </div>
      </div>
      <div className="py-2 px-4">
        <h1>Blog</h1>
        <Posts />
        <article>
          <div>Roadmap</div>
          <div>How to become a webdeveloper in 2024</div>
        </article>
        <article>
          <div>Best Practives</div>
        </article>
        <article>
          <div>Tailwind vs Sass vs CSS</div>
          <div>What are the differences, which is better?</div>
        </article>
        <article>
          <div>Hosting Sites</div>
          <div>Github Pages, Vercel, Firebase...</div>
        </article>
      </div>
    </div>
  );
}