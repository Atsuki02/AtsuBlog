import React from "react";

function Loader() {
  return (
    <div className="mt-48 flex items-center justify-center">
      <div
        className="inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600 dark:text-blue-500 sm:h-12 sm:w-12"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
