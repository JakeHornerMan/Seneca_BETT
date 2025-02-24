// User Table
export interface User {
    id: string;
    username: string;
    email: string;
    password: string; 
    role: 'user' | 'admin';
    createdAt: Date;
}
  
// Course Table
export interface Course {
    courseId: number;
    courseTitle: string;
    qualification: string;
    modules: string[];
}
  
// StatSession Table
export interface SessionStats {
    sessionStatId: number;
    courseId: number;
    userId: number;
    modulesCompleted?: string;
    sessionDuration?: string;
    score?: number;
    sessionStart?: Date;
    sessionEnd?: Date;
}
  
// StatCourse Table
export interface StatCourse {
    courseStatId: number;
    courseId: number;
    userId: number;
    totalSessions: number;
    topSessionScore: number;
    lastSession: Date;
}
  