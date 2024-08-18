import getFormattedDate from "@/app/_lib/blog/getFormattedDate";
import Link from "next/link";
import React from "react";
import { Meta } from "../../../../types";

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="text-2xl bg-zinc-900 py-4 px-8 rounded-xl border-2 border-zinc-500">
      <Link className="" href={`/blog/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
}
