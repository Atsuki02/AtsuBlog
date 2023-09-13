import { motion, AnimatePresence } from "framer-motion";
import { navMenuHideVariants, navMenuShowVariants } from "./motion";

export default function NavMenu({ isOpenMenu }) {
  return (
    <AnimatePresence>
      <motion.nav
        variants={navMenuShowVariants}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='fixed top-0 right-0 bg-slate-600 p-4 h-screen w-1/3'
      >
        <ul className='flex flex-col items-center justify-center w-full text-2xl space-y-2 mt-32'>
          <li className='w-full flex items-center justify-center p-6 dark:text-black text-white hover:bg-slate-500 hover:text-gray-300 transition duration-300'>
            Home
          </li>
          <li className='w-full flex items-center justify-center p-6 dark:text-black text-white hover:bg-slate-500 hover:text-gray-300 transition duration-300'>
            Home
          </li>
          <li className='w-full flex items-center justify-center p-6 dark:text-black text-white hover:bg-slate-500 hover:text-gray-300 transition duration-300'>
            Home
          </li>
          <li className='w-full flex items-center justify-center p-6 dark:text-black text-white hover:bg-slate-500 hover:text-gray-300 transition duration-300'>
            Home
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
}
