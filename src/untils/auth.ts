import { User } from "@prisma/client";
import { compare } from "bcryptjs";
import prisma from "libs/prisma";

export async function getUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    return user;
  }
  
export async function verifyPassword(lPassword: string, password: string): Promise<boolean> {
    return await compare(lPassword, password);
}