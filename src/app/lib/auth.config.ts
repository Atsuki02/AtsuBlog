// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { db } from "./db";
// import { compare } from "bcrypt";

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(db),
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/auth/login",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",

//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         console.log(credentials);
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Email and Password are required.");
//         }

//         try {
//           const existingUser = await db.user.findUnique({
//             where: { email: credentials?.email },
//           });
//           if (!existingUser) {
//             throw new Error("User not found.");
//           }

//           const passwordMatch = await compare(
//             credentials.password,
//             existingUser.password,
//           );

//           if (!passwordMatch) {
//             throw new Error("Incorrect password.");
//           }

//           return {
//             id: `${existingUser.id}`,
//             username: existingUser.username,
//             email: existingUser.email,
//           };
//         } catch (error) {
//           console.error(error);
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     jwt: ({ token, user }) => {
//       if (user) {
//         return {
//           ...token,
//           username: user.username,
//         };
//       }
//       return token;
//     },
//     session: ({ session, user, token }) => {
//       return {
//         ...session,
//         user: {
//           ...session.user,
//           username: token.username,
//         },
//       };
//     },
//   },
// };

// import type { NextAuthConfig } from "next-auth";

// export const authConfig = {
//   pages: {
//     signIn: "/auth/login",
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isHome = nextUrl.pathname.startsWith("/");
//       if (isHome) {
//         if (isLoggedIn) return true;
//         return false; // Redirect unauthenticated users to login page
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL("/", nextUrl));
//       }
//       return true;
//     },
//   },
//   providers: [], // Add providers with an empty array for now
// } satisfies NextAuthConfig;
