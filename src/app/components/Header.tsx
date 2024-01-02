"use client";

import NavBar from "./NavBar";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { greatVibes } from "../layout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";

function Header() {
  const path = usePathname();
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const { isOpen } = useSelector((state: RootState) => state.nav);
  const router = useRouter();

  const handleLogOut = async () => {
    const result = await signOut({ redirect: false, callbackUrl: "/" });
    if (result.url) {
      toast.info("You have been logged out.");
      router.push(result.url);
    } else {
      toast.error("Error occurred during logout.");
    }
  };

  return (
    <div className="sticky left-0 right-0 top-0 z-30 flex h-20 w-full justify-between bg-slate-600 p-6 shadow-xl">
      <div className="flex flex-row items-center">
        <NavBar />
        <div className="hidden sm:block">
          <ThemeSwitcher />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/">
          <p
            className={`${greatVibes.variable}  font-title text-xl font-bold tracking-widest text-white dark:text-neutral-800 sm:text-3xl`}
          >
            AtsuBlog
          </p>
        </Link>
      </div>

      <div className="flex items-center justify-between gap-2">
        {isAuthenticated && (
          <>
            <button
              onClick={handleLogOut}
              type="button"
              className="mr-4 inline-flex items-center gap-x-2 rounded-lg border border-gray-200  px-4 py-2.5 text-sm font-medium text-white shadow-sm disabled:pointer-events-none disabled:opacity-50 dark:border-white dark:text-white  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Log out
            </button>
          </>
        )}
        {!isAuthenticated && path !== "/auth/signin" && (
          <Link href="/auth/signin">
            <button
              type="button"
              className="mr-4 hidden items-center  gap-x-2 rounded-lg border border-gray-200 px-4  py-2.5 text-sm font-medium text-white shadow-sm disabled:pointer-events-none disabled:opacity-50 dark:border-white dark:text-white dark:focus:outline-none  dark:focus:ring-1 dark:focus:ring-gray-600 sm:inline-flex"
            >
              Log In
            </button>
          </Link>
        )}

        {!isAuthenticated && path !== "/auth/signup" && (
          <Link href="/auth/signup">
            <button
              type="button"
              className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-xs font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:mr-8 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              Sign Up
            </button>
          </Link>
        )}

        {isOpen && <NavMenu />}
      </div>
    </div>
  );
}

export default Header;
