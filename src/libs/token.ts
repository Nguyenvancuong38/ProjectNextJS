import jwt from 'jsonwebtoken';

const tokenSecret = process.env.JWT_SECRET || '';

export const generateToken = (userId: number): string => {
  const token = jwt.sign({ userId }, tokenSecret, { expiresIn: '7d' });
  return token;
};

export const verifyToken = (token: string): number | null => {
  try {
    const decodedToken: any = jwt.verify(token, tokenSecret);
    return decodedToken.userId;
  } catch (error) {
    return null;
  }
};
