"use client";

import React from "react";
import { useFormStatus } from "react-dom";

//TODO: Pending somehow works in this component, but didn't work in its parent component
//TODO: Should be refactored in other button components

function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      {pending ? "Saving... " : "Save changes"}
    </button>
  );
}

export default SaveButton;
