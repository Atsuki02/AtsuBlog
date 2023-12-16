"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import SearchBlog from "../components/Search/SearchBlog";
import Pagination from "../components/Pagination/Pagination";

import MyPostItem from "../components/Post/MyPostItem";
import Loader from "../components/Loader/Loader";
import { Post } from "@prisma/client";

export default function MyPost({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();
  const [searchURL, setSearchURL] = useState("");
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";

  const { data, isLoading } = useSWR(`/api/user/1`, fetcher);

  //TODO: The user should be dynamic depending on who's is the user.

  // When the search query changes, set page to 1 and set new search query

  useEffect(() => {
    router.push(`/myPost/?page=1&per_page=${per_page}${searchURL}`);
  }, [searchURL]);

  return (
    <div className="min-h-screen-minus-80 px-6 py-28 pb-48">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold dark:text-white md:text-4xl md:leading-tight">
          Your Journey
        </h2>
        <p className="mt-8 text-gray-600 dark:text-gray-400">
          Welcome to your space, where each post is a chapter of your unique
          story. Explore the moments, insights, and experiences that define your
          journey. Share, inspire, and grow with every entry.
        </p>
      </div>
      <div className="pb-8">
        <SearchBlog setSearchURL={setSearchURL} />
      </div>
      {isLoading && <Loader />}
      <div className="mx-auto mt-4 grid gap-6 py-6 dark:text-slate-800 sm:mt-8 lg:grid-cols-2">
        {data?.user?.post?.map((post: Post) => (
          <MyPostItem key={post.id} post={post} />
        ))}
      </div>
      <Pagination path="myPost" totalPosts={data?.user?.post?.length} />
    </div>
  );
}
