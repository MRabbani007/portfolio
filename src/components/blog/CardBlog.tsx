import React from "react";
import { MetaData } from "../../../types";
import Image from "next/image";
import Link from "next/link";
import { genDate } from "@/lib/utils";

interface Props {
  blog: MetaData;
}
export default function CardBlog({ blog }: Props) {
  return (
    <div className="bg-zinc-900 flex items-stretch flex-col sm:flex-row p-4 gap-4">
      <div className="w-full sm:w-32 lg:w-52">
        <Image
          src={blog?.banner ?? "/post_icon.png"}
          alt="blog"
          width={360}
          height={360}
          className="object-cover size-full"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1">
          <p className="font-normal text-base lg:text-2xl text-wrap p-0 m-0 text-accent">
            <Link href={`/blog/posts/${blog?.slug}`}>{blog?.title}</Link>
          </p>
          <p className="font-light text-sm flex items-center gap-4">
            <span>Mohamad</span>
            <span>-</span>
            <span>Published</span>
            <span>{genDate(blog.updatedAt)}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap text-sm text-zinc-200">
          {blog?.tags.map((tag) => (
            <span key={tag} className="py-2 px-4 bg-zinc-800">{`#${tag}`}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
