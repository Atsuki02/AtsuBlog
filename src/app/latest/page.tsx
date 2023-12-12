"use client";
import { RootState } from "@/app/redux/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function Latest() {
  const { isOpen } = useSelector((state: RootState) => state.nav);

  return (
    <div
      className={`min-h-screen-minus-80 px-6 pb-28 pt-6 sm:py-28 ${
        isOpen ? "visible bg-black bg-opacity-50" : ""
      }`}
    >
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

      <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:mb-14 lg:grid-cols-4">
        <a
          className="group flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-slate-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-9">
            <Image
              className="w-full rounded-t-xl object-cover"
              width={600}
              height={400}
              src="/image1.png"
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
              Product
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
              Better is when everything works together
            </h3>
          </div>
        </a>

        <a
          className="group flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-slate-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-9">
            <Image
              className="w-full rounded-t-xl object-cover"
              width={600}
              height={400}
              src="/image2.png"
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
              Business
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
              What CFR really is about
            </h3>
          </div>
        </a>

        <a
          className="group flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-slate-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-9">
            <Image
              className="w-full rounded-t-xl object-cover"
              width={600}
              height={400}
              src="/image3.png"
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
              Business
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
              Should Product Owners think like entrepreneurs?
            </h3>
          </div>
        </a>

        <a
          className="group flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-slate-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-9">
            <Image
              className="w-full rounded-t-xl object-cover"
              width={600}
              height={400}
              src="/image4.png"
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
              Facilitate
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
              Announcing Front Strategies: Ready-to-use rules
            </h3>
          </div>
        </a>
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
    </div>
  );
}
