import { compare } from 'bcryptjs';
import { generateToken } from 'libs/token';
import prisma from 'libs/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { phone ,email, password } = req.body;
  const emailOrPhone = email || phone;

  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: emailOrPhone
          },
          {
            phone: emailOrPhone
          }
        ]
      }
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or phone or password' });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or phone or password' });
    }

    const token = generateToken(user.id);

    return res.status(200).json({
      message: 'Logged in successfully',
      user: user,
      token
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
