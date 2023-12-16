"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { FC } from "react";

interface PaginationProps {
  path?: string;
  totalPosts: number;
}

const Pagination: FC<PaginationProps> = ({ path = "", totalPosts }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";
  const totalPages = Math.ceil(totalPosts / Number(per_page));

  const hasPrevPage = Number(page) > 1;
  const hasNextPage = Number(page) < totalPages;

  return (
    <nav className="flex items-center justify-center gap-x-1 p-8">
      {hasPrevPage && (
        <button
          type="button"
          disabled={!hasPrevPage}
          className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          onClick={() => {
            router.push(
              `/${path}?page=${Number(page) - 1}&per_page=${per_page}`,
            );
          }}
        >
          <svg
            className="h-3.5 w-3.5 flex-shrink-0"
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
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span aria-hidden="true" className="sr-only">
            Previous
          </span>
        </button>
      )}
      <div className="flex items-center gap-x-1">
        {Number(page) > 1 && (
          <button
            type="button"
            className="flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            onClick={() =>
              router.push(
                `/${path}?page=${Number(page) - 1}&per_page=${per_page}`,
              )
            }
          >
            {Number(page) - 1}
          </button>
        )}
        <button
          type="button"
          className="flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:focus:bg-white/10"
          aria-current="page"
        >
          {page}
        </button>
        {Number(page) + 1 <= totalPages && (
          <button
            type="button"
            className="flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            onClick={() =>
              router.push(
                `/${path}?page=${Number(page) + 1}&per_page=${per_page}`,
              )
            }
          >
            {Number(page) + 1}
          </button>
        )}
        {Number(page) + 2 <= totalPages && (
          <button
            type="button"
            className="flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            onClick={() =>
              router.push(
                `/${path}?page=${Number(page) + 1}&per_page=${per_page}`,
              )
            }
          >
            {Number(page) + 2}
          </button>
        )}
      </div>
      {hasNextPage && (
        <button
          type="button"
          disabled={!hasNextPage}
          className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          onClick={() => {
            router.push(
              `/${path}?page=${Number(page) + 1}&per_page=${per_page}`,
            );
          }}
        >
          <span aria-hidden="true" className="sr-only">
            Next
          </span>
          <svg
            className="h-3.5 w-3.5 flex-shrink-0"
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
        </button>
      )}
    </nav>
  );
};

export default Pagination;
