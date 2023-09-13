"use client";

import { useState } from "react";
import NavBar from "./NavBar";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { greatVibes } from "../layout";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className='sticky top-0 right-0 left-0 w-full flex justify-between h-20 bg-slate-600 p-6'>
      <div className='flex justify-center items-center'>
        <Link href='/'>
          <p
            className={`${greatVibes.variable} text-white dark:text-black font-title font-bold sm:text-3xl text-xl tracking-widest`}
          >
            AtsuBlog
          </p>
        </Link>
      </div>
      <div className='flex justify-between items-center gap-2'>
        <ThemeSwitcher />

        <NavBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        {isOpenMenu && <NavMenu isOpenMenu={isOpenMenu} />}
      </div>
    </div>
  );
}

export default Header;
