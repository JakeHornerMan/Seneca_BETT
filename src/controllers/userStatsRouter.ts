import express, { Request, Response } from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware';
import { Course } from '../models/Course';
import { authorizeRole } from '../middlewares/roleMiddleware';
import { AppDataSource } from '../repositorys/appDataSource';
import { SessionStats } from '../models/SessionStats';
import { ModuleStats } from '../models/ModuleStats';
import { UserPayload, verifyToken } from '../utils/jwt';
import { GetCourse } from './courseRouter';
import { GetUser } from './SessionRouter';
import { GetSessionDataByCourseAndUserId, GetSessionDataByUserId, UserStatsOnCourse, UserStatsOnCourseSession } from '../service/StatService';

const router = express.Router();

const sessionStatsRepository = AppDataSource.getRepository(SessionStats);
const moduleStatsRepository = AppDataSource.getRepository(ModuleStats);

router.get('/courses/:courseId', authenticateJWT, authorizeRole('user'), async (req: Request, res: Response) => {
    const { courseId } = req.params;

    try {
        //get Attached userid
        const user = await GetUser(req);
        if (!user) {
            res.status(401).json({ message: 'User does not have Session data' });
            return;
        }

        const sessionData = await UserStatsOnCourse(courseId, user.id);
        res.status(200).json(sessionData);
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ message: 'Internal server error' });
        return;
    }
});

router.get('/courses/:courseId/sessions/:sessionId', authenticateJWT, authorizeRole('user'), async (req: Request, res: Response) => {
    const { courseId, sessionId } = req.params;

    try {
        //get Attached userid
        const user = await GetUser(req);
        if (!user) {
            res.status(401).json({ message: 'User does not have Session data' });
            return;
        }

        const sessionData = await UserStatsOnCourseSession(courseId, user.id, sessionId);
        res.status(200).json(sessionData);
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ message: 'Internal server error' });
        return;
    }
});

router.get('/sessions', authenticateJWT, authorizeRole('user'), async (req: Request, res: Response) => {
    try {
        //get Attached userid
        const user = await GetUser(req);
        if (!user) {
            res.status(401).json({ message: 'User does not have Session data' });
            return;
        }

        const sessionData = await GetSessionDataByUserId(user.id);
        
        res.status(200).json(sessionData);
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ message: 'Internal server error' });
        return;
    }
});

export default router;