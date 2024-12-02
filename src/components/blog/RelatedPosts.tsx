import React from "react";
import { getRelatedPosts } from "@/lib/actions";
import { BlogPost } from "@prisma/client";
import Image from "next/image";
import Wrapper from "../Wrapper";

export default async function RelatedPosts({ slug }: { slug: string }) {
  const { data } = await getRelatedPosts(decodeURIComponent(slug));

  return (
    <Wrapper className=" my-6">
      <h2 className="text-2xl my-2">Related Posts</h2>
      <div className=" overflow-x-auto">
        <div className="flex items-stretch gap-4 py-2">
          {data.map((item, idx) => (
            <RelatedPostCard blog={item} key={idx} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

function RelatedPostCard({ blog }: { blog: BlogPost }) {
  return (
    <div className="shadow-md shadow-zinc-200 rounded-lg w-[300px] overflow-clip shrink-0 ">
      <div className="w-full h-[200px] relative">
        <Image
          src={blog.banner ?? "/post_icon.png"}
          alt="banner"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="p-2 line-clamp-1">{blog.title}</div>
    </div>
  );
}
