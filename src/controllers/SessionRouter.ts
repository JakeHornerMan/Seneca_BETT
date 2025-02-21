import express, { Request, Response } from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware';
import { Course } from '../models/Course';
import { authorizeRole } from '../middlewares/roleMiddleware';
import { AppDataSource } from '../repositorys/appDataSource';
import { SessionStats } from '../models/SessionStats';
import { ModuleStats } from '../models/ModuleStats';
import { UserPayload, verifyToken } from '../utils/jwt';
import { GetCourse } from './courseRouter';

const router = express.Router();
const sessionStatsRepository = AppDataSource.getRepository(SessionStats);
const moduleStatsRepository = AppDataSource.getRepository(ModuleStats);


export const GetUser = (req: Request): UserPayload|undefined => {
    const authHeader = req.headers.authorization; // Get 'Authorization' header

    if (authHeader){
        const token = authHeader.split(' ')[1]; // Extract the token (after 'Bearer ')

        console.log('Extracted Token:', token);
        return verifyToken(token);
    }
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
    if (!course) {
        res.status(401).json({ message: 'Course does not exist' });
        return;
    }

    try {
        // Create SessionStats first
        const sessionStats = sessionStatsRepository.create({
            userId:user.id,
            courseId:course.id,
            topic,
            sessionStart: new Date(),
        });

        // Save SessionStats and get the saved entity (this will give us the ID)
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
        const sessionStats = await sessionStatsRepository.findOne({ where: { id: sessionId } });

        if (!sessionStats) {
            res.status(404).json({ message: 'Session not found' });
            return;
        }

        if (sessionStats.sessionEnd) {
            res.status(400).json({ message: 'Session already ended' });
            return;
        }

        // Update sessionEnd to the current timestamp
        sessionStats.sessionEnd = new Date();

        // Save the updated session
        await sessionStatsRepository.save(sessionStats);

        // Return a successful response
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
    const { sessionId, moduleStats } = req.body;  // Get sessionId and moduleStats from the request body

    if (!sessionId || !moduleStats) {
        res.status(400).json({ message: 'Session ID and module stats are required' });
        return;
    }

    try {
        // Find the session by sessionId and load existing modules
        const sessionStats = await sessionStatsRepository.findOne({
            where: { id: sessionId },
            relations: ['modulesStats'], // Load existing modulesStats
        });

        if (!sessionStats) {
            res.status(404).json({ message: 'Session not found' });
            return;
        }

        if (sessionStats.sessionEnd) {
            res.status(400).json({ message: 'Session already ended' });
            return;
        }

        // Ensure moduleStats is a valid array
        if (!Array.isArray(moduleStats) || moduleStats.length === 0) {
            res.status(400).json({ message: 'Module stats must be a non-empty array' });
            return;
        }

        let updatedModulesStats;
        if(sessionStats.modulesStats){
            // Create a map of existing modules by moduleName for easy lookup
            const existingModulesMap = new Map(sessionStats.modulesStats.map(mod => [mod.moduleName, mod]));

            // Process each incoming moduleStats entry
            updatedModulesStats = await Promise.all(
                moduleStats.map(async (module: any) => {
                    const existingModule = existingModulesMap.get(module.moduleName);

                    if (existingModule) {
                        // Update the existing module
                        existingModule.adaptive = module.adaptive ?? existingModule.adaptive;
                        existingModule.quiz = module.quiz ?? existingModule.quiz;
                        existingModule.wrongAnswers = module.wrongAnswers ?? existingModule.wrongAnswers;
                        return moduleStatsRepository.save(existingModule);
                    } else {
                        // Create a new module entry
                        const newModule = moduleStatsRepository.create({
                            moduleName: module.moduleName,
                            adaptive: module.adaptive ?? [],
                            quiz: module.quiz ?? [],
                            wrongAnswers: module.wrongAnswers ?? [],
                            sessionStats: sessionStats,  // Link module to session
                        });
                        return moduleStatsRepository.save(newModule);
                    }
                })
            );
        }
        else{
            updatedModulesStats = moduleStats;
        }

        // Update the session's modulesStats
        sessionStats.modulesStats = updatedModulesStats;

        // Save the updated session
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