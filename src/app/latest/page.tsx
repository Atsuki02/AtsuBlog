"use client";
import React from "react";
import useSWR from "swr";
import { Post } from "../types";
import Loader from "../components/Loader/Loader";
import CategoryPostItem from "../components/Post/CategoryPostItem";

export default function Latest() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading } = useSWR("/api/latest", fetcher);
  return (
    <div className="min-h-screen-minus-80 px-6 pb-28 pt-6 sm:py-28">
      <div className="mx-auto my-10 max-w-2xl text-center lg:mb-14 lg:mt-0 ">
        <h2 className="text-xl font-bold dark:text-white md:text-4xl md:leading-tight">
          Read the latest articles
        </h2>
        <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
          Stay informed and get up to date with the latest insightful articles.
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
          <div className="text-center">
            <div className="inline-block rounded-full border bg-white shadow-sm dark:border-gray-800 dark:bg-slate-900">
              <div className="flex items-center gap-x-2 px-4 py-3">
                <p className="text-gray-600 dark:text-gray-400">
                  Want to read more?
                </p>
                <a
                  className="inline-flex items-center gap-x-1.5 font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="../docs/index.html"
                >
                  Go here
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
