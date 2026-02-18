"use server";

import { Prisma } from "@/generated/client/client";
import { prisma } from "../prisma";
import { getBytes, ref } from "firebase/storage";
import { storage } from "../firebase";

type Sort = {
  field: "createdAt" | "updatedAt" | "sortIndex" | "title";
  direction: "asc" | "desc";
};

type Filters = {
  query?: string;
  featured?: boolean;
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

    return { data, count, status: 200 };
  } catch (error) {
    // 🔴 Always log full error on server
    console.error("getBlogPosts failed:", error);

    // Prisma-specific errors (very helpful in prod)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        ok: false,
        error: "Database query failed. Please try again later.",
        data: [],
        count: 0,
        status: 500,
      };
    }

    if (error instanceof Prisma.PrismaClientInitializationError) {
      return {
        ok: false,
        error: "Database connection failed.",
        data: [],
        count: 0,
        status: 500,
      };
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      return {
        ok: false,
        error: "Invalid query parameters.",
        data: [],
        count: 0,
        status: 500,
      };
    }

    return {
      ok: false,
      error: "Unexpected server error.",
      data: [],
      count: 0,
      status: 500,
    };
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
