'use client'
import CloseButton from "@/app/components/Button/CloseButton";
import GoogleButton from "@/app/components/Button/GoogleButton";
import SigninForm from "@/app/components/Form/SigninForm";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MouseEvent } from "react";

export default function SigninModal() {


  // TODO: remove this when [...catchAll] works
  // After Signing in, the page is supposed to navigate to root directory and dismiss the modal,
  // but the modal is not working, so this is a temp solution
  const pathname = usePathname();
  if (!pathname.includes('auth')) {
    return null;
  }

  return (
    <div
      id="hs-modal-signin"
      className="hs-overlay fixed start-0 top-0 z-[60] h-full w-full overflow-y-auto overflow-x-hidden"
    >
      <div className="relative m-3 mt-0 w-full opacity-100 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="absolute end-2 top-2">
          <CloseButton />
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">
                Log in
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Don't have an account yet?
                <Link href='/auth/signup'>
                <span
                  className="font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Sign up here
                </span>
                </Link>
              </p>
            </div>

            <div className="mt-5">
             <GoogleButton/>

              <div className="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>

              <SigninForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
