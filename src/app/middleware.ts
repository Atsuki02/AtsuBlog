// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/myBlog", "/post"] };

import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
export const { auth: middleware } = NextAuth(authConfig);
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/myPost"],
  // matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
