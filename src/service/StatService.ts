import { ModuleStats } from "../models/ModuleStats";
import { SessionStats } from "../models/SessionStats";
import { AppDataSource } from "../repositorys/appDataSource";

const sessionStatsRepository = AppDataSource.getRepository(SessionStats);
const moduleStatsRepository = AppDataSource.getRepository(ModuleStats);

export const GetSessionDataByUserId = async (userId: any) => {
    try {
        // Fetch session stats from the database
        const sessions = await sessionStatsRepository
            .createQueryBuilder('session')
            .leftJoinAndSelect('session.modulesStats', 'moduleStats')
            .where('session.userId = :userId', { userId })
            .getMany();

        if (sessions.length === 0) {
            return { message: 'No session stats found for this user' };
        }

        // Send the data back
        return sessions;
    } catch (error) {
        console.error('Error fetching session stats:', error);
        return { message: 'Internal server error' };
    } 
};

export const GetSessionDataByCourseId = async (courseId: string) => {
    try {
        // Fetch session stats from the database by courseId
        const sessions = await sessionStatsRepository
            .createQueryBuilder('session')
            .leftJoinAndSelect('session.modulesStats', 'moduleStats')  // Joining the related moduleStats
            .where('session.courseId = :courseId', { courseId })  // Fetch by courseId
            .getMany();

        if (sessions.length === 0) {
            return { message: 'No session stats found for this course' };
        }

        // Return the session data for the provided courseId
        return sessions;
    } catch (error) {
        console.error('Error fetching session stats:', error);
        return { message: 'Internal server error' };
    }
};

export const GetSessionDataByCourseAndUserId = async (courseId: string, userId: any) => {
    try {
        // Fetch session stats from the database by courseId and userId
        const sessions = await sessionStatsRepository
            .createQueryBuilder('session')
            .leftJoinAndSelect('session.modulesStats', 'moduleStats')  // Joining the related moduleStats
            .where('session.courseId = :courseId', { courseId })  // Filter by courseId
            .andWhere('session.userId = :userId', { userId })  // Filter by userId
            .getMany();

        if (sessions.length === 0) {
            return { message: 'No session stats found for this course and user' };
        }

        // Return the session data for the provided courseId and userId
        return sessions;
    } catch (error) {
        console.error('Error fetching session stats:', error);
        return { message: 'Internal server error' };
    }
};

export const GetUserSessionTimes = async (userId: any) => {
    try {
        const sessions = await GetSessionDataByUserId(userId);

        if (!Array.isArray(sessions)) {
            return sessions;  
        }
        else{

            const sessionTimes = await GetSessionTimes(sessions);

            return sessionTimes;
        }
    } catch (error) {
        console.error('Error in GetUserSessionTimes:', error);
        return { message: 'Internal server error' };  // Return a general internal server error
    }
};

export const GetUserCourseSessionTimes = async (courseId: string, userId: any) => {
    try {
        const sessions = await GetSessionDataByCourseAndUserId(courseId, userId);

        if (!Array.isArray(sessions)) {
            return sessions;  
        }
        else{

            const sessionTimes = await GetSessionTimes(sessions);

            return sessionTimes;
        }
    } catch (error) {
        console.error('Error in GetUserSessionTimes:', error);
        return { message: 'Internal server error' };  // Return a general internal server error
    }
};

export const GetCourseSessionTimes = async (courseId: string) => {
    try {
        const sessions = await GetSessionDataByCourseId(courseId);

        if (!Array.isArray(sessions)) {
            return sessions;  
        }
        else{

            const sessionTimes = await GetSessionTimes(sessions);

            return sessionTimes;
        }
    } catch (error) {
        console.error('Error in GetUserSessionTimes:', error);
        return { message: 'Internal server error' };  // Return a general internal server error
    }
};

