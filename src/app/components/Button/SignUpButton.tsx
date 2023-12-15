"use client";

import { useFormStatus } from "react-dom";

export default function SignUpButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      aria-disabled={pending}
    >
      {pending ? "Signing up..." : "Sign up"}
    </button>
  );
}
