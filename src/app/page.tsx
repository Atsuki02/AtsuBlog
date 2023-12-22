
import { greatVibes } from "./layout";
import TopBlogSection from "./components/TopBlogSection";


export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  return (
    <div className="min-h-screen-minus-80 px-6 pb-28 pt-6 sm:py-28">
      <div className=" my-16 flex flex-col items-center justify-center sm:mt-8 sm:block">
        <p
          className={`${greatVibes.variable} text-text-neutral-800 font-title text-4xl font-bold tracking-widest dark:text-white sm:text-6xl`}
        >
          AtsuBlog <span className="text-slate-700">.dev</span>
        </p>
        <p className="pt-3 text-sm font-semibold italic sm:pt-6 sm:text-lg">
          Journeying Through the World of...
        </p>
      </div>
      <TopBlogSection searchParams={searchParams} />
    </div>
  );
}
