import React from "react";
<<<<<<< Updated upstream
import ProfilePic from "../_components/blog/ProfilePic";
import Posts from "../_components/blog/Posts";
import { IoSearch } from "react-icons/io5";
=======
import Image from "next/image";
import { getBlogPosts } from "@/lib/actions";
import CardBlog from "@/components/blog/CardBlog";
import Pagination from "@/components/blog/Pagination";
import Link from "next/link";
import SearchBlog from "@/components/blog/SearchBlog";
import CategoriesList from "@/components/blog/CategoriesList";
import FeaturedPosts from "@/components/blog/FeaturedPosts";
import Wrapper from "@/components/Wrapper";
import BlogBanner from "@/components/BlogBanner";
>>>>>>> Stashed changes

export const revalidate = 500;

export default function BlogPage() {
  return (
    <div className="">
<<<<<<< Updated upstream
      <header className="bg-zinc-900">
        <div className="h-[40vh] w-full max-w-[1024px] mx-auto relative">
          <div className="text-zinc-50 absolute left-0 bottom-0 py-4 z-10">
            <h1 className="text-2xl">Blog</h1>
            <p>Web Development topics</p>
          </div>
          {/* <div className="absolute bottom-2 left-[50%] sm:-translate-x-[50%] z-0">
            <ProfilePic />
          </div> */}
=======
      <header className="pt-20 bg-gradient-to-br from-sky-900 via-blue-950 to-indigo-950/90 rounded-br-[100px] overflow-hidden">
        <div className="h-[50vh] relative flex items-center justify-center m-0 lg:m-0 lg:p-0 lg:max-w-none">
          <BlogBanner />
          {/* <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/myblog-51c80.appspot.com/o/images%2Fwp6350578.jpg?alt=media&token=0f37f610-fcc2-4588-8fe5-7bd3f6d72593"
            }
            alt="wallpaper"
            fill
            quality={100}
            className="object-cover object-center"
          /> */}
>>>>>>> Stashed changes
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
