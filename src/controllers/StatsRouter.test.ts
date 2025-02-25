import request from "supertest";
import express from "express";
import statsRouter from "./StatsRouter";
import { GetSessionDataByCourseId, StatsOnCourse, StatsOnCourseSession } from "../service/StatService";

// Mock authentication and authorization middlewares
jest.mock("../middlewares/authMiddleware", () => ({
    authenticateJWT: (req: any, res: any, next: any) => next(),
}));

jest.mock("../middlewares/roleMiddleware", () => ({
    authorizeRole: (role: string) => (req: any, res: any, next: any) => next(),
}));

// Mock the service functions
jest.mock("../service/StatService", () => ({
    GetSessionDataByCourseId: jest.fn(),
    StatsOnCourse: jest.fn(),
    StatsOnCourseSession: jest.fn(),
}));

const app = express();
app.use(express.json());
app.use("/stats", statsRouter);

describe("GET /stats/sessions/:courseId", () => {
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

    it("should return sessions for a given course ID", async () => {
        (GetSessionDataByCourseId as jest.Mock).mockResolvedValue(mockResponse);

        const courseId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890"; // Example course ID
        const response = await request(app)
            .get(`/stats/sessions/${courseId}`)
            .set("Authorization", "Bearer token"); // Add authentication if needed

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockResponse);
        });

        it("should return 500 when an error occurs", async () => {
        (GetSessionDataByCourseId as jest.Mock).mockRejectedValue(new Error("Database error"));

        const courseId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890"; // Example course ID
        const response = await request(app)
            .get(`/stats/sessions/${courseId}`)
            .set("Authorization", "Bearer token"); // Add authentication if needed

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Internal server error" });
    });
  });

describe("GET /stats/courses/:courseId", () => {
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
        (StatsOnCourse as jest.Mock).mockResolvedValue(mockResponse);

        const courseId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
        const response = await request(app)
        .get(`/stats/courses/${courseId}`)
        .set("Authorization", "Bearer token"); // Include auth if necessary

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockResponse);
    });

    it("should return 500 when an error occurs", async () => {
        (StatsOnCourse as jest.Mock).mockRejectedValue(new Error("Database error"));

        const courseId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
        const response = await request(app)
        .get(`/stats/courses/${courseId}`)
        .set("Authorization", "Bearer token");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Internal server error" });
    });
});

describe("GET /stats/courses/:courseId/sessions/:sessionId", () => {
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

    it("should return session stats for a given course ID and session ID", async () => {
        (StatsOnCourseSession as jest.Mock).mockResolvedValue(mockResponse);

        const courseId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
        const sessionId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
        const response = await request(app)
            .get(`/stats/courses/${courseId}/sessions/${sessionId}`)
            .set("Authorization", "Bearer token");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockResponse);
    });

    it("should return 500 when an error occurs", async () => {
        (StatsOnCourseSession as jest.Mock).mockRejectedValue(new Error("Database error"));

        const courseId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
        const sessionId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
        const response = await request(app)
            .get(`/stats/courses/${courseId}/sessions/${sessionId}`)
            .set("Authorization", "Bearer token");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Internal server error" });
    });
});
