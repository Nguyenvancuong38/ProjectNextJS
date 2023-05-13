// api/auth/signup.ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'libs/prisma';
import bcrypt from 'bcryptjs';
import { generateToken } from 'libs/token';
import validator from 'validator';

export default async function signupHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { email, password, firstName, lastName } = req.body;

  delete req.body.confirmPassword;

  // Validate request body
  if (!email || !password || !firstName || !lastName) {
    res.status(400).json({ error: 'Email, password, firstName and lastName are required' });
    return;
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    res.status(409).json({ error: 'email already exists' });
    return;
  }

  // Validate email
  if (!validator.isEmail(email)) {
    res.status(400).json({ error: 'Invalid email address' });
    return;
  }

  // Validate password
  if (
    !validator.isLength(password, { min: 6 }) ||
    !validator.matches(password, /[a-z]/) ||
    !validator.matches(password, /[A-Z]/) ||
    !validator.matches(password, /[0-9]/) ||
    !validator.matches(password, /[!@#$%^&*(),.?":{}|<>]/)
  ) {
    res.status(400).json({
      error:
        'Password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character',
    });
    return;
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const name = `${lastName} ${firstName}`;

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        ...req.body,
        password: hashedPassword,
        name: name,
      },
    });

    // Generate JWT token
    const token = generateToken(newUser.id);

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
}
