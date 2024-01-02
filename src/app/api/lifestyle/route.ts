import prisma from "@/app/utils/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        category: "Lifestyle",
      },
    });

    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
