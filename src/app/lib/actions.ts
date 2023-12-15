"use server";
import { redirect } from "next/dist/server/api-utils";
import { AuthError } from "next-auth";
import { signIn } from "../auth";
import { authConfig } from "../auth.config";
import { getSession } from "next-auth/react";
// "use server";
// import { AuthError } from "next-auth";
// import { signIn } from "../auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const credentials: Record<any, any> = {};
    formData.forEach((value, key) => {
      credentials[key] = value;
    });

    await signIn("credentials", {
      ...credentials,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

// export async function getUserInfo() {
//   return await getSession(authConfig);
// }

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     console.log(formData);
//     await signIn("credentials", { ...formData });
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return "Invalid credentials.";
//         default:
//           return "Something went wrong.";
//       }
//     }
//     throw error;
//   }
// }
