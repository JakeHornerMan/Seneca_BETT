import express, { Request, Response } from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware';
import { authorizeRole } from '../middlewares/roleMiddleware';
import { AppDataSource } from '../repositorys/appDataSource';
import { SessionStats } from '../models/SessionStats';
import { ModuleStats } from '../models/ModuleStats';
import { GetUser, UserPayload, verifyToken } from '../utils/jwt';
import { GetCourse } from './courseRouter';

const router = express.Router();
const sessionStatsRepository = AppDataSource.getRepository(SessionStats);
const moduleStatsRepository = AppDataSource.getRepository(ModuleStats);

export const DoesCourseContainTopic = (course: any, topic: string): boolean => {
    return course.topicsAndModules.some((element: any) => element.topic === topic);
};

router.post('/startSession', authenticateJWT, authorizeRole('user'), async (req: Request, res: Response) => {
    const {
        courseIdentifier,
        topic,
    } = req.body;
    
    const user = await GetUser(req);
    if (!user) {
        res.status(401).json({ message: 'Unauthorized: No token provided' });
        return;
    }

    let course = await GetCourse(courseIdentifier);
    console.log('Course:', course);
    if (!course) {
        res.status(401).json({ message: 'Course does not exist' });
        return;
    }

    if (DoesCourseContainTopic(course, topic) === false) {
        res.status(401).json({ message: 'Course topic does not exist' });
        return;
    }

    try {
        const sessionStats = sessionStatsRepository.create({
            userId: { id: user.id } as any,
            courseId: { id: course.id } as any,
            courseTitle:course.courseTitle,
            topic,
            sessionStart: new Date(),
        });

        const savedSessionStats = await sessionStatsRepository.save(sessionStats);

        // Return a successful response
        res.status(201).json({
            message: 'Session started created successfully',
            sessionId: savedSessionStats.id,
        });
    } catch (error) {
        console.error('Error creating session and module stats:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

router.put('/endSession', authenticateJWT, authorizeRole('user'), async (req: Request, res: Response) => {
    const { sessionId } = req.body;  // Retrieve sessionId from the request body
    
    // Validate input
    if (!sessionId) {
        res.status(400).json({ message: 'Session ID is required' });
        return;
    }

    try {
        // Find the session by sessionId
        const sessionStats = await sessionStatsRepository.findOne({
            where: { id: sessionId },
            relations: ["userId"],
        });

        if (!sessionStats) {
            res.status(404).json({ message: 'Session not found' });
            return;
        }

        if (sessionStats.isEnd) {
            res.status(400).json({ message: 'Session already ended' });
            return;
        }

        const user = await GetUser(req);
        if (sessionStats.userId.id !== user?.id) {
            res.status(401).json({ message: 'Unauthorized: Session does not belong to user' });
            return;
        }

        sessionStats.sessionEnd = new Date();
        sessionStats.isEnd = true;

        await sessionStatsRepository.save(sessionStats);

        res.status(200).json({
            message: 'Session ended successfully',
            sessionId: sessionStats.id,
            sessionEnd: sessionStats.sessionEnd,
        });
    } catch (error) {
        console.error('Error ending session:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

router.put('/updateSession', authenticateJWT, authorizeRole('user'), async (req: Request, res: Response) => {
    const { sessionId, moduleStats } = req.body; 

    if (!sessionId || !moduleStats) {
        res.status(400).json({ message: 'Session ID and module stats are required' });
        return;
    }

    try {
        const sessionStats = await sessionStatsRepository.findOne({
            where: { id: sessionId },
            relations: ['modulesStats','userId'],
        });

        if (!sessionStats) {
            res.status(404).json({ message: 'Session not found' });
            return;
        }

        if (sessionStats.isEnd) {
            res.status(400).json({ message: 'Session already ended' });
            return;
        }

        const user = await GetUser(req);
        if (sessionStats.userId.id !== user?.id) {
            res.status(401).json({ message: 'Unauthorized: Session does not belong to user' });
            return;
        }

        if (!Array.isArray(moduleStats) || moduleStats.length === 0) {
            res.status(400).json({ message: 'Module stats must be a non-empty array' });
            return;
        }

        let totalSessionPoints = 0;
        let updatedModulesStats;
        if(sessionStats.modulesStats){
            const existingModulesMap = new Map(sessionStats.modulesStats.map(mod => [mod.moduleName, mod]));

            updatedModulesStats = await Promise.all(
                moduleStats.map(async (module: any) => {
                    const existingModule = existingModulesMap.get(module.moduleName);

                    if (existingModule) {
                        existingModule.adaptive = module.adaptive ?? existingModule.adaptive;
                        console.log('Existing Adaptive:', existingModule.adaptive);
                        existingModule.quiz = module.quiz ?? existingModule.quiz;
                        console.log('Existing Quiz:', existingModule.quiz);
                        existingModule.wrongAnswers = module.wrongAnswers ?? existingModule.wrongAnswers;
                        
                        let quizScore = 0;
                        let adaptiveScore = 0;
                        if(module.adaptive?.score)
                            adaptiveScore = module.adaptive?.score;
                        if(module.quiz?.score)
                            quizScore = module.quiz?.score;
                        totalSessionPoints += adaptiveScore + quizScore;
                        return moduleStatsRepository.save(existingModule);
                    } else {
                        // Create a new module entry
                        const newModule = moduleStatsRepository.create({
                            moduleName: module.moduleName,
                            adaptive: module.adaptive ?? [],
                            quiz: module.quiz ?? [],
                            wrongAnswers: module.wrongAnswers ?? [],
                            sessionStats: sessionStats,
                        });
                        let quizScore = 0;
                        let adaptiveScore = 0;
                        if(module.adaptive?.score)
                            adaptiveScore = module.adaptive?.score;
                        if(module.quiz?.score)
                            quizScore = module.quiz?.score;
                        totalSessionPoints += adaptiveScore + quizScore;
                        return moduleStatsRepository.save(newModule);
                    }
                })
            );
        }
        else{
            updatedModulesStats = moduleStats;
        }

        console.log('Updated Modules:', updatedModulesStats);

        sessionStats.modulesStats = updatedModulesStats;
        sessionStats.sessionEnd = new Date();
        sessionStats.sessionPoints = totalSessionPoints;

        await sessionStatsRepository.save(sessionStats);

        res.status(200).json({
            message: 'Session updated successfully',
            sessionId: sessionStats.id,
            updatedModulesStats,
        });
    } catch (error) {
        console.error('Error updating session and module stats:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});


export default router;