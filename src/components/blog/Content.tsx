"use client";

import React, { useEffect, useState } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { MetaData } from "../../../types";

interface Props {
  rawMDX: string;
}

export const extractMdx = async (rawMDX: string) => {
  const { frontmatter, content } = await compileMDX<Partial<MetaData>>({
    source: rawMDX,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  return { frontmatter, content };
};

export default function Content({ rawMDX }: Props) {
  const [temp, setTemp] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const newFunction = async () => {
      const { content } = await extractMdx(rawMDX);
      setTemp(content);
    };
    newFunction();
  }, []);

  return <>{temp}</>;
}
