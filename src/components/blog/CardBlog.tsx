import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@prisma/client";

interface Props {
  blog: BlogPost;
}

export default function CardBlog({ blog }: Props) {
  return (
    <div className="flex items-stretch flex-col sm:flex-row gap-4">
      <div className="relative w-[300px] h-[200px]">
        <Image
          src={blog?.banner ?? "/post_icon.png"}
          alt="blog"
          fill
          className="object-cover object-center rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 py-2">
        <div className="flex-1">
          <p className="text-base lg:text-2xl font-semibold text-wrap p-0 m-0 text-accent">
            <Link href={`/blog/posts/${blog?.slug}`}>{blog?.title}</Link>
          </p>
          <p className="font-light text-sm flex items-center gap-2">
            <span>Mohamad - </span>
            <span>{`Published ${blog.publishedAt
              ?.toISOString()
              .substring(0, 10)}`}</span>
          </p>
          <p className="line-clamp-2 my-2 text-sm">{blog.summary}</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap text-sm text-zinc-200">
          {blog?.tags.map((tag) => (
            <span
              key={tag}
              className="py-2 px-4 rounded-full bg-zinc-800"
            >{`#${tag}`}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
