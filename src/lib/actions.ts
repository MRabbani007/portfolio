import { ITEMS_PER_PAGE } from "./constants";
import { Prisma } from "../../generated/prisma/client";
import { prisma } from "./prisma";

export async function getBlogPosts({
  page,
  search,
  featured,
  category,
  status = "PUBLISHED",
}: {
  page: number;
  featured?: boolean;
  search?: string;
  category?: string;
  status?: string;
}) {
  try {
    const query: Prisma.BlogPostWhereInput = {};

    if (status === "PUBLISHED") {
      query.status = "PUBLISHED";
    }
    if (status === "DRAFT") {
      query.status = "DRAFT";
    }
    if (search) {
      query.title = { contains: search, mode: "insensitive" };
    }
    if (category) {
      query.category = category;
    }
    if (featured === true) {
      query.pinned = true;
    }

    const data = await prisma.blogPost.findMany({
      skip: (page - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
      where: query,
      include: {
        author: { select: { firstName: true, lastName: true, image: true } },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const count = await prisma.blogPost.count({
      where: query,
    });

    return { status: "success", data, count };
  } catch (error) {
    console.error(error);
    return { status: "error", data: [], count: 0 };
  }
}

export async function getAllBlogPosts({
  status = "PUBLISHED",
}: {
  status?: string;
}) {
  const query: Prisma.BlogPostWhereInput = {};

  if (status === "PUBLISHED") {
    query.status = "PUBLISHED";
  }
  if (status === "DRAFT") {
    query.status = "DRAFT";
  }

  try {
    const data = await prisma.blogPost.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const count = await prisma.blogPost.count({
      where: query,
    });

    return { status: "success", data, count };
  } catch (error) {
    console.error(error);
    return { status: "error", data: [], count: 0 };
  }
}

export async function getPostbySlug(slug: string) {
  try {
    const metadata = await prisma.blogPost.findFirst({
      where: { id: slug },
      include: {
        author: { select: { firstName: true, lastName: true, image: true } },
      },
    });

    return { status: "success", metadata, rawMDX: "" };
  } catch (error) {
    return { status: "error", metadata: null, rawMDX: null };
  }
}

export async function getRelatedPosts(slug: string) {
  try {
    const blogPost = await prisma.blogPost.findFirst({ where: { slug: slug } });

    const data = await prisma.blogPost.findMany({
      where: { category: blogPost?.category, status: "PUBLISHED" },
      take: 5,
    });

    return { status: "success", data };
  } catch (error) {
    return { status: "error", data: [] };
  }
}
