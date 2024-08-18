import React from "react";
import ProfilePic from "../_components/blog/ProfilePic";
import Posts from "../_components/blog/Posts";
import { IoSearch } from "react-icons/io5";

export const revalidate = 500;

export default function BlogPage() {
  return (
    <div className="">
      <header className="bg-zinc-900">
        <div className="h-[40vh] w-full max-w-[1024px] mx-auto relative">
          <div className="text-zinc-50 absolute left-0 bottom-0 py-4 z-10">
            <h1 className="text-2xl">Blog</h1>
            <p>Web Development topics</p>
          </div>
          {/* <div className="absolute bottom-2 left-[50%] sm:-translate-x-[50%] z-0">
            <ProfilePic />
          </div> */}
        </div>
      </header>
      <main className="p-8">
        {/* <h1>Blog</h1> */}
        <form className="border-2 border-zinc-500 rounded-lg flex items-center gap-4 px-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none border-none py-2 px-4 flex-1"
          />
          <IoSearch size={30} />
        </form>
        <Posts />
      </main>
    </div>
  );
}
