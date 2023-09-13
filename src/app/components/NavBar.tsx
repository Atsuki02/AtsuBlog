export default function NavBar({ isOpenMenu, setIsOpenMenu }) {
  return (
    <>
      <div
        className='relative z-50 h-12 w-12 cursor-pointer flex flex-col items-center justify-center space-y-1.5 sm:m-4 sm:h-16 sm:w-16 sm:space-y-2'
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <div
          className={
            isOpenMenu
              ? "h-[0.2rem] w-7 translate-y-[7.5px] rotate-45 dark:bg-slate-800 bg-white transition-all duration-100 sm:h-[0.2rem] sm:w-7 sm:translate-y-[0.6rem]"
              : "h-[0.2rem] w-7 dark:bg-slate-800 bg-white sm:h-[0.2rem] sm:w-7"
          }
        />
        <div
          className={
            isOpenMenu
              ? "w-[22px] opacity-0 transition-all duration-100"
              : "h-[0.2rem] w-7 dark:bg-slate-800 bg-white sm:h-[0.2rem] sm:w-7"
          }
        />
        <div
          className={
            isOpenMenu
              ? "h-[0.2rem] w-7 -translate-y-[7.5px] -rotate-45 dark:bg-slate-800 bg-white transition-all duration-100 sm:h-[0.2rem] sm:w-7 sm:-translate-y-[0.6rem]"
              : "h-[0.2rem] w-7 dark:bg-slate-800 bg-white sm:h-[0.2rem] sm:w-7"
          }
        />
      </div>
    </>
  );
}
