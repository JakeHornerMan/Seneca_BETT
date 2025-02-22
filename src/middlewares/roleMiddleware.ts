import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export const authorizeRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization; // Get 'Authorization' header

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token (after 'Bearer ')

    console.log('Extracted Token:', token);

    const user = verifyToken(token); // Verify the token
    console.log(user);
    if (user?.role !== role) {
    res.status(403).json({
        message: 'Access denied. You do not have the right permissions.',
      });
      return;
    }
    next();
  };
};