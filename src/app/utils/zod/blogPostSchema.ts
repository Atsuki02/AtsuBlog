import * as z from "zod";

const fileSchema = z.object({
  type: z.string().refine((type) => type.startsWith("image/"), {
    message: "File must be an image",
  }),
});

const blogPostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: "Title is required" })
    .max(20, { message: "Title must be 20 characters or less long" }),
  subTitle: z
    .string()
    .trim()
    .min(1, { message: "Subtitle is required" })
    .max(100, { message: "Subtitle must be 100 characters or less long" }),

  //TODO: need to modify the error message
  image: fileSchema.optional(),
  category: z.string().min(1, { message: "Category is required" }),
  content: z
    .string()
    .trim()
    .min(200, { message: "Content must be at least 200 characters long" }),
});

export default blogPostSchema;
