import { Post } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryPostItem({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="group flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-slate-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            className="w-full rounded-t-xl object-cover"
            width={600}
            height={400}
            src={post.image}
            alt="Image Description"
          />
        </div>
        <div className="p-4 md:p-5">
          <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
            {post.category}
          </p>
          <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryPostItem;
