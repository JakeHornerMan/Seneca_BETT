import { Request, Response, NextFunction } from 'express';

export const authorizeRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req?.user;
    if (user?.role !== role) {
    res.status(403).json({
        message: 'Access denied. You do not have the right permissions.',
      });
      return;
    }
    next();
  };
};