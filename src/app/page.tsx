"use client";
import Image from "next/image";
import { greatVibes } from "./layout";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import useSWR from "swr";
import PostItem from "./components/Post/PostItem";
import { Post } from "@prisma/client";
import Loader from "./components/Loader/Loader";
import Pagination from "./components/Pagination/Pagination";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();
  const [searchURL, setSearchURL] = useState("");
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";

  const { data, isLoading } = useSWR(
    `/api/blog?page=${page}&per_page=${per_page}${searchURL && searchURL}`,
    fetcher,
  );

  const searchTermRef = useRef<HTMLInputElement>(null);
  const handleSearch = async () => {
    const searchTerm = searchTermRef.current
      ? encodeURIComponent(searchTermRef.current.value)
      : "";
    if (searchTerm.length === 0) {
      setSearchURL("");
      return;
    }

    setSearchURL(`&search=${searchTerm}`);
  };

  // When the search query changes, set page to 1 and set new search query

  useEffect(() => {
    router.push(`/?page=1&per_page=${per_page}${searchURL}`);
  }, [searchURL]);

  return (
    <div className="min-h-screen-minus-80 px-6 pb-28 pt-6 sm:py-28">
      <div className=" my-16 flex flex-col items-center justify-center sm:mt-8 sm:block">
        <p
          className={`${greatVibes.variable} text-text-neutral-800 font-title text-4xl font-bold tracking-widest dark:text-white sm:text-6xl`}
        >
          AtsuBlog <span className="text-slate-700">.dev</span>
        </p>
        <p className="pt-3 text-sm font-semibold italic sm:pt-6 sm:text-lg">
          Journeying Through the World of...
        </p>
      </div>
      <div className=" mt-20 flex w-full justify-center sm:mt-16 sm:w-auto sm:justify-end">
        <form className="w-full sm:w-auto">
          <div className=" relative z-10 flex w-full space-x-1 rounded-lg border bg-white shadow-lg shadow-gray-100 dark:border-gray-700 dark:bg-slate-900 dark:shadow-gray-900/[.2] sm:w-96 sm:space-x-3 sm:p-3">
            <div className="flex-[1_0_0%]">
              <label
                htmlFor="hs-search-article-1"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                <span className="sr-only">Search article</span>
              </label>
              <input
                type="text"
                className="block w-full rounded-lg border-transparent px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 dark:border-transparent dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Search article"
                ref={searchTermRef}
              />
            </div>
            <div className="flex-[0_0_auto]">
              <button
                type="button"
                className="inline-flex h-[46px] w-[46px] items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={handleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      {isLoading && <Loader />}
      <div className="mx-auto mt-4 py-6 dark:text-slate-800 sm:mt-8">
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
          {data?.posts?.map((post: Post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Pagination totalPosts={data?.totalPosts} />
    </div>
  );
}
