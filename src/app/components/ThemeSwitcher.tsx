"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='relative z-50 flex items-center justify-center bg-zinc-100 dark:bg-zinc-600 rounded-lg sm:h-10 sm:w-10 h-8 w-8 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700'
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className='h-5 w-5 text-orange-300' />
      ) : (
        <MoonIcon className='h-5 w-5 text-stone-800' />
      )}
    </button>
  );
}
