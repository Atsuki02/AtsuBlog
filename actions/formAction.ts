"use server";

export const submitForm = async (FormData: FormData) => {
  const formName = FormData.get("fullName");
  const formEmail = FormData.get("email");
  const formPassword = FormData.get("password");
  const formTermsAndConditions = FormData.get("terms-and-conditions");

  const data = {
    username: formName,
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
