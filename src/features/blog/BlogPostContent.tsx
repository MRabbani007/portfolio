import { getBlogPostContent } from "@/lib/actions/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";

// highlight.js/styles/tokyo-night-dark.css
// highlight.js/styles/atom-one-dark.css
// highlight.js/styles/night-owl.css
// highlight.js/styles/vs2015.css

const mdxComponents = {
  h2: (props: any) => (
    <h2
      {...props}
      className="text-3xl font-bold mt-12 mb-4 tracking-tight text-zinc-900 dark:text-white"
    />
  ),
  h3: (props: any) => (
    <h3
      {...props}
      className="text-2xl font-semibold mt-8 mb-3 text-zinc-800 dark:text-zinc-100"
    />
  ),
  p: (props: any) => (
    <p
      {...props}
      className="leading-relaxed mb-6 text-zinc-600 dark:text-zinc-400"
    />
  ),
  a: (props: any) => (
    <a
      {...props}
      className="text-sky-500 font-medium underline underline-offset-4 hover:text-sky-600 transition-colors"
    />
  ),
  code: (props: any) => (
    <code
      {...props}
      className="bg-zinc-100 dark:bg-zinc-800/50 px-1.5 py-0.5 rounded-md font-mono text-sm border border-zinc-200 dark:border-zinc-700"
    />
  ),
};

export default async function BlogPostContent({ postId }: { postId: string }) {
  // 1. Fetch from MongoDB (Server-side)
  const { data: rawMDX } = await getBlogPostContent(postId);

  if (!rawMDX) {
    return (
      <div className="py-20 text-center text-zinc-500 italic">
        This post has no content yet.
      </div>
    );
  }

  return (
    <div className="mdx-wrapper prose prose-zinc dark:prose-invert max-w-none">
      {/* 2. Render MDX directly to HTML on the server */}
      <MDXRemote
        source={rawMDX}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeHighlight,
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
            ],
          },
        }}
      />
    </div>
  );
}
