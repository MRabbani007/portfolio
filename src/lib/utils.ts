import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MetaData, TimeStamp } from "../../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const genDate = (timeStamp?: TimeStamp | null) => {
  if (!timeStamp) return "";

  const postDate = new Date(
    (timeStamp.seconds ?? 0) * 1000 + (timeStamp.nanoseconds ?? 0) / 1000000
  );
  const timeNow = new Date();

  const seconds = Math.floor((timeNow.getTime() - postDate.getTime()) / 1000);

  const minutes = Math.floor(seconds / 60);
  const hours = Math.ceil(minutes / 60);
  const days = Math.floor(hours / 24);

  const timeAgo =
    days >= 2
      ? postDate.toLocaleTimeString("en-US")
      : days >= 1
      ? "yesterday"
      : hours < 1
      ? "1 hour ago"
      : `${hours} hours ago`;

  return timeAgo;
};

// export const extractMdx = async (rawMDX: string) => {
//   const { frontmatter, content } = await compileMDX<Partial<MetaData>>({
//     source: rawMDX,
//     options: {
//       parseFrontmatter: true,
//       mdxOptions: {
//         rehypePlugins: [
//           rehypeHighlight,
//           rehypeSlug,
//           [
//             rehypeAutolinkHeadings,
//             {
//               behavior: "wrap",
//             },
//           ],
//         ],
//       },
//     },
//   });

//   return { frontmatter, content };
// };
