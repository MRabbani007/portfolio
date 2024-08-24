import { getPostsMeta } from "@/app/_lib/blog/posts";
import ListItem from "./ListItem";
import { getBlogs } from "@/lib/firebase";
import CardBlog from "./CardBlog";

export default async function Posts() {
  // const posts = await getPostsMeta();
  const { count, blogs } = await getBlogs();

  if (!blogs) {
    return <p className="mt-10 text-center">No Posts available.</p>;
  }

  return (
    <ul className="space-y-4">
      {blogs.map((blog, idx) => (
        <CardBlog key={idx} blog={blog} />
      ))}
    </ul>
  );
}

// <ListItem key={idx} post={post} />
