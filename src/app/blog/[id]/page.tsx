import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { FaRegClock, FaRegCalendar } from "react-icons/fa6";
import Wrapper from "@/components/Wrapper";
import { getBlogPostById, getBlogPosts } from "@/lib/actions/blog";
import BlogPostContent from "@/features/blog/BlogPostContent";

export const revalidate = 500;

export async function generateStaticParams() {
  const { data: posts } = await getBlogPosts({});
  return posts?.map((post: { id: string }) => ({ postId: post.id })) ?? [];
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const { data: meta } = await getBlogPostById(id);

  if (!meta) {
    return notFound();
  }

  return (
    <main className="flex-1 flex flex-col relative w-full">
      {/* 2026 Immersive Hero - Padding added for the absolute navbar */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex flex-col justify-end pb-24">
        {meta.banner && (
          <Image
            src={meta.banner}
            alt={meta.title}
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent" />

        <Wrapper className="relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="flex gap-2">
              {meta.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-bold tracking-widest bg-sky-500 text-white rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white">
              {meta.title}
            </h1>
          </div>
        </Wrapper>
      </section>

      {/* 2. Content Area - Fetched separately via a Suspense boundary if needed */}
      <Wrapper className="-mt-12 relative z-20 pb-20 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <article className="bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 p-8 md:p-14 rounded-[3rem] shadow-2xl">
            <Suspense
              fallback={
                <p className="animate-pulse h-96 bg-zinc-800 rounded-3xl" />
              }
            >
              <BlogPostContent postId={id} />
            </Suspense>
          </article>

          <aside className="sticky top-28 space-y-6">
            <div className="p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <p className="text-xs font-bold uppercase text-sky-500 mb-4">
                Post Details
              </p>
              <div className="space-y-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-3">
                  <FaRegCalendar /> {meta.publishedAt?.toDateString()}
                </div>
                <div className="flex items-center gap-3">
                  <FaRegClock /> 8 min read
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Wrapper>

      <Wrapper>
        <RelatedPosts slug={meta.slug} />
      </Wrapper>
    </main>
  );
}
