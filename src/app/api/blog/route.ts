import prisma, { main } from "@/app/utils/prisma";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// import cloudinary from "next-cloudinary";

// cloudinary.config({
//   cloud_name: "YOUR_CLOUD_NAME",
//   api_key: "YOUR_API_KEY",
//   api_secret: "YOUR_API_SECRET",
// });

// const prisma = new PrismaClient();

// export async function main() {
//   try {
//     await prisma.$connect();
//   } catch (err) {
//     return Error("Failed to connect database");
//   }
// }

// Get all posts

// export const GET = async (req: Request, res: NextResponse) => {
//   try {
//     // await main();
//     const posts = await prisma.post.findMany();
//     return NextResponse.json({ message: "Success", posts }, { status: 200 });
//   } catch (err) {
//     return NextResponse.json({ message: "Error", err }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// Get Posts per page

export const GET = async (req: Request, res: NextResponse) => {
  // get page query
  const queryPage = req.url.split("&")[0];
  const pageIndex = queryPage.indexOf("=") + 1;
  const page = Number(queryPage[pageIndex]) || 1;

  // get per_page query
  const queryPerPage = req.url.split("&")[1];
  const perPageIndex = queryPerPage.indexOf("=") + 1;
  const perPage = Number(queryPerPage[perPageIndex]) || 6;

  // get search query
  const querySearch = req.url.split("&")[2];
  const searchIndex = querySearch?.indexOf("=") + 1;
  const search = querySearch?.substring(searchIndex);

  const skip = (page - 1) * perPage;
  const take = perPage;

  try {
    // If there is search query, it's filtered by search. if not, return empty where clause
    const whereClause: Prisma.PostWhereInput = search
      ? {
          title: {
            contains: search,
            mode: "insensitive" as Prisma.QueryMode,
          },
        }
      : {};

    const posts = await prisma.post.findMany({
      where: whereClause,
      skip: skip,
      take: take,
    });

    const totalPosts = await prisma.post.count({ where: whereClause });

    return NextResponse.json(
      { message: "Success", posts, totalPosts },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// Create a blog

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, subTitle, content, image, category, userId } =
      await req.json();
    const numericUserId = parseInt(userId, 10);
    const post = await prisma.post.create({
      data: {
        title,
        subTitle,
        image,
        category,
        content,
        userId: numericUserId,
      },
    });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
