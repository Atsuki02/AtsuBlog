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
import SearchBlog from "./components/Search/SearchBlog";

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
      <SearchBlog setSearchURL={setSearchURL} />
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
