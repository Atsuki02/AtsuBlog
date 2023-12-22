import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().nonempty('Email is required.').email('Please enter a valid email address.'),
    password: z.string().nonempty('password is required.')
})