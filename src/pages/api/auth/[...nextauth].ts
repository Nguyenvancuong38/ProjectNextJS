import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "libs/prisma";
import { ERROR_MESSAGES } from "constants/errors";
import { signInSchema } from "libs/validation/schemas";
import { getUserByEmail, verifyPassword } from "untils/auth";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any) {
        signInSchema.validateSync(credentials);
        const { id, email, password } = credentials;
        const user = await getUserByEmail(email);

        if (!user) {
          throw new Error(ERROR_MESSAGES.INVALID_CREDENTIAL);
        }

        if (!(await verifyPassword(password, user.password))) {
          throw new Error(ERROR_MESSAGES.INVALID_CREDENTIAL);
        }

        return {
          id: id,
          email: user.email,
          password: user.password
        };
      },
    }),
  ],

  adapter: PrismaAdapter(prisma)
});
