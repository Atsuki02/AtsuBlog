export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/myBlog", "/blog", "/blog/:path*", "/create", "/create/:path*"],
};
