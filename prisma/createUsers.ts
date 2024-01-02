// createUsers.ts
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export async function createUsers() {
  const hashedPassword1 = await hash("password123", 10);
  await prisma.user.create({
    data: {
      name: "Alice",
      password: hashedPassword1,
      email: "alice@example.com",
    },
  });

  const hashedPassword2 = await hash("password456", 10);
  await prisma.user.create({
    data: {
      name: "Bob",
      password: hashedPassword2,
      email: "bob@example.com",
    },
  });
}
