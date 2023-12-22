export { default } from "next-auth/middleware";

export const config = { matcher: ["/myBlog", "/post", "/post/:path*"] };
