import CardBlog from "./CardBlog";
import { getBlogPosts } from "@/lib/actions";

export default async function Posts() {
  const { count, data: blogs } = await getBlogPosts({ page: 1 });

  if (!blogs) {
    return <p className="mt-10 text-center">No Posts available.</p>;
  }

  return (
    <div className="flex flex-col gap-4 items-stretch">
      {blogs.map(
        (blog, idx) =>
          null
          // <CardBlog key={idx} blog={blog} />
      )}
    </div>
  );
}

// <ListItem key={idx} post={post} />
