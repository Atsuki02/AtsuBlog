import prisma from "@/app/utils/prisma";
import { NextResponse } from "next/server";

// Get the latest 4 posts

export const GET = async (req: Request, res: NextResponse) => {
  try {
    // Get the latest 4 posts
    const posts = await prisma.post.findMany({
      take: 4,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
