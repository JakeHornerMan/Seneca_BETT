import { GetTotalModulesStudied, GetTotalSessionTime, GetAverageModuleScore } from "./StatService";

describe("GetTotalModulesStudied", () => {
    it("should return the correct number of studied modules", () => {
        const mockSessions = [
            {
                modulesStats: [
                    { moduleName: "Module 1" },
                    { moduleName: "Module 2" },
                ],
            },
            {
                modulesStats: [{ moduleName: "Module 1" }],
            },
        ];

        const result = GetTotalModulesStudied(mockSessions);
        expect(result.totalModulesStudied).toBe(2);
        expect(result.moduleNames).toEqual(["Module 1", "Module 2"]);
    });

    it("should return 0 if no modules are studied", () => {
        const mockSessions = [{ modulesStats: [] }];
        const result = GetTotalModulesStudied(mockSessions);
        expect(result.totalModulesStudied).toBe(0);
    });
});

describe("GetAverageModuleScore", () => {
    it("should calculate the correct average module score", () => {
        const mockSessions = [
            {
                sessionPoints: 10,
                modulesStats: [
                    { adaptive: { score: 80 }, quiz: { score: 90 } },
                    { adaptive: { score: 70 }, quiz: { score: 60 } },
                ],
            },
        ];

        const result = GetAverageModuleScore(mockSessions);
        expect(result.totalSessionPoints).toBe(10);
        expect(result.overallAverageScore).toBe(75);
    });

    it("should return 0 if no modules exist", () => {
        const mockSessions = [{ sessionPoints: 5, modulesStats: [] }];
        const result = GetAverageModuleScore(mockSessions);
        expect(result.overallAverageScore).toBe(0);
    });
});

describe("GetTotalSessionTime", () => {
    it("should calculate total session time correctly", () => {
        const mockSessions = [
            {
                sessionStart: "2024-02-01T10:00:00Z",
                sessionEnd: "2024-02-01T12:30:00Z",
                isEnd: true,
            },
        ];

        const result = GetTotalSessionTime(mockSessions);
        expect(result.totalDuration).toBe("2 hours 30 minutes");
        expect(result.timeInMinutes).toBe(150);
    });

    it("should return 0 minutes if session is not ended", () => {
        const mockSessions = [
            {
                sessionStart: "2024-02-01T10:00:00Z",
                sessionEnd: null,
                isEnd: false,
            },
        ];

        const result = GetTotalSessionTime(mockSessions);
        expect(result.timeInMinutes).toBe(0);
    });
});