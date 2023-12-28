"use server";

import { PostFields, PostFormState } from "@/app/types";

import { ZodError } from "zod";
import blogPostSchema from "../utils/zod/blogPostSchema";
import { getCurrentUser } from "./getCurrentUser";
import { getSession, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

// sign in func
export const submitForm = async (FormData: FormData) => {
  const formName = FormData.get("fullName");
  const formEmail = FormData.get("email");
  const formPassword = FormData.get("password");
  const formTermsAndConditions = FormData.get("terms-and-conditions");

  const data = {
    name: formName,
    email: formEmail,
    password: formPassword,
    termsAndConditions: formTermsAndConditions,
  };

  try {
    const response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: (error as any).message || "Something went wrong",
    };
  }
};

// submit post func
export async function submitPostAction(
  prevState: PostFormState,
  formData: FormData,
): Promise<PostFormState> {
  const title = formData.get("title") as string;
  const subTitle = formData.get("subTitle") as string;
  const image = formData.get("image") as File;
  const category = formData.get("category") as string;
  const content = formData.get("content") as string;

  const form = new FormData();
  form.append("file", image);
  form.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME as string,
  );

  try {
    blogPostSchema.parse({
      title,
      subTitle,
      image,
      category,
      content,
    });

    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: form,
      },
    );

    const uploadedImageData = await uploadResponse.json();
    const imageUrl = uploadedImageData.secure_url;

    const currentUser = await getCurrentUser();
    const session = await getServerSession();
    console.log(session);

    console.log(currentUser);

    const postData = {
      title: title.trim(),
      subTitle: subTitle.trim(),
      image: imageUrl,
      category,
      content: content.trim(),

      // TODO: Should be the userId of the logged-in user
      userId: "clqowg12m0000uf57ckhz3bap",
    };

    await fetch("http://localhost:3000/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    return {
      message: "success",
      errors: undefined,
      fieldValues: {
        title: "",
        subTitle: "",
        image: null,
        category: "",
        content: "",
      },
    };
  } catch (error) {
    const zodError = error as ZodError;
    const errorMap = zodError.flatten().fieldErrors;

    return {
      message: "error",
      errors: {
        title: errorMap["title"]?.[0] ?? "",
        subTitle: errorMap["subTitle"]?.[0] ?? "",
        image: errorMap["image"]?.[0] ?? "",
        category: errorMap["category"]?.[0] ?? "",
        content: errorMap["content"]?.[0] ?? "",
      },

      //TODO: Should find the way to not pass File obj in the client components since the passed data shouldn't include class
      fieldValues: {
        title,
        subTitle,
        // image,
        category,
        content,
      } as PostFields,
    };
  }
}
