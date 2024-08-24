import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
// import { getPostByName, getPostsMeta } from "@/app/_lib/blog/posts";
// import getFormattedDate from "@/app/_lib/blog/getFormattedDate";
import { getBlogByName } from "@/lib/firebase";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import { Suspense } from "react";
import dynamic from "next/dynamic";

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
  // const post = await getPostByName(`${postId}.mdx`); //deduped!
  const post = await getBlogByName(decodeURIComponent(postId));

  if (!post) notFound();

  const { meta, content } = post;

  // const pubDate = getFormattedDate(meta.date);

  // const tags = meta.tags.map((tag, i) => (
  //   <Link key={i} href={`/tags/${tag}`}>
  //     {tag}
  //   </Link>
  // ));

  return (
    <>
      {/* <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2> */}
      {/* <p className="mt-0 text-sm">{pubDate}</p> */}
      {/* <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      */}
      {meta?.banner && (
        <div className="w-full h-[60vh] flex-1">
          <img src={meta.banner} className={"w-full h-full object-cover "} />
        </div>
      )}
      <main className="max-w-[1024px]">
        <header className="flex items-stretch gap-4 my-4">
          <div className="">
            <div className="h-20 w-20 ">
              <Image
                src={"/assets/blog/author.png"}
                alt="profile.png"
                width={800}
                height={800}
                className="w-full h-full object-fill"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <div className="flex-1 flex flex-col items-start">
              <h1 className="font-extrabold text-4xl">{meta?.title}</h1>
              <p className="flex items-center gap-2">
                <span>Mohamad</span>
                <span>-</span>
                <span className="italic text-zinc-300">
                  {new Date(
                    (meta.createdAt?.seconds ?? 0) * 1000 +
                      (meta.createdAt?.nanoseconds ?? 0) / 1000000
                  ).toDateString()}
                </span>
              </p>
            </div>
            <p className="flex items-center gap-4 text-sm mt-6">
              {meta?.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="py-2 px-4 bg-zinc-800"
                >{`#${tag}`}</span>
              ))}
            </p>
          </div>
        </header>
        <div className="flex-1 prose lg:prose-xl dark:prose-invert prose-invert prose-base prose-zinc ">
          <Suspense fallback={<p>Loading...</p>}>
            <Content rawMDX={content}></Content>
          </Suspense>
        </div>
        {/* <RelatedPosts params={params} /> */}
        <hr />
        <Link href="/blog" className="flex items-center gap-2 mb-10">
          <IoArrowBack size={30} />
          <span>Go back</span>
        </Link>
      </main>
    </>
  );
}
