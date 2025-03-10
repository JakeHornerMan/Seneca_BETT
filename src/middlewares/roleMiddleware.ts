import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export const authorizeRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Unauthorized: No token provided' });
        return;
    }

    const token = authHeader.split(' ')[1];

    // console.log('Extracted Token:', token);

    const user = verifyToken(token);
    // console.log(user);
    if (user?.role !== role) {
    res.status(403).json({
        message: 'Access denied. You do not have the right permissions.',
      });
      return;
    }
    next();
  };
};