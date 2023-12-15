// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { db } from "./db";
// import { compare } from "";

// export const authOptions = {
//   adapter: PrismaAdapter(db),
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/auth/login",
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
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
// } satisfies NextAuthOptions;
