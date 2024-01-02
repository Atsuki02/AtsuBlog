import prisma from "@/app/utils/prisma";
import { NextResponse } from "next/server";

//Get single post
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];
    const post = await prisma.post.findFirst({ where: { id } });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// Edit post
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];

    const { title, subTitle, content, image, category, userId } =
      await req.json();
    const post = await prisma.post.update({
      data: { title, subTitle, content, image, category, userId },
      where: { id },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// Delete post
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];

    const post = await prisma.post.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
