import { greatVibes } from "../layout";

function Footer() {
  return (
    <div className='flex justify-center items-center w-full h-20 bg-slate-600 p-6'>
      <p
        className={`${greatVibes.variable} text-white dark:text-black font-title font-bold sm:text-xl text-xl tracking-widest`}
      >
        AtsuBlog
      </p>
    </div>
  );
}

export default Footer;
