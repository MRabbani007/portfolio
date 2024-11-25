import React from "react";
import Image from "next/image";
import { getBlogPosts } from "@/lib/actions";
import CardBlog from "@/components/blog/CardBlog";
import Pagination from "@/components/blog/Pagination";
import Link from "next/link";
import SearchBlog from "@/components/blog/SearchBlog";
import CategoriesList from "@/components/blog/CategoriesList";
import FeaturedPosts from "@/components/blog/FeaturedPosts";

export const revalidate = 500;

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { page?: number; search?: string; category?: string };
}) {
  const page = searchParams?.page ?? 1;
  const search = searchParams?.search;
  const category = searchParams?.category;

  const { count, data: blogs } = await getBlogPosts({ page, search, category });

  return (
    <div className="">
      <header className="pt-20">
        <div className="h-[50vh] w-full mx-auto relative">
          {/* <div className="text-zinc-50 absolute left-0 bottom-0 px-8 py-4 z-10">
            <h1 className="text-2xl">Blog</h1>
            <p>Web Development topics</p>
          </div> */}
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/myblog-51c80.appspot.com/o/images%2Fwp6350578.jpg?alt=media&token=0f37f610-fcc2-4588-8fe5-7bd3f6d72593"
            }
            alt="wallpaper"
            fill
            quality={100}
            className="object-cover object-center"
          />
          {/* <div className="absolute bottom-2 left-[50%] sm:-translate-x-[50%] z-0">
            <ProfilePic />
          </div> */}
        </div>
      </header>
      <main className="p-4 md:p-6 lg:p-8 max-w-[1024px] mx-auto">
        <div>
          <h1>Blog</h1>
          <p>
            Welcome to my corner of the web, where I share insights, tips, and
            tutorials on all things web development
          </p>
        </div>
        <FeaturedPosts />
        <CategoriesList />
        <SearchBlog />
        <div className="flex items-center gap-4">
          <Link
            href={"/blog"}
            className={
              (category || search ? "" : "bg-zinc-400 dark:bg-zinc-800") +
              " py-2 px-4  w-fit hover:bg-zinc-300 duration-200"
            }
          >
            Latest Posts
          </Link>
          {category && (
            <p className="py-2 px-4 bg-zinc-400 dark:bg-zinc-800 w-fit">
              {`Category: ${category}`}
            </p>
          )}
          {search && (
            <p className="py-2 px-4 bg-zinc-400 dark:bg-zinc-800 w-fit">
              {`Search: ${search}`}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-6">
          {blogs.map((blog, idx) => (
            <CardBlog key={idx} blog={blog} />
          ))}
        </div>
        <div>
          <Pagination count={count} activePage={page} />
        </div>
      </main>
    </div>
  );
}
