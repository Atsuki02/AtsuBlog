"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";
// import { auth } from "@/app/auth";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { getSession, useSession } from "next-auth/react";
import { authConfig } from "@/app/auth.config";

interface Errors {
  email?: string;
  password?: string;
}

function LoginForm() {
  const ref = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    //TODO add the remember-me functionality
  };

  // const submitFormHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (ref.current) {
  //     const formData = new FormData(ref.current);
  //     const email = formData.get("email") as string;
  //     const password = formData.get("password") as string;

  //     if (!email || !password) return;

  //     // const result = await signIn("credentials", {
  //     //   redirect: false,
  //     //   email,
  //     //   password,
  //     // });

  //     // console.log(result);

  //     // if (result?.error) {
  //     //   console.log(result);
  //     // } else {
  //     //   // router.push("/");
  //     // }
  //   }
  // };

  return (
    <form ref={ref} action={dispatch}>
      <div className="grid gap-y-4">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm dark:text-white">
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
              required
              aria-describedby="email-error"
            />
            <div className="pointer-events-none absolute inset-y-0 end-0 flex hidden items-center pe-3">
              <svg
                className="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p className="mt-2 hidden text-xs text-red-600" id="email-error">
            Please include a valid email address so we can get back to you
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="mb-2 block text-sm dark:text-white"
            >
              Password
            </label>
            <a
              className="text-sm font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="../examples/html/modal-recover-account.html"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
              required
              aria-describedby="password-error"
            />
            <div className="pointer-events-none absolute inset-y-0 end-0 flex hidden items-center pe-3">
              <svg
                className="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          {errorMessage && (
            <p className="mt-2 hidden text-xs text-red-600" id="password-error">
              {errorMessage}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <div className="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="ms-3">
            <label htmlFor="remember-me" className="text-sm dark:text-white">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          aria-disabled={pending}
          className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Log in
        </button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
