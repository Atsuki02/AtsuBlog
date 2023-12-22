"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { submitForm } from "../../actions/formAction";
import SignUpButton from "../Button/SignUpButton";
import { usePathname, useRouter } from "next/navigation";

interface Errors {
  username?: string;
  email?: string;
  password?: string;
  terms?: string;
}

function SignUpForm() {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTermsChecked(e.target.checked);
    if (e.target.checked) {
      setErrors((prevErrors) => ({ ...prevErrors, terms: "" }));
    }
  };

  const submitFormHandler = async  (formData: FormData) => {
    setErrors({});

    let newErrors: Errors = {};

    if (!isTermsChecked) {
      newErrors.terms = "Please accept terms and conditions";
    }

    const result = await submitForm(formData);

    if (result?.error) {
      if (result.error.message === "User with this username already exists") {
        newErrors.username = result.error.message;
      }

      if (result.error.message === "User with this email already exists") {
        newErrors.email = result.error.message;
      }

      if (result.error.message === "8+ characters required") {
        newErrors.password = result.error.message;
      }
    }

    setErrors(newErrors);

    if (result?.success) {
      ref.current?.reset();

      //TODO I'd like to navigate to root directory and dismiss a modal, but catch-all seems to be not working
      router.push("/",);

    }
  };

  return (
    <form ref={ref} action={submitFormHandler}>
      <div className="grid gap-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm dark:text-white"
          >
            Full name
          </label>
          <div className="relative">
            <input
              type="fullName"
              id="fullName"
              name="fullName"
              className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
              required
              aria-describedby="fullName-error"
            />
            {errors.username && (
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
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
            )}
          </div>
          {errors.username && (
            <p className="mt-2 text-xs text-red-600" id="fullName-error">
              {errors.username}
            </p>
          )}
        </div>

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
            {errors.email && (
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
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
            )}
          </div>
          {errors.email && (
            <p className="mt-2 text-xs text-red-600" id="email-error">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm dark:text-white"
          >
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
              required
              aria-describedby="password-error"
            />
            {errors.password && (
              <div className="pointer-events-none absolute inset-y-0 end-0 flex  items-center pe-3">
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
            )}
          </div>
          {errors.password && (
            <p className="mt-2 text-xs text-red-600" id="password-error">
              {errors.password}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <div className="flex">
            <input
              id="terms-and-conditions"
              name="terms-and-conditions"
              type="checkbox"
              className="pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="ms-3">
            <label
              htmlFor="terms-and-conditions"
              className="text-sm dark:text-white"
            >
              I accept the{" "}
              <a
                className="font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        {errors.terms && (
          <p className="mt-2 text-xs text-red-600" id="password-error">
            {errors.terms}
          </p>
        )}

        <SignUpButton />
      </div>
    </form>
  );
}

export default SignUpForm;
