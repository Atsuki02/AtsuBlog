// "use server";

// import { signIn } from "next-auth/react";

// export const submitLoginForm = async (FormData: FormData) => {

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
