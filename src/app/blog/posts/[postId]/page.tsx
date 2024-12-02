import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getAllBlogPosts, getBlogPosts, getPostbySlug } from "@/lib/actions";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { FaChevronLeft } from "react-icons/fa6";
import Wrapper from "@/components/Wrapper";

const Content = dynamic(() => import("@/components/blog/Content"), {
  ssr: false,
});

export const revalidate = 500; //86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const { data: posts } = await getAllBlogPosts({}); //deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const { metadata } = await getPostbySlug(decodeURIComponent(postId)); //deduped!

  if (!metadata) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: metadata.title,
    Content: metadata.summary,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const {
    status,
    metadata: meta,
    rawMDX,
  } = await getPostbySlug(decodeURIComponent(postId));

  if (status !== "success") notFound();

  // const pubDate = getFormattedDate(meta.date);

  // const tags = meta.tags.map((tag, i) => (
  //   <Link key={i} href={`/tags/${tag}`}>
  //     {tag}
  //   </Link>
  // ));

  return (
    <>
      <main className="">
        <div className="w-full h-[50vh] relative">
          <div className="absolute top-0 left-0 right-0 h-20 bg-sky-950/80 dark:bg-zinc-950/80 z-10"></div>
          {meta?.banner && (
            <Image
              src={meta.banner}
              alt="Banner"
              fill
              className="object-cover object-center"
            />
          )}
        </div>
        <header className="flex items-stretch gap-4 my-4 p-4">
          <Wrapper className="flex flex-col justify-start flex-1 ">
            <div className="flex-1 flex flex-col items-start">
              <h1 className="font-extrabold text-4xl mb-4">{meta?.title}</h1>
              <div className="flex items-center gap-2 flex-wrap">
                <Image
                  src={meta?.author.image ?? "/assets/blog/author.png"}
                  alt="profile.png"
                  width={800}
                  height={800}
                  className="size-10 md:size-20"
                />
                <div>
                  <p className="first-letter:uppercase text-xl font-semibold">
                    {meta?.author.firstName}
                  </p>
                  <p>
                    <span className="">{`Published ${meta?.publishedAt?.toLocaleDateString(
                      "en-UK"
                    )}`}</span>
                    <span className="">{` - Last Updated ${meta?.updatedAt?.toLocaleDateString(
                      "en-UK"
                    )}`}</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="flex flex-wrap items-center gap-4 text-sm mt-6">
              {meta?.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="py-2 px-4 dark:bg-zinc-800 bg-zinc-200 rounded-full"
                >{`#${tag}`}</span>
              ))}
            </p>
          </Wrapper>
        </header>
        <Wrapper className="overflow-x-auto prose lg:prose-xl dark:prose-invert prose-base prose-zinc w-full">
          <Suspense fallback={<p>Loading...</p>}>
            <Content rawMDX={rawMDX ?? ""}></Content>
          </Suspense>
        </Wrapper>
        {/* <hr /> */}
        <RelatedPosts slug={meta?.slug ?? ""} />
        {/* <hr /> */}
        <Wrapper className="flex items-start justify-start w-full">
          <Link href="/blog" className="flex items-center gap-2 my-10">
            <FaChevronLeft size={20} />
            <span>Go back</span>
          </Link>
        </Wrapper>
      </main>
    </>
  );
}
