"use client";
import Image from "next/image";
import { greatVibes } from "./layout";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export default function Home() {
  const { isOpen } = useSelector((state: RootState) => state.nav);

  return (
    <div
      className={`min-h-screen-80 px-6 pb-28 pt-6 sm:py-28 ${
        isOpen ? "visible bg-black bg-opacity-50" : ""
      }`}
    >
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
                type="email"
                name="hs-search-article-1"
                id="hs-search-article-1"
                className="block w-full rounded-lg border-transparent px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 dark:border-transparent dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Search article"
              />
            </div>
            <div className="flex-[0_0_auto]">
              <a
                className="inline-flex h-[46px] w-[46px] items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
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
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className="mx-auto mt-4 py-6 dark:text-slate-800 sm:mt-8">
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
          <a
            href="#"
            className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
          >
            <Image
              src="/image1.png"
              alt="猫は最高に可愛い"
              width="600"
              height="360"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">July 19, 2021</span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                New trends in Tech
              </h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </a>

          <a
            href="#"
            className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
          >
            <Image
              src="/image2.png"
              alt="猫は最高に可愛い"
              width="600"
              height="360"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">
                April 07, 2021
              </span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                Working with legacy stacks
              </h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </a>

          <a
            href="#"
            className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
          >
            <Image
              src="/image3.png"
              alt="猫は最高に可愛い"
              width="600"
              height="360"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">
                March 15, 2021
              </span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                10 best smartphones for devs
              </h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </a>

          <a
            href="#"
            className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
          >
            <Image
              src="/image4.png"
              alt="猫は最高に可愛い"
              width="600"
              height="360"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">
                January 27, 2021
              </span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                8 High performance Notebooks
              </h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </a>
        </div>
      </div>
      <nav className="flex items-center justify-center gap-x-1 p-8">
        <button
          type="button"
          className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
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
        <div className="flex items-center gap-x-1">
          <button
            type="button"
            className="flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:focus:bg-white/10"
            aria-current="page"
          >
            1
          </button>
          <button
            type="button"
            className="flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            2
          </button>
          <button
            type="button"
            className="flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            3
          </button>
        </div>
        <button
          type="button"
          className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
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
      </nav>
    </div>
  );
}
