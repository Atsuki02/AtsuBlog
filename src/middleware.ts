export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/myBlog",
    "/blog",
    "/blog/:path*",
    "/myPost",
    "/myPost/:path*",
    "/create",
    "/create/:path*",
  ],
};
