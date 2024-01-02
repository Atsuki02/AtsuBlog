"use server";

export const deleteBlog = async (postId: string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};
