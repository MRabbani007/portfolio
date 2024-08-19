import { getPostsMeta } from "@/app/_lib/blog/posts";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">No Posts available.</p>;
  }

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
