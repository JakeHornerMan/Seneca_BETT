import express, { Request, Response } from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware';
import { authorizeRole } from '../middlewares/roleMiddleware';
import { AppDataSource } from '../repositorys/appDataSource';
import { SessionStats } from '../models/SessionStats';
import { ModuleStats } from '../models/ModuleStats';
import { GetUser } from './SessionRouter';
import { validate } from 'uuid';
import { GetCourseSessionTimes, GetSessionDataByCourseId } from '../service/StatService';

const router = express.Router();

router.get('/sessions/:courseId', authenticateJWT, authorizeRole('admin'), async (req: Request, res: Response) => {
    const { courseId } = req.params;

    try {
        const sessionData = await GetSessionDataByCourseId(courseId);
        res.status(200).json(sessionData);
    } catch (error) {
        console.error('Error fetching session stats:', error);
        res.status(500).json({ message: 'Internal server error' });
        return;
    }
});

router.get('/averageTime/:courseId', authenticateJWT, authorizeRole('admin'), async (req: Request, res: Response) => {
    const { courseId } = req.params;

    try {
        const sessionData = await GetCourseSessionTimes(courseId);
        res.status(200).json(sessionData);
    } catch (error) {
        console.error('Error fetching session stats:', error);
        res.status(500).json({ message: 'Internal server error' });
        return;
    }
});

export default router;