export const GetSessionTimes = (sessions: any[]) => {
    try {
        // Check if sessions data is available
        if (!sessions || sessions.length === 0) {
            return { message: 'No session data available' };
        }

        // Calculate the duration for each session and return only the necessary fields
        const sessionsWithDuration = sessions.map((session) => {
            const sessionStart = new Date(session.sessionStart);
            const sessionEnd = new Date(session.sessionEnd);

            // Check if sessionEnd is valid (session is completed)
            if (!sessionEnd || isNaN(sessionEnd.getTime())) {
                return { 
                    id: session.id, 
                    topic: session.topic, 
                    sessionStart: session.sessionStart, 
                    sessionEnd: session.sessionEnd, 
                    duration: 'Session not ended yet' 
                };
            }

            // Calculate the duration in milliseconds
            const durationInMs = sessionEnd.getTime() - sessionStart.getTime();

            // Convert milliseconds to hours and minutes
            const hours = Math.floor(durationInMs / (1000 * 60 * 60));
            const minutes = Math.floor((durationInMs % (1000 * 60 * 60)) / (1000 * 60));

            // Add the duration to the session object in a human-readable format
            const duration = `${hours} hours ${minutes} minutes`;

            // Return only the necessary fields along with the duration
            return { 
                id: session.id, 
                topic: session.topic, 
                sessionStart: session.sessionStart, 
                sessionEnd: session.sessionEnd, 
                duration 
            };
        });

        // Return the session data with the calculated durations
        return sessionsWithDuration;
    } catch (error) {
        console.error('Error calculating session times:', error);
        return { message: 'Internal server error' };
    }
};

export const GetAverageUserSessionTime = async (userId: any) => {
    try {
        const sessions = await GetSessionDataByUserId(userId);

        if (!Array.isArray(sessions)) {
            return sessions;  
        }
        else{

            const sessionTime = await GetAverageSessionTime(sessions);

            return sessionTime;
        }
    } catch (error) {
        console.error('Error in GetUserSessionTimes:', error);
        return { message: 'Internal server error' };  // Return a general internal server error
    }
};

export const GetAverageUserSessionTimeForCourse = async (courseId: string, userId: any) => {
    try {
        const sessions = await GetSessionDataByCourseAndUserId(courseId, userId);
        console.log(sessions);

        if (!Array.isArray(sessions)) {
            return sessions;  
        }
        else{

            const sessionTime = await GetAverageSessionTime(sessions);

            return sessionTime;
        }
    } catch (error) {
        console.error('Error in GetUserSessionTimes:', error);
        return { message: 'Internal server error' };  // Return a general internal server error
    }
};

export const GetAverageSessionTime = (sessions: any[]) => {
    try {
        // Check if sessions data is available
        if (!sessions || sessions.length === 0) {
            return { message: 'No session data available' };
        }

        // Filter out sessions that haven't ended
        const completedSessions = sessions.filter(session => session.sessionEnd && !isNaN(new Date(session.sessionEnd).getTime()));

        if (completedSessions.length === 0) {
            return { message: 'No completed sessions available to calculate average time' };
        }

        // Calculate total duration in milliseconds
        const totalDurationMs = completedSessions.reduce((total, session) => {
            const sessionStart = new Date(session.sessionStart).getTime();
            const sessionEnd = new Date(session.sessionEnd).getTime();
            return total + (sessionEnd - sessionStart);
        }, 0);

        // Calculate the average duration in milliseconds
        const averageDurationMs = totalDurationMs / completedSessions.length;

        // Convert milliseconds to hours and minutes
        const hours = Math.floor(averageDurationMs / (1000 * 60 * 60));
        const minutes = Math.floor((averageDurationMs % (1000 * 60 * 60)) / (1000 * 60));

        // Format the result
        const averageDuration = `${hours} hours ${minutes} minutes`;

        return { averageDuration };
    } catch (error) {
        console.error('Error calculating average session time:', error);
        return { message: 'Internal server error' };
    }
};