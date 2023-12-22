import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
    return prisma;
  } catch (err) {
    console.error("Failed to connect to the database:", err);
    throw new Error("Failed to connect to the database");
  }
}

export default prisma;
