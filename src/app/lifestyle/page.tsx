"use client";
import React from "react";
import useSWR from "swr";
import { Post } from "../types";
import Loader from "../components/Loader/Loader";
import CategoryPostItem from "../components/Post/CategoryPostItem";

export default function Lifestyle() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading } = useSWR("/api/lifestyle", fetcher);

  return (
    <div className="min-h-screen-minus-80 px-6 pb-28 pt-6 sm:py-28">
      <div className="mx-auto my-10 max-w-2xl text-center lg:mb-14 lg:mt-0 ">
        <h2 className="text-xl font-bold dark:text-white md:text-4xl md:leading-tight">
          Read the articles about the lifestyle
        </h2>
        <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
          Stay informed and get up to date with the insightful articles about
          the lifestyle
          <br />
          Dive in now to explore a world of knowledge!
        </p>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:mb-14 lg:grid-cols-4">
            {data?.posts?.map((post: Post) => (
              <CategoryPostItem key={post.id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
