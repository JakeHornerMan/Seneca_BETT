// User Table
export interface User {
    userId: number;
    name: string;
    email: string;
    password: string;
    school?: string;
    userType?: string;
    streak?: number;
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
    modulesCompleted?: string; // JSON string representing completed modules
    sessionDuration?: string; // Assuming time is stored as a string (ISO 8601 format)
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
  