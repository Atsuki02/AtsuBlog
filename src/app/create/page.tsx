"use client";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { submitPostAction } from "../actions/formAction";
import clsx from "clsx";
import DeleteButton from "../components/Button/DeleteButton";
import CreateButton from "../components/Button/CreateButton";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../redux/slices/modalSlice";
import { AppDispatch, RootState } from "../redux/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import DiscardModal from "../components/modal/DiscardModal";

export default function Post() {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [formState, formAction] = useFormState(submitPostAction, {
    message: "",
    errors: undefined,
    fieldValues: {
      title: "",
      subTitle: "",
      image: null,
      category: "",
      content: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (formState.message === "success") {
      formRef.current?.reset();
      router.back();
      toast.success("Post published successfully.");
    } else if (formState.message === "error") {
      toast.error("An error occurred while posting. Please try again.");
    }
  }, [formState]);

  return (
    <div className="min-h-screen-80 px-6 pb-48 pt-28 sm:py-48">
      <div className="mx-auto max-w-2xl">
        <div className="mx-4 flex justify-between">
          {/* when creating new post */}
          <h2 className="text-xl font-bold text-gray-800 dark:text-white sm:text-3xl">
            Create new post
          </h2>

          {/* when editing */}
          {/* <h2 className="text-xl font-bold text-gray-800 dark:text-white sm:text-3xl">
            Edit post
          </h2> */}

          {/* when editing */}
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-red-500 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={() => dispatch(setIsOpen(true))}
          >
            Delete
          </button>
        </div>

        <div className="relative z-10 mt-5 rounded-xl border bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:mt-10 md:p-10">
          <form ref={formRef} action={formAction}>
            {/* -------- title --------- */}
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
                name="title"
                defaultValue={formState.fieldValues.title}
                className={clsx(
                  "block w-full rounded-lg border-[1px] px-4 py-3 text-sm focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600",
                  {
                    "border-red-500": formState.errors?.title,
                    "border-gray-200": !formState.errors?.title,
                    "dark:border-gray-700": !formState.errors?.title,
                  },
                )}
                placeholder="title"
              />
              {formState.errors?.title && (
                <div className="flex  items-center space-x-1 py-4">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">
                    {formState.errors?.title}
                  </p>
                </div>
              )}
            </div>

            {/* -------- subtitle --------- */}
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="subTitle"
                className="mb-2 block text-sm font-medium dark:text-white"
              >
                Subtitle
              </label>
              <input
                type="text"
                id="subTitle"
                name="subTitle"
                defaultValue={formState.fieldValues.subTitle}
                className={clsx(
                  "block w-full rounded-lg border-[1px] px-4 py-3 text-sm focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600",
                  {
                    "border-red-500": formState.errors?.subTitle,
                    "border-gray-200": !formState.errors?.subTitle,
                    "dark:border-gray-700": !formState.errors?.subTitle,
                  },
                )}
                placeholder="subtitle"
              />
              {formState.errors?.subTitle && (
                <div className="flex  items-center space-x-1 py-4">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">
                    {formState.errors?.subTitle}
                  </p>
                </div>
              )}
            </div>

            {/* -------- image --------- */}

            <div className="mb-4 space-y-2 sm:mb-8">
              <label
                htmlFor="af-submit-app-upload-images"
                className="mt-2.5 inline-block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                Preview image
              </label>

              <label
                htmlFor="af-submit-app-upload-images"
                className={clsx(
                  "group relative block  cursor-pointer rounded-lg border-[1px] border-dashed border-gray-200 p-4 text-center focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700 sm:p-7",
                  {
                    "border-red-500": formState.errors?.image,
                    "border-gray-200": !formState.errors?.image,
                    "dark:border-gray-700": !formState.errors?.image,
                  },
                )}
              >
                <input
                  id="af-submit-app-upload-images"
                  name="image"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleImageChange}
                />
                {!imageFile && (
                  <>
                    <svg
                      className="mx-auto h-10 w-10 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
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
                  </>
                )}
                {previewUrl && (
                  <>
                    <div className="flex items-center justify-center py-4">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full max-w-xs"
                      />
                    </div>
                    <div className="absolute end-2 top-2">
                      <DeleteButton
                        onClick={() => {
                          setImageFile(null);
                          setPreviewUrl(null);
                        }}
                      />
                    </div>
                  </>
                )}
              </label>
              {formState.errors?.image && (
                <div className="flex  items-center space-x-1 py-4">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">
                    {formState.errors?.image}
                  </p>
                </div>
              )}
            </div>
            {/* -------- category --------- */}

            <div className="mb-4 space-y-2 sm:mb-8">
              <label
                htmlFor="af-submit-app-category"
                className="mt-2.5 inline-block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                Category
              </label>

              <select
                id="af-submit-app-category"
                name="category"
                defaultValue={formState.fieldValues.category}
                className={clsx(
                  "block w-full rounded-lg border-[1px] border-gray-200 px-3 py-2 pe-9 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600",
                  {
                    "border-red-500": formState.errors?.category,
                    "border-gray-200": !formState.errors?.category,
                    "dark:border-gray-700": !formState.errors?.category,
                  },
                )}
              >
                <option value="" disabled hidden>
                  Select a category
                </option>
                <option>Technology</option>
                <option>Lifestyle</option>
              </select>
              {formState.errors?.category && (
                <div className="flex  items-center space-x-1 py-4">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">
                    {formState.errors?.category}
                  </p>
                </div>
              )}
            </div>

            {/* -------- content --------- */}

            <div className="mb-4 space-y-2 sm:mb-8">
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
                  defaultValue={formState.fieldValues.content}
                  className={clsx(
                    "block w-full rounded-lg border-[1px] border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600",
                    {
                      "border-red-500": formState.errors?.content,
                      "border-gray-200": !formState.errors?.content,
                      "dark:border-gray-700": !formState.errors?.content,
                    },
                  )}
                  placeholder="Write content here..."
                ></textarea>
              </div>
              {formState.errors?.content && (
                <div className="flex  items-center space-x-1 py-4">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">
                    {formState.errors?.content}
                  </p>
                </div>
              )}
            </div>

            {/* When creating a new post */}

            <CreateButton />
          </form>
        </div>
      </div>

      {/* delete modal */}

      {isOpen && <DiscardModal />}
    </div>
  );
}
