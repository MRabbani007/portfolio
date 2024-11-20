import React from "react";
import ProfilePic from "../../components/blog/ProfilePic";
import Posts from "../../components/blog/Posts";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";

export const revalidate = 500;

export default function BlogPage() {
  return (
    <div className="">
      <header className="">
        <div className="h-[40vh] w-full mx-auto relative">
          {/* <div className="text-zinc-50 absolute left-0 bottom-0 px-8 py-4 z-10">
            <h1 className="text-2xl">Blog</h1>
            <p>Web Development topics</p>
          </div> */}
          <div className="h-full relative">
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/myblog-51c80.appspot.com/o/images%2Fwp6350578.jpg?alt=media&token=0f37f610-fcc2-4588-8fe5-7bd3f6d72593"
              }
              alt="wallpaper"
              fill
              quality={100}
              className="object-cover object-center"
            />
          </div>
          {/* <div className="absolute bottom-2 left-[50%] sm:-translate-x-[50%] z-0">
            <ProfilePic />
          </div> */}
        </div>
      </header>
      <main className="p-4 md:p-6 lg:p-8 max-w-[1024px] mx-auto">
        {/* <h1>Blog</h1> */}
        <div>
          <h1 className="text-4xl">Blog</h1>
          <p>Web Development topics</p>
        </div>
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
