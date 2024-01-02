"use client";

import React, { ChangeEvent, useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import authenticate from "../../actions/signinAction";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/app/utils/zod/loginFormSchema";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface SigninForm {
  email?: string;
  password?: string;
  rememberMe?: string;
}

function SigninForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    mode: "onSubmit",
    resolver: zodResolver(loginFormSchema),
  });

  const onSignIn = (data: SigninForm) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        toast.success("You have successfully logged in.");
        router.replace("/");
      } else {
        const error = callback?.error || "Login failed. Please try again.";
        toast.error(error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSignIn)}>
      <div className="grid gap-y-4">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm dark:text-white">
            Email address
          </label>
          <div className="relative">
            <input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
              aria-describedby="email-error"
            />
            <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
              {errors?.email?.message && (
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
              )}
            </div>
          </div>
          {errors?.email?.message && (
            <div className="flex  items-center space-x-1 py-4">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errors?.email.message}</p>
            </div>
          )}
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
              {...register("password")}
              type="password"
              id="password"
              name="password"
              className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
              aria-describedby="password-error"
            />
            <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
              {errors?.password?.message && (
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
              )}
            </div>
          </div>
          {errors?.password?.message && (
            <div className="flex  items-center space-x-1 py-4">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errors?.password.message}</p>
            </div>
          )}
        </div>

        <div className="flex items-center">
          <div className="flex">
            <input
              {...register("rememberMe", { required: true })}
              id="remember-me"
              name="rememberMe"
              type="checkbox"
              className="pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
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
          className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Log in
        </button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        ></div>
      </div>
    </form>
  );
}

export default SigninForm;
