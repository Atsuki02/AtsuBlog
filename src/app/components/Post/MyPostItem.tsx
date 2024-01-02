import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "@prisma/client";
import { formatDate } from "@/app/utils/format";

interface MyPostItemProps {
  post: Post;
  image: string;
  name: string;
}

const MyPostItem: React.FC<MyPostItemProps> = ({ post, image, name }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <div className="relative h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:h-full before:w-full before:bg-gradient-to-t before:from-gray-900/[.7]">
          <Image
            width={600}
            height={500}
            className="absolute start-0 top-0 h-full w-full object-cover"
            src={post.image}
            alt={post.title}
          />
        </div>

        <div className="absolute inset-x-0 top-0 z-10">
          <div className="flex h-full flex-col p-4 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {image ? (
                  <Image
                    width={500}
                    height={500}
                    className="h-[2.875rem] w-[2.875rem] rounded-full border-2 border-white"
                    src={image}
                    alt={name}
                  />
                ) : (
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-500 text-xs font-semibold leading-none text-white">
                    {name[0].toUpperCase()}
                  </span>
                )}
              </div>
              <div className="ms-2.5 sm:ms-4">
                <h4 className="font-semibold text-white">{name}</h4>
                <p className="text-xs text-white/[.8]">
                  {formatDate(post.updatedAt || post.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="flex h-full flex-col p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-white group-hover:text-white/[.8] sm:text-3xl">
              {post.title}
            </h3>
            <p className="mt-2 text-white/[.8]">{post.subTitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyPostItem;
