// "use server";

// import { signIn } from "next-auth/react";

// export const submitSigninForm = async (FormData: FormData) => {

//   return result;
//   const formEmail = FormData.get("email");
//   const formPassword = FormData.get("password");

//   const data = {
//     email: formEmail,
//     password: formPassword,
//   };

//   try {
//     const response = await fetch("http://localhost:3000/api/user", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       return { success: true };
//     } else {
//       const errorData = await response.json();
//       return {
//         success: false,
//         error: errorData,
//       };
//     }
//   } catch (error) {
//     return {
//       success: false,
//       error: (error as any).message || "Something went wrong",
//     };
//   }
// };

"use server";
import { SigninFormState } from "@/app/types";
import AuthError from "next-auth";
import { signIn } from "next-auth/react";

export default async function authenticate(
  prevState: SigninFormState,
  formData: FormData,
): Promise<SigninFormState> {
  try {
    console.log("d");
    // Extract data from the formData object
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const rememberMe = formData.get("rememberMe") as string;

    // Attempt to sign in using NextAuth.js
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log("dd");

    // If the sign-in is successful, return a success message and field values
    return {
      message: "success",
      errors: undefined,
      fieldValues: {
        email,
        password,
        rememberMe,
      },
    };
  } catch (error) {
    // Handle authentication errors, if any
    // if (error instanceof AuthError) {
    //   return {
    //     message: "error",
    //     errors: undefined, // You may want to handle these errors appropriately
    //     fieldValues: {
    //       email: formData.get("email") as string,
    //       password: formData.get("password") as string,
    //       rememberMe: formData.get("rememberMe") as string,
    //     },
    //   };
    // }

    // Handle other types of errors here if needed
    // You can also return a default error message and values
    return {
      message: "error",
      errors: undefined, // You may want to handle these errors appropriately
      fieldValues: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        rememberMe: formData.get("rememberMe") as string,
      },
    };
  }
}
