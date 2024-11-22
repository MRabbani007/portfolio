import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getPostbySlug } from "@/lib/actions";
import RelatedPosts from "@/components/blog/RelatedPosts";

const Content = dynamic(() => import("@/components/blog/Content"), {
  ssr: false,
});

export const revalidate = 500; //86400;

type Props = {
  params: {
    postId: string;
  };
};

// export async function generateStaticParams() {
//   const posts = await getPostsMeta(); //deduped!

//   if (!posts) return [];

//   return posts.map((post) => ({
//     postId: post.id,
//   }));
// }

// export async function generateMetadata({ params: { postId } }: Props) {
//   const post = await getPostByName(`${postId}.mdx`); //deduped!

//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }

//   return {
//     title: post.meta.title,
//   };
// }

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
      {meta?.banner && (
        <div className="w-full h-[50vh] flex-1">
          <img src={meta.banner} className={"w-full h-full object-cover "} />
        </div>
      )}
      <main className="">
        <header className="flex items-stretch gap-4 my-4 p-4">
          <div className="flex flex-col justify-start">
            <div className="flex-1 flex flex-col items-start">
              <h1 className="font-extrabold text-4xl mb-4">{meta?.title}</h1>
              <p className="flex items-center gap-2 flex-wrap">
                <Image
                  src={"/assets/blog/author.png"}
                  alt="profile.png"
                  width={800}
                  height={800}
                  className="size-10 md:size-20"
                />
                <span>{"Mohamad"}</span>
                <span className="">{` - Published ${meta?.publishedAt?.toLocaleDateString(
                  "en-UK"
                )}`}</span>
                <span className="">{`Last Updated ${meta?.updatedAt?.toLocaleDateString(
                  "en-UK"
                )}`}</span>
              </p>
            </div>
            <p className="flex flex-wrap items-center gap-4 text-sm mt-6">
              {meta?.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="py-2 px-4 bg-zinc-800"
                >{`#${tag}`}</span>
              ))}
            </p>
          </div>
        </header>
        <div className="flex-1 prose lg:prose-xl dark:prose-invert prose-invert prose-base prose-zinc p-4">
          <Suspense fallback={<p>Loading...</p>}>
            <Content rawMDX={rawMDX ?? ""}></Content>
          </Suspense>
        </div>
        {/* <RelatedPosts params={params} /> */}
        <hr />
        <RelatedPosts slug={meta?.slug ?? ""} />
        <hr />
        <Link href="/blog" className="flex items-center gap-2 mb-10">
          <IoArrowBack size={30} />
          <span>Go back</span>
        </Link>
      </main>
    </>
  );
}
