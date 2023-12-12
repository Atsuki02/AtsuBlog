"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function MyPost() {
  const { isOpen } = useSelector((state: RootState) => state.nav);

  return (
    <div
      className={`min-h-screen-minus-80 px-6 py-28 pb-48  ${
        isOpen ? "visible bg-black bg-opacity-50" : ""
      }`}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <a
          className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="relative h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:h-full before:w-full before:bg-gradient-to-t before:from-gray-900/[.7]">
            <Image
              width={600}
              height={500}
              className="absolute start-0 top-0 h-full w-full object-cover"
              src="/image4.png"
              alt="Image Description"
            />
          </div>

          <div className="absolute inset-x-0 top-0 z-10">
            <div className="flex h-full flex-col p-4 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    width={500}
                    height={500}
                    className="h-[2.875rem] w-[2.875rem] rounded-full border-2 border-white"
                    src="/image3.png"
                    alt="Image Description"
                  />
                </div>
                <div className="ms-2.5 sm:ms-4">
                  <h4 className="font-semibold text-white">Gloria</h4>
                  <p className="text-xs text-white/[.8]">Jan 09, 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="flex h-full flex-col p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-white group-hover:text-white/[.8] sm:text-3xl">
                Facebook is creating a news section in Watch to feature breaking
                news
              </h3>
              <p className="mt-2 text-white/[.8]">
                Facebook launched the Watch platform in August
              </p>
            </div>
          </div>
        </a>

        <a
          className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="relative h-[350px]  w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:h-full before:w-full before:bg-gradient-to-t before:from-gray-900/[.7]">
            <Image
              width={600}
              height={500}
              className="absolute start-0 top-0 h-full w-full object-cover"
              src="/image1.png"
              alt="Image Description"
            />
          </div>

          <div className="absolute inset-x-0 top-0 z-10">
            <div className="flex h-full flex-col p-4 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    width={600}
                    height={500}
                    className="h-[2.875rem] w-[2.875rem] rounded-full border-2 border-white"
                    src="/image2.png"
                    alt="Image Description"
                  />
                </div>
                <div className="ms-2.5 sm:ms-4">
                  <h4 className="font-semibold text-white">Gloria</h4>
                  <p className="text-xs text-white/[.8]">May 30, 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="flex h-full flex-col p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-white group-hover:text-white/[.8] sm:text-3xl">
                What CFR (Conversations, Feedback, Recognition) really is about
              </h3>
              <p className="mt-2 text-white/[.8]">
                For a lot of people these days, Measure What Matters.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
