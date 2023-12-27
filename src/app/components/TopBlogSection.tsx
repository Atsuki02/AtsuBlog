"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import SearchBlog from "./Search/SearchBlog";
import Loader from "./Loader/Loader";
import { Post } from "@prisma/client";
import PostItem from "./Post/PostItem";
import Pagination from "./Pagination/Pagination";
import { CurrentUser } from "../types";

interface TopBlogSectionProps {
  searchParams: { [key: string]: string | string[] | undefined };
  currentUser: CurrentUser | null;
}

export function TopBlogSection({
  searchParams,
  currentUser,
}: TopBlogSectionProps) {
  const router = useRouter();
  const [searchURL, setSearchURL] = useState("");
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";
  const pathname = usePathname();

  const { data, isLoading } = useSWR(
    `/api/blog?page=${page}&per_page=${per_page}${searchURL && searchURL}`,
    fetcher,
  );

  // When the search query changes, set page to 1 and set new search query

  useEffect(() => {
    if (pathname === "/") return;
    router.push(`/?page=1&per_page=${per_page}${searchURL}`);
  }, [searchURL]);

  return (
    <>
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
    </>
  );
}

export default TopBlogSection;
