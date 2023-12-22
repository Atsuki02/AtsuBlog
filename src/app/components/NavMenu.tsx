"use client";
import { motion, AnimatePresence } from "framer-motion";
import { navMenuShowVariantsFromLeft } from "../lib/motion";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { useMediaQuery } from "../lib/useMediaQuery";

export default function NavMenu() {
  const matches = useMediaQuery("(min-width: 675px)");
  return (
    <AnimatePresence>
      <motion.nav
        variants={matches ? undefined : navMenuShowVariantsFromLeft}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h-90 fixed left-0 right-0 top-20 z-50 w-full bg-white p-2 px-3 dark:bg-gray-800"
      >
        <ul className="mt-8 flex w-full flex-col items-baseline justify-center space-y-3 overflow-hidden px-2 text-xs font-semibold">
          <Link href="/">
            <li className="flex w-full items-center justify-start py-2 text-black transition dark:text-white">
              Home
            </li>
          </Link>
          <Link href="/">
            <li className="flex w-full items-center justify-start py-2 text-black transition dark:text-white">
              Category
            </li>
          </Link>
          <div className="mx-3 flex flex-col items-start justify-start gap-4 border-l-[1px] pl-6">
            <Link href="/latest">
              <div className="flex items-start dark:text-white">Latest</div>
            </Link>
            <div className="flex items-start dark:text-white">Tech</div>
            <div className="flex items-start dark:text-white">Others</div>
          </div>
          <Link href="/myPost">
            <li className="flex w-full items-center justify-start py-2 text-black transition dark:text-white">
              My post
            </li>
          </Link>
          <Link href="/post">
            <li className="flex w-full items-center justify-start py-2 text-black transition dark:text-white">
              Create post
            </li>
          </Link>
          <li className=" box-border flex w-full items-center justify-between border-t-[1px] py-4 pr-2 text-black transition dark:text-white">
            <Link href="/auth/signin">
              <div>Signin</div>
            </Link>
            <ThemeSwitcher />
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
}
