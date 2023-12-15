"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setIsOpen } from "../redux/slices/navSlice";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavBar() {
  const { isOpen } = useSelector((state: RootState) => state.nav);
  const dispatch: AppDispatch = useDispatch();

  const pathname = usePathname();
  useEffect(() => {
    dispatch(setIsOpen(false));
  }, [pathname]);

  return (
    <>
      <div
        className="relative z-50 flex h-12 w-12 cursor-pointer flex-col items-center justify-center space-y-1.5 sm:m-4 sm:h-16 sm:w-16 sm:space-y-2"
        onClick={() => dispatch(setIsOpen(!isOpen))}
      >
        <div
          className={
            isOpen
              ? "dark:white h-[0.2rem] w-7 translate-y-[7.5px] rotate-45 bg-white transition-all duration-100 sm:h-[0.2rem] sm:w-7 sm:translate-y-[0.6rem]"
              : "h-[0.2rem] w-7 bg-white dark:bg-slate-800 sm:h-[0.2rem] sm:w-7"
          }
        />
        <div
          className={
            isOpen
              ? "w-[22px] opacity-0 transition-all duration-100"
              : "h-[0.2rem] w-7 bg-white dark:bg-slate-800 sm:h-[0.2rem] sm:w-7"
          }
        />
        <div
          className={
            isOpen
              ? "dark:white h-[0.2rem] w-7 -translate-y-[7.5px] -rotate-45 bg-white transition-all duration-100 sm:h-[0.2rem] sm:w-7 sm:-translate-y-[0.6rem]"
              : "h-[0.2rem] w-7 bg-white dark:bg-slate-800 sm:h-[0.2rem] sm:w-7"
          }
        />
      </div>

      {isOpen && (
        <div className="fixed start-0 top-0 z-40 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black opacity-50"></div>
      )}
    </>
  );
}
