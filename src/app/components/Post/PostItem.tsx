import { formatDate } from "@/utils/format";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const { id, title, image, date } = post;
  const formattedDate = formatDate(new Date(date));
  return (
    <Link href={`/blog/${id}`}>
      <div className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
        <Image
          src={image}
          alt={title}
          width="600"
          height="360"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

        <div className="relative mt-auto p-4">
          <span className="block text-sm text-gray-200">{formattedDate}</span>
          <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
            {title}
          </h2>

          <span className="font-semibold text-indigo-300">Read more</span>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
