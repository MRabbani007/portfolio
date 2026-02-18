import React from "react";
import { getRelatedPosts } from "@/lib/actions/blog";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../Wrapper";
import { BlogPost } from "@/generated/client/client";
import { calculateReadTime } from "@/lib/utils/blog";

export default async function RelatedPosts({ slug }: { slug: string }) {
  const { data } = await getRelatedPosts(decodeURIComponent(slug));

  if (!data || data.length === 0) return null;

  return (
    <Wrapper className="py-12 border-t border-zinc-100 dark:border-zinc-900">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Continue Reading
        </h2>
        <div className="hidden md:flex gap-2">
          {/* Decorative line for a modern look */}
          <div className="h-[2px] w-24 bg-sky-500 rounded-full self-center" />
        </div>
      </div>

      {/* Horizontal Scroll with Snap functionality */}
      <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-6 pb-6">
        {data.map((item, idx) => (
          <RelatedPostCard blog={item} key={item.id ?? idx} />
        ))}
      </div>
    </Wrapper>
  );
}

function RelatedPostCard({ blog }: { blog: BlogPost & { content?: string } }) {
  const readingTime = calculateReadTime(blog?.content ?? "");

  return (
    <Link
      href={`/blog/${blog.id}`}
      className="group relative w-[280px] md:w-[320px] shrink-0 snap-start"
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={blog.banner ?? "/post_icon.png"}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Modern Read Time Badge Overlay */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1.5 backdrop-blur-md bg-black/40 text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
            {readingTime}
          </span>
        </div>
        {/* Modern Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mt-4 space-y-2 px-1">
        <h3 className="font-bold text-lg leading-snug line-clamp-2 text-zinc-800 dark:text-zinc-200 group-hover:text-sky-500 transition-colors">
          {blog.title}
        </h3>

        {/* Subtle detail footer */}
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-zinc-400">
          <span>
            {new Date(blog.createdAt).toLocaleDateString("en-UK", {
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
            Read Post →
          </span>
        </div>
      </div>
    </Link>
  );
}
