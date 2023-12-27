"use client";
import GoogleButton from "@/app/components/Button/GoogleButton";
import SigninForm from "@/app/components/Form/SigninForm";
import { loginFormSchema } from "@/app/utils/zod/loginFormSchema";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Signin() {
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
    }).then(async (callback) => {
      console.log(callback);
      if (callback?.ok) {
        // redirect after the session is updated
        await getServerSession();
        router.push("/");
      }
    });
  };

  return (
    <div className="min-h-screen-minus-80 flex items-center bg-gray-100  pb-28  dark:bg-slate-900 sm:pb-28">
      <div className="mx-auto w-full max-w-md p-4">
        <div className="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign in
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Don't have an account yet?
                <Link href="/auth/signup">
                  <span className="font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Sign up here
                  </span>
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <GoogleButton />

              <div className="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>

              <form onSubmit={handleSubmit(onSignIn)}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm dark:text-white"
                    >
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
                        autoComplete="username"
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
                        <p className="text-sm text-red-500">
                          {errors?.email.message}
                        </p>
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
                      <Link href="/reset">
                        <span className="text-sm font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                          Forgot password?
                        </span>
                      </Link>
                    </div>
                    <div className="relative">
                      <input
                        {...register("password")}
                        type="password"
                        id="password"
                        name="password"
                        className="block w-full rounded-lg  border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                        aria-describedby="password-error"
                        autoComplete="current-password"
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
                        <p className="text-sm text-red-500">
                          {errors?.password.message}
                        </p>
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
                        className="pointer-events-none mt-0.5 shrink-0 rounded border-gray-200  text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ms-3">
                      <label
                        htmlFor="remember-me"
                        className="text-sm dark:text-white"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
