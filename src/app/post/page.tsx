"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Post() {
  const { isOpen } = useSelector((state: RootState) => state.nav);

  return (
    <div
      className={`min-h-screen-80 px-6 pb-28 pt-6 sm:py-28 ${
        isOpen ? "visible bg-black bg-opacity-50" : ""
      }`}
    >
      <div className="mx-auto max-w-2xl">
        <div className="mx-4 flex justify-between">
          {/* when creating new post */}
          {/* <h2 className="text-xl font-bold text-gray-800 dark:text-white sm:text-3xl">
            Create new post
          </h2> */}

          {/* when editing */}
          <h2 className="text-xl font-bold text-gray-800 dark:text-white sm:text-3xl">
            Edit post
          </h2>

          {/* when editing */}
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-red-500 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Delete
          </button>
        </div>

        <div className="relative z-10 mt-5 rounded-xl border bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:mt-10 md:p-10">
          <form>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="title"
              />
            </div>

            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="subtitle"
                className="mb-2 block text-sm font-medium dark:text-white"
              >
                Subtitle
              </label>
              <input
                type="subtitle"
                id="subtitle"
                className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="subtitle"
              />
            </div>

            <div className="mb-4 space-y-2 sm:mb-8">
              <label
                htmlFor="af-submit-app-upload-images"
                className="mt-2.5 inline-block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                Preview image
              </label>

              <label
                htmlFor="af-submit-app-upload-images"
                className="group block cursor-pointer rounded-lg border-2 border-dashed border-gray-200 p-4 text-center focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700 sm:p-7"
              >
                <input
                  id="af-submit-app-upload-images"
                  name="af-submit-app-upload-images"
                  type="file"
                  className="sr-only"
                />
                <svg
                  className="mx-auto h-10 w-10 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                  />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
                <span className="mt-2 block text-sm text-gray-800 dark:text-gray-200">
                  Browse your device or{" "}
                  <span className="text-blue-600 group-hover:text-blue-700">
                    drag 'n drop'
                  </span>
                </span>
                <span className="mt-1 block text-xs text-gray-500">
                  Maximum file size is 2 MB
                </span>
              </label>
            </div>

            <div className="mb-4 space-y-2 sm:mb-8">
              <label
                htmlFor="af-submit-app-category"
                className="mt-2.5 inline-block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                Category
              </label>

              <select
                id="af-submit-app-category"
                className="block w-full rounded-lg border-gray-200 px-3 py-2 pe-9 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
              >
                <option selected>Select a category</option>
                <option>Ecommerce</option>
                <option>Finance</option>
                <option>Marketplace</option>
                <option>Social</option>
                <option>Others</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="content"
                className="mb-2 block text-sm font-medium dark:text-white"
              >
                Content
              </label>
              <div className="mt-1">
                <textarea
                  id="content"
                  name="content"
                  rows={10}
                  className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Write content here..."
                ></textarea>
              </div>
            </div>

            {/* When creating a new post */}

            {/* <div className="mt-6 grid">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Create post
              </button>
            </div> */}

            {/* When editing a post */}

            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
