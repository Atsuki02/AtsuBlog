import { deleteBlog } from "@/app/actions/DeleteBlog";
import { setIsOpen } from "@/app/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function DeleteModal({ postId }: { postId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const router = useRouter();
  const handleDelete = async () => {
    setIsDeleting(true);
    const res = await deleteBlog(postId);
    if (res.message === "Success") {
      dispatch(setIsOpen(false));
      router.push("/");
      toast.success("Post deleted successfully.");
    } else {
      toast.success("Failed to delete the post. Please try again.");
    }
    setIsDeleting(false);
  };

  return (
    <>
      <div
        id="hs-danger-alert"
        className="hs-overlay fixed start-0 top-0 z-[60] h-full w-full overflow-y-auto overflow-x-hidden"
      >
        <div className="m-3 mt-0 opacity-100 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 md:mx-auto md:w-full md:max-w-2xl">
          <div className="relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="absolute end-2 top-2">
              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-danger-alert"
                onClick={() => dispatch(setIsOpen(false))}
              >
                <span className="sr-only">Close</span>
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto p-4 sm:p-10">
              <div className="flex gap-x-4 md:gap-x-7">
                <span className="inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border-4 border-red-50 bg-red-100 text-red-500 dark:border-red-600 dark:bg-red-700 dark:text-red-100 sm:h-[62px] sm:w-[62px]">
                  <svg
                    className="h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </span>

                <div className="grow">
                  <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                    Delete your post
                  </h3>
                  <p className="text-gray-500">
                    Permanently remove your post. This action is not reversible,
                    so please continue with caution.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-x-2 border-t bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-danger-alert"
                onClick={() => dispatch(setIsOpen(false))}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                {isDeleting ? "Deleting..." : "Delete your post"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
