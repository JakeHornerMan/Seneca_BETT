import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

declare module 'express' {
export interface Request {
    user?: any;
}
}

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

  if (!token) {
        res
      .status(401)
      .json({ message: 'Access denied. No token provided.' });
      return;
  }

  try {
    req.body.user = verifyToken(token); // Attach user info to request
    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};