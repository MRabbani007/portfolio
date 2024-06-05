import React from "react";
import ProfilePic from "../_components/blog/ProfilePic";
import Posts from "../_components/blog/Posts";

export const revalidate = 500;

export default function BlogPage() {
  return (
    <div className="">
      <header className="bg-zinc-900">
        <div className="h-[40vh] w-full max-w-[1024px] mx-auto relative">
          <div className="text-zinc-50 absolute left-0 bottom-0 py-4 z-10">
            <p className="text-2xl">Blog</p>
            <p>Web Development topics</p>
          </div>
          <div className="absolute bottom-2 left-[50%] sm:-translate-x-[50%] z-0">
            <ProfilePic />
          </div>
        </div>
      </header>
      <main className="">
        <h1>Blog</h1>
        <Posts />
        {/* <article>
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
        </article> */}
      </main>
    </div>
  );
}
