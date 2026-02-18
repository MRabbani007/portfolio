"use server";

import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../prisma";
import { getBytes, ref } from "firebase/storage";
import { storage } from "../firebase";

type Sort = {
  field: "createdAt" | "sortIndex";
  direction: "asc" | "desc";
};

type Filters = {
  query?: string;
};

export async function getBlogPosts({
  itemsPerPage = 20,
  page = 1,
  filters,
  sort,
}: {
  itemsPerPage?: number;
  page?: number;
  sort?: Sort;
  filters?: Filters;
}) {
  try {
    const skip = (page - 1) * itemsPerPage;
    const take = itemsPerPage;

    const whereClause: Prisma.BlogPostWhereInput = { status: "PUBLISHED" };

    if (filters?.query) {
      whereClause.OR = [
        { title: { contains: filters.query, mode: "insensitive" } },
      ];
    }

    const orderByClause: Prisma.BlogPostOrderByWithRelationInput | undefined =
      sort ? { [sort.field]: sort.direction } : { sortIndex: "asc" };

    const [data, count] = await prisma.$transaction([
      prisma.blogPost.findMany({
        where: whereClause,
        take,
        skip,
        orderBy: orderByClause,
      }),

      prisma.blogPost.count({
        where: whereClause,
      }),
    ]);

    return { data, count };
  } catch {
    return { data: [], count: 0 };
  }
}

export async function getBlogPostById(id: string) {
  try {
    const blogPost = await prisma.blogPost.findFirst({
      where: { id },
      include: { author: true },
    });

    return { data: blogPost };
  } catch {
    return { data: null };
  }
}

export async function getBlogPostContent(id: string) {
  try {
    const storageRef = ref(storage, `/blogs/${id ?? ""}.mdx`);

    const file = await getBytes(storageRef);
    var enc = new TextDecoder("utf-8");
    const rawMDX = enc.decode(file);

    return { data: rawMDX };
  } catch {
    return { data: null };
  }
}
