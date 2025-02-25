import request from "supertest";
import express from "express";
import userStatsRouter from "./userStatsRouter";
import { GetUser } from '../utils/jwt';
import { GetSessionDataByUserId, StatsOnCourseSession, UserStatsOnCourse, UserStatsOnCourseSession } from "../service/StatService";

// Mock authentication and authorization middlewares
jest.mock("../middlewares/authMiddleware", () => ({
    authenticateJWT: (req: any, res: any, next: any) => next(),
}));

jest.mock("../middlewares/roleMiddleware", () => ({
    authorizeRole: (role: string) => (req: any, res: any, next: any) => next(),
}));

// Mock the service functions
jest.mock("../utils/jwt", () => ({
    GetUser: jest.fn(),
}));

jest.mock("../service/StatService", () => ({
    UserStatsOnCourse: jest.fn(),
    UserStatsOnCourseSession: jest.fn(),
    GetSessionDataByUserId: jest.fn(),
}));

const app = express();
app.use(express.json());
app.use("/stats/user", userStatsRouter);

describe("GET /stats/user/courses/:courseId", () => {
    const mockResponse = {
        moduleAmount: {
            totalModulesStudied: 2,
            moduleNames: ["Fractions", "Integers"],
        },
        sessionTime: {
            totalDuration: "2 hours 30 minutes",
            timeInMinutes: 150,
        },
        scores: {
            totalSessionPoints: 315,
            overallAverageScore: 78.75,
        },
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should return course stats for a given course ID", async () => {
        (GetUser as jest.Mock).mockReturnValue({ id: "user123", role: "user" });
        (UserStatsOnCourse as jest.Mock).mockResolvedValue(mockResponse);

        const courseId = "course123";
        const response = await request(app)
            .get(`/stats/user/courses/${courseId}`)
            .set("Authorization", "Bearer validToken");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockResponse);
    });

    it("should return 401 if user session data is missing", async () => {
        (GetUser as jest.Mock).mockReturnValue(undefined);

        const courseId = "course123";
        const response = await request(app)
            .get(`/stats/user/courses/${courseId}`)
            .set("Authorization", "Bearer invalidToken");

        expect(response.status).toBe(401);
        expect(response.body).toEqual({ message: "User does not have Session data" });
    });

    it("should return 500 when an error occurs", async () => {
        (GetUser as jest.Mock).mockReturnValue({ id: "user123" });
        (UserStatsOnCourse as jest.Mock).mockRejectedValue(new Error("Database error"));

        const courseId = "course123";
        const response = await request(app)
            .get(`/stats/user/courses/${courseId}`)
            .set("Authorization", "Bearer validToken");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Internal server error" });
    });
});

describe("GET /stats/user/courses/:courseId/sessions/:sessionId", () => {
    const mockResponse = {
      sessionId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      moduleAmount: {
        totalModulesStudied: 2,
        moduleNames: ["Fractions", "Integers"],
      },
      scores: {
        totalSessionPoints: 315,
        overallAverageScore: 78.75,
      },
      sessionTime: {
        totalDuration: "2 hours 30 minutes",
        timeInMinutes: 150,
      },
    };
  
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should return course stats for a given course ID", async () => {
        (UserStatsOnCourseSession as jest.Mock).mockResolvedValue(mockResponse);
        (GetUser as jest.Mock).mockReturnValue({ id: "user123", role: "user" });
        

        const courseId = "math-gcse";
        const sessionId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
        const response = await request(app)
            .get(`/stats/user/courses/${courseId}/sessions/${sessionId}`)
            .set("Authorization", "Bearer validToken");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockResponse);
    });
  
    it("should return 401 if user session data is missing", async () => {
        (GetUser as jest.Mock).mockReturnValue(undefined);

        const courseId = "course123";
        const sessionId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
        const response = await request(app)
            .get(`/stats/user/courses/${courseId}/sessions/${sessionId}`)
            .set("Authorization", "Bearer invalidToken");

        expect(response.status).toBe(401);
        expect(response.body).toEqual({ message: "User does not have Session data" });
    });

    it("should return 500 when an error occurs", async () => {
        (GetUser as jest.Mock).mockReturnValue({ id: "user123", role: "user" });
        (UserStatsOnCourseSession as jest.Mock).mockRejectedValue(new Error("Database error"));

        const courseId = "course123";
        const sessionId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
        const response = await request(app)
            .get(`/stats/user/courses/${courseId}/sessions/${sessionId}`)
            .set("Authorization", "Bearer validToken");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Internal server error" });
    });
});

describe("GET /stats/user/sessions", () => {
    const mockResponse = [
        {
            id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
            courseTitle: "Mathematics - GCSE",
            topic: "Number",
            sessionStart: "2025-02-23T10:00:00.000Z",
            sessionEnd: "2025-02-23T12:30:00.000Z",
            isEnd: true,
            sessionPoints: 315,
            modulesStats: [
            {
                id: 1,
                moduleName: "Integers",
                adaptive: {
                answers: ["A", "B", "C", "A", "D"],
                isCompleted: true,
                score: 78,
                },
                quiz: {
                answers: ["D", "A", "C", "B", "D", "A", "C", "B"],
                isCompleted: true,
                score: 74,
                },
                wrongAnswers: {
                answers: ["adaptive: 3", "quiz: 1"],
                isCompleted: false,
                score: 0,
                },
            },
            ],
        },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should return session for a given course ID", async () => {
        (GetUser as jest.Mock).mockReturnValue({ id: "user123", role: "user" });
        (GetSessionDataByUserId as jest.Mock).mockResolvedValue(mockResponse);

        const response = await request(app)
            .get(`/stats/user/sessions`)
            .set("Authorization", "Bearer validToken");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockResponse);
    });

    it("should return 401 if user session data is missing", async () => {
        (GetUser as jest.Mock).mockReturnValue(undefined);

        const response = await request(app)
            .get(`/stats/user/sessions`)
            .set("Authorization", "Bearer invalidToken");

        expect(response.status).toBe(401);
        expect(response.body).toEqual({ message: "User does not have Session data" });
    });

    it("should return 500 when an error occurs", async () => {
        (GetUser as jest.Mock).mockReturnValue({ id: "user123", role: "user" });
        (GetSessionDataByUserId as jest.Mock).mockRejectedValue(new Error("Database error"));

        const courseId = "course123";
        const response = await request(app)
            .get(`/stats/user/courses/${courseId}`)
            .set("Authorization", "Bearer validToken");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Internal server error" });
    });
});