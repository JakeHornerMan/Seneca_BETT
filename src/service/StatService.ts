import { ModuleStats } from "../models/ModuleStats";
import { SessionStats } from "../models/SessionStats";
import { AppDataSource } from "../repositorys/appDataSource";

const sessionStatsRepository = AppDataSource.getRepository(SessionStats);
const moduleStatsRepository = AppDataSource.getRepository(ModuleStats);

export const UserStatsOnCourse = async (courseId: string, userId: any) => {
    try {
        const sessions = await GetSessionDataByCourseAndUserId(courseId, userId);
        console.log(sessions);

        if (!Array.isArray(sessions)) {
            return sessions;  
        }
        else{
            const sessionTime = GetTotalSessionTime(sessions);
            const moduleAmount = GetTotalModulesStudied(sessions);
            const scores = GetAverageModuleScore(sessions);

            return {
                moduleAmount,
                sessionTime,
                scores,
            };
        }
    } catch (error) {
        console.error('Error in StatsOnCourseSessions:', error);
        return { message: 'Internal server error' };  // Return a general internal server error
    }
};

export const StatsOnCourse = async (courseId: string) => {
    try {
        const sessions = await GetSessionDataByCourseId(courseId);
        console.log(sessions);

        if (!Array.isArray(sessions)) {
            return sessions;  
        }
        else{
            const sessionTime = GetTotalSessionTime(sessions);
            const moduleAmount = GetTotalModulesStudied(sessions);
            const scores = GetAverageModuleScore(sessions);

            return {
                moduleAmount,
                sessionTime,
                scores,
            };
        }
    } catch (error) {
        console.error('Error in StatsOnCourseSessions:', error);
        return { message: 'Internal server error' };  // Return a general internal server error
    }
};

export const UserStatsOnCourseSession = async (courseId: string, userId: any, sessionId: any) => {
    try {
        const sessions = await GetSessionDataByCourseUserAndSessionId(courseId, userId, sessionId);
        console.log(sessions);

        if (!Array.isArray(sessions)) {
            return sessions;  
        }
        else{
            const sessionTime = GetTotalSessionTime(sessions);
            const moduleAmount = GetTotalModulesStudied(sessions);
            const scores = GetAverageModuleScore(sessions);

            return {
                sessionId,
                moduleAmount,
                scores,
                sessionTime,
            };
        }
    } catch (error) {
        console.error('Error in StatsOnCourseSessions:', error);
        return { message: 'Internal server error' };  // Return a general internal server error
    }
};

export const StatsOnCourseSession = async (courseId: string, sessionId: any) => {
    try {
        const sessions = await GetSessionDataByCourseAndSessionId(courseId, sessionId);
        console.log(sessions);

        if (!Array.isArray(sessions)) {
            return sessions;  
        }
        else{
            const sessionTime = GetTotalSessionTime(sessions);
            const moduleAmount = GetTotalModulesStudied(sessions);
            const scores = GetAverageModuleScore(sessions);

            return {
                sessionId,
                moduleAmount,
                scores,
                sessionTime,
            };
        }
    } catch (error) {
        console.error('Error in StatsOnCourseSessions:', error);
        return { message: 'Internal server error' };  // Return a general internal server error
    }
};

export const GetTotalModulesStudied = (sessions: any[]) => {
    try {
        const studiedModules = new Set<string>();

        sessions.forEach((session) => {
            if (session.modulesStats && session.modulesStats.length > 0) {
                session.modulesStats.forEach((module: any) => {
                    studiedModules.add(module.moduleName);
                });
            }
        });

        const modulesArray = Array.from(studiedModules).sort();
        return { totalModulesStudied: modulesArray.length, moduleNames: modulesArray };
    } catch (error) {
        console.error('Error calculating total modules studied:', error);
        return { message: 'Internal server error: GetTotalModulesStudied' };
    }
};

export const GetAverageModuleScore = (sessions: any[]) => {
    try {
        let totalScore = 0;
        let totalModules = 0;
        let totalSessionPoints = 0;

        sessions.forEach((session) => {
            totalSessionPoints += session.sessionPoints;

            session.modulesStats.forEach((module: any) => {
                const adaptiveScore = module.adaptive.score || 0;
                const quizScore = module.quiz.score || 0;

                const averageScore = (adaptiveScore + quizScore) / 2;

                totalScore += averageScore;
                totalModules += 1;
            });
        });

        const overallAverageScore = totalModules > 0 ? totalScore / totalModules : 0;

        return { 
            totalSessionPoints, 
            overallAverageScore 
        };
    } catch (error) {
        console.error('Error calculating overall average module score:', error);
        return { message: 'Internal server error: GetAverageModuleScore' };
    }
};

