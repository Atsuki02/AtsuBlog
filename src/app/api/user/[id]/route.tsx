import { db } from "@/app/lib/db";
import prisma from "@/utils/prisma";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
// import { main } from "../../blog/route";

// const prisma = new PrismaClient();

//Get single post
export const GET = async (req: Request, res: NextResponse) => {
  const userId = parseInt(req.url.split("/user/")[1]);
  try {
    const user = await db.user.findUnique({
      where: { id: Number(userId) },
      include: {
        post: true,
        likes: true,
        comments: true,
      },
    });

    return NextResponse.json({ message: "Success", user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
