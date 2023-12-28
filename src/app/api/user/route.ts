import { db } from "@/app/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from "zod";

export async function GET() {
  return NextResponse.json({ success: true });
}

// const userSchema = z.object({
//   name: z.string().min(1, "name is required").max(100),
//   email: z.string().min(1, "Email is required").email("Invalid email"),
//   password: z
//     .string()
//     .min(1, "Password is required")
//     .min(8, "Password must have more than 8 characters"),
// });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, password } = body;

    // check if email already exists

    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this email already exists",
        },
        { status: 409 },
      );
    }

    // check if name already exists
    const existingUserByname = await db.user.findUnique({
      where: { name: name },
    });

    if (existingUserByname) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this name already exists",
        },
        { status: 409 },
      );
    }

    // check if password has more than 8 chars

    const notHas8Chars = password.length < 8;

    if (notHas8Chars) {
      return NextResponse.json(
        {
          user: null,
          message: "8+ characters required",
        },
        { status: 409 },
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("An error occurred:", error); // Log the error for debugging purposes

    // Return a server error response
    return NextResponse.json(
      {
        message: "An internal server error occurred",
      },
      { status: 500 },
    );
  }
}