export const GetTotalSessionTime = (sessions: any[]) => {
    try {
        let totalDurationInMs = 0;

        sessions.forEach((session) => {
            const sessionStart = new Date(session.sessionStart);
            const sessionEnd = new Date(session.sessionEnd);

            if (!sessionEnd || isNaN(sessionEnd.getTime()) || !session.isEnd) {
                return;
            }

            const durationInMs = sessionEnd.getTime() - sessionStart.getTime();

            totalDurationInMs += durationInMs;
        });

        // Convert the total duration in milliseconds to hours and minutes
        const totalHours = Math.floor(totalDurationInMs / (1000 * 60 * 60));
        const totalMinutes = Math.floor((totalDurationInMs % (1000 * 60 * 60)) / (1000 * 60));

        // Calculate total time in minutes
        const timeInMinutes = Math.floor(totalDurationInMs / (1000 * 60));

        const totalDuration = `${totalHours} hours ${totalMinutes} minutes`;

        return { totalDuration, timeInMinutes };
    } catch (error) {
        console.error('Error calculating total session time:', error);
        return { message: 'Internal server error: GetTotalSessionTime' };
    }
};

export const GetSessionDataByUserId = async (userId: any) => {
    try {
        const sessions = await sessionStatsRepository
            .createQueryBuilder('session')
            .leftJoinAndSelect('session.modulesStats', 'moduleStats')
            .where('session.userId = :userId', { userId })
            .getMany();

        if (sessions.length === 0) {
            return { message: 'No session stats found for this user' };
        }

        return sessions;
    } catch (error) {
        console.error('Error fetching session stats:', error);
        return { message: 'Internal server error' };
    } 
};

export const GetSessionDataByCourseId = async (courseId: string) => {
    try {
        const sessions = await sessionStatsRepository
            .createQueryBuilder('session')
            .leftJoinAndSelect('session.modulesStats', 'moduleStats')
            .where('session.courseId = :courseId', { courseId })
            .getMany();

        if (sessions.length === 0) {
            return { message: 'No session stats found for this course' };
        }

        return sessions;
    } catch (error) {
        console.error('Error fetching session stats:', error);
        return { message: 'Internal server error' };
    }
};

export const GetSessionDataByCourseAndUserId = async (courseId: string, userId: number) => {
    try {
        const sessions = await sessionStatsRepository
            .createQueryBuilder('session')
            .leftJoinAndSelect('session.modulesStats', 'moduleStats')
            .where('session.courseId = :courseId', { courseId })
            .andWhere('session.userId = :userId', { userId })
            .getMany();

        if (sessions.length === 0) {
            return { message: 'No session stats found for this course and user' };
        }

        return sessions;
    } catch (error) {
        console.error('Error fetching session stats:', error);
        return { message: 'Internal server error' };
    }
};

export const GetSessionDataByCourseAndSessionId = async (courseId: string, sessionId: string) => {
    try {
        const sessions = await sessionStatsRepository
            .createQueryBuilder('session')
            .leftJoinAndSelect('session.modulesStats', 'moduleStats')
            .where('session.courseId = :courseId', { courseId })
            .andWhere('session.id = :sessionId', { sessionId }) // Add filter for sessionId
            .getMany();

        if (sessions.length === 0) {
            return { message: 'No session stats found for this course, user, and session' };
        }

        return sessions;
    } catch (error) {
        console.error('Error fetching session stats:', error);
        return { message: 'Internal server error' };
    }
};

export const GetSessionDataByCourseUserAndSessionId = async (courseId: string, userId: string, sessionId: string) => {
    try {
        const sessions = await sessionStatsRepository
            .createQueryBuilder('session')
            .leftJoinAndSelect('session.modulesStats', 'moduleStats')
            .where('session.courseId = :courseId', { courseId })
            .andWhere('session.userId = :userId', { userId })
            .andWhere('session.id = :sessionId', { sessionId }) // Add filter for sessionId
            .getMany();

        if (sessions.length === 0) {
            return { message: 'No session stats found for this course, user, and session' };
        }

        return sessions;
    } catch (error) {
        console.error('Error fetching session stats:', error);
        return { message: 'Internal server error' };
    }
};