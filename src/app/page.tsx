import { greatVibes } from "./layout";

export default function Home() {
  return (
    <div className='p-24 h-[1000px]'>
      <div className=''>
        <p
          className={`${greatVibes.variable} text-black dark:text-white font-title font-bold sm:text-6xl text-xl tracking-widest`}
        >
          AtsuBlog <span className='text-slate-700'>.dev</span>
        </p>
        <p className='pt-6 text-lg italic font-semibold'>
          Journeying Through the World of...
        </p>
      </div>
    </div>
  );
}